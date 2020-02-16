import { Subject } from 'rxjs';
import { Deferred, getDeepFromObject } from './helpers';
import { DataSet } from './data-set/data-set';
var Grid = /** @class */ (function () {
    function Grid(source, settings) {
        this.createFormShown = false;
        this.onSelectRowSource = new Subject();
        this.setSettings(settings);
        this.setSource(source);
    }
    Grid.prototype.showActionColumn = function (position) {
        return this.isCurrentActionsPosition(position) && this.isActionsVisible();
    };
    Grid.prototype.isCurrentActionsPosition = function (position) {
        return position == this.getSetting('actions.position');
    };
    Grid.prototype.isActionsVisible = function () {
        return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
    };
    Grid.prototype.isMultiSelectVisible = function () {
        return this.getSetting('selectMode') === 'multi';
    };
    Grid.prototype.getNewRow = function () {
        return this.dataSet.newRow;
    };
    Grid.prototype.setSettings = function (settings) {
        this.settings = settings;
        this.dataSet = new DataSet([], this.getSetting('columns'));
        if (this.source) {
            this.source.refresh();
        }
    };
    Grid.prototype.getDataSet = function () {
        return this.dataSet;
    };
    Grid.prototype.setSource = function (source) {
        var _this = this;
        this.source = this.prepareSource(source);
        this.source.onChanged().subscribe(function (changes) { return _this.processDataChange(changes); });
        this.source.onUpdated().subscribe(function (data) {
            var changedRow = _this.dataSet.findRowByData(data);
            changedRow.setData(data);
        });
    };
    Grid.prototype.getSetting = function (name, defaultValue) {
        return getDeepFromObject(this.settings, name, defaultValue);
    };
    Grid.prototype.getColumns = function () {
        return this.dataSet.getColumns();
    };
    Grid.prototype.getRows = function () {
        return this.dataSet.getRows();
    };
    Grid.prototype.selectRow = function (row) {
        this.dataSet.selectRow(row);
    };
    Grid.prototype.multipleSelectRow = function (row) {
        this.dataSet.multipleSelectRow(row);
    };
    Grid.prototype.onSelectRow = function () {
        return this.onSelectRowSource.asObservable();
    };
    Grid.prototype.edit = function (row) {
        row.isInEditing = true;
    };
    Grid.prototype.create = function (row, confirmEmitter) {
        var _this = this;
        var deferred = new Deferred();
        deferred.promise.then(function (newData) {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipAdd) {
                _this.createFormShown = false;
            }
            else {
                _this.source.prepend(newData).then(function () {
                    _this.createFormShown = false;
                    _this.dataSet.createNewRow();
                });
            }
        }).catch(function (err) {
            // doing nothing
        });
        if (this.getSetting('add.confirmCreate')) {
            confirmEmitter.emit({
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    };
    Grid.prototype.save = function (row, confirmEmitter) {
        var _this = this;
        var deferred = new Deferred();
        deferred.promise.then(function (newData) {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipEdit) {
                row.isInEditing = false;
            }
            else {
                _this.source.update(row.getData(), newData).then(function () {
                    row.isInEditing = false;
                });
            }
        }).catch(function (err) {
            // doing nothing
        });
        if (this.getSetting('edit.confirmSave')) {
            confirmEmitter.emit({
                data: row.getData(),
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    };
    Grid.prototype.delete = function (row, confirmEmitter) {
        var _this = this;
        var deferred = new Deferred();
        deferred.promise.then(function () {
            _this.source.remove(row.getData());
        }).catch(function (err) {
            // doing nothing
        });
        if (this.getSetting('delete.confirmDelete')) {
            confirmEmitter.emit({
                data: row.getData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    };
    Grid.prototype.processDataChange = function (changes) {
        if (this.shouldProcessChange(changes)) {
            this.dataSet.setData(changes['elements']);
            if (this.getSetting('selectMode') !== 'multi') {
                var row = this.determineRowToSelect(changes);
                if (row) {
                    this.onSelectRowSource.next(row);
                }
            }
        }
    };
    Grid.prototype.shouldProcessChange = function (changes) {
        if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
            return true;
        }
        else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
            return true;
        }
        return false;
    };
    // TODO: move to selectable? Separate directive
    Grid.prototype.determineRowToSelect = function (changes) {
        if (['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes['action']) !== -1) {
            return this.dataSet.select();
        }
        if (changes['action'] === 'remove') {
            if (changes['elements'].length === 0) {
                // we have to store which one to select as the data will be reloaded
                this.dataSet.willSelectLastRow();
            }
            else {
                return this.dataSet.selectPreviousRow();
            }
        }
        if (changes['action'] === 'append') {
            // we have to store which one to select as the data will be reloaded
            this.dataSet.willSelectLastRow();
        }
        if (changes['action'] === 'add') {
            return this.dataSet.selectFirstRow();
        }
        if (changes['action'] === 'update') {
            return this.dataSet.selectFirstRow();
        }
        if (changes['action'] === 'prepend') {
            // we have to store which one to select as the data will be reloaded
            this.dataSet.willSelectFirstRow();
        }
        return null;
    };
    Grid.prototype.prepareSource = function (source) {
        var initialSource = this.getInitialSort();
        if (initialSource && initialSource['field'] && initialSource['direction']) {
            source.setSort([initialSource], false);
        }
        if (this.getSetting('pager.display') === true) {
            source.setPaging(1, this.getSetting('pager.perPage'), false);
        }
        source.refresh();
        return source;
    };
    Grid.prototype.getInitialSort = function () {
        var sortConf = {};
        this.getColumns().forEach(function (column) {
            if (column.isSortable && column.defaultSortDirection) {
                sortConf['field'] = column.id;
                sortConf['direction'] = column.defaultSortDirection;
                sortConf['compare'] = column.getCompareFunction();
            }
        });
        return sortConf;
    };
    Grid.prototype.getSelectedRows = function () {
        return this.dataSet.getRows()
            .filter(function (r) { return r.isSelected; });
    };
    Grid.prototype.selectAllRows = function (status) {
        this.dataSet.getRows()
            .forEach(function (r) { return r.isSelected = status; });
    };
    Grid.prototype.getFirstRow = function () {
        return this.dataSet.getFirstRow();
    };
    Grid.prototype.getLastRow = function () {
        return this.dataSet.getLastRow();
    };
    return Grid;
}());
export { Grid };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9saWIvZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSS9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRzlDO0lBVUUsY0FBWSxNQUFrQixFQUFFLFFBQWE7UUFSN0Msb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFNakMsc0JBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUdyQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELCtCQUFnQixHQUFoQixVQUFpQixRQUFnQjtRQUMvQixPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1RSxDQUFDO0lBRUQsdUNBQXdCLEdBQXhCLFVBQXlCLFFBQWdCO1FBQ3ZDLE9BQU8sUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsK0JBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDNUosQ0FBQztJQUVELG1DQUFvQixHQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FB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O0lBRUQseUJBQVUsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUgsV0FBQztBQUFELENBQUMsQUFwUUQsSUFvUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVmZXJyZWQsIGdldERlZXBGcm9tT2JqZWN0IH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4vZGF0YS1zZXQvY29sdW1uJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4vZGF0YS1zZXQvcm93JztcbmltcG9ydCB7IERhdGFTZXQgfSBmcm9tICcuL2RhdGEtc2V0L2RhdGEtc2V0JztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcblxuZXhwb3J0IGNsYXNzIEdyaWQge1xuXG4gIGNyZWF0ZUZvcm1TaG93bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgc2V0dGluZ3M6IGFueTtcbiAgZGF0YVNldDogRGF0YVNldDtcblxuICBvblNlbGVjdFJvd1NvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IERhdGFTb3VyY2UsIHNldHRpbmdzOiBhbnkpIHtcbiAgICB0aGlzLnNldFNldHRpbmdzKHNldHRpbmdzKTtcbiAgICB0aGlzLnNldFNvdXJjZShzb3VyY2UpO1xuICB9XG5cbiAgc2hvd0FjdGlvbkNvbHVtbihwb3NpdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNDdXJyZW50QWN0aW9uc1Bvc2l0aW9uKHBvc2l0aW9uKSAmJiB0aGlzLmlzQWN0aW9uc1Zpc2libGUoKTtcbiAgfVxuXG4gIGlzQ3VycmVudEFjdGlvbnNQb3NpdGlvbihwb3NpdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHBvc2l0aW9uID09IHRoaXMuZ2V0U2V0dGluZygnYWN0aW9ucy5wb3NpdGlvbicpO1xuICB9XG5cbiAgaXNBY3Rpb25zVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZXR0aW5nKCdhY3Rpb25zLmFkZCcpIHx8IHRoaXMuZ2V0U2V0dGluZygnYWN0aW9ucy5lZGl0JykgfHwgdGhpcy5nZXRTZXR0aW5nKCdhY3Rpb25zLmRlbGV0ZScpIHx8IHRoaXMuZ2V0U2V0dGluZygnYWN0aW9ucy5jdXN0b20nKS5sZW5ndGg7XG4gIH1cblxuICBpc011bHRpU2VsZWN0VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZXR0aW5nKCdzZWxlY3RNb2RlJykgPT09ICdtdWx0aSc7XG4gIH1cblxuICBnZXROZXdSb3coKTogUm93IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU2V0Lm5ld1JvdztcbiAgfVxuXG4gIHNldFNldHRpbmdzKHNldHRpbmdzOiBPYmplY3QpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5kYXRhU2V0ID0gbmV3IERhdGFTZXQoW10sIHRoaXMuZ2V0U2V0dGluZygnY29sdW1ucycpKTtcblxuICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldERhdGFTZXQoKTogRGF0YVNldCB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNldDtcbiAgfVxuXG4gIHNldFNvdXJjZShzb3VyY2U6IERhdGFTb3VyY2UpIHtcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMucHJlcGFyZVNvdXJjZShzb3VyY2UpO1xuXG4gICAgdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKChjaGFuZ2VzOiBhbnkpID0+IHRoaXMucHJvY2Vzc0RhdGFDaGFuZ2UoY2hhbmdlcykpO1xuXG4gICAgdGhpcy5zb3VyY2Uub25VcGRhdGVkKCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGNoYW5nZWRSb3cgPSB0aGlzLmRhdGFTZXQuZmluZFJvd0J5RGF0YShkYXRhKTtcbiAgICAgIGNoYW5nZWRSb3cuc2V0RGF0YShkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFNldHRpbmcobmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBnZXREZWVwRnJvbU9iamVjdCh0aGlzLnNldHRpbmdzLCBuYW1lLCBkZWZhdWx0VmFsdWUpO1xuICB9XG5cbiAgZ2V0Q29sdW1ucygpOiBBcnJheTxDb2x1bW4+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU2V0LmdldENvbHVtbnMoKTtcbiAgfVxuXG4gIGdldFJvd3MoKTogQXJyYXk8Um93PiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNldC5nZXRSb3dzKCk7XG4gIH1cblxuICBzZWxlY3RSb3cocm93OiBSb3cpIHtcbiAgICB0aGlzLmRhdGFTZXQuc2VsZWN0Um93KHJvdyk7XG4gIH1cblxuICBtdWx0aXBsZVNlbGVjdFJvdyhyb3c6IFJvdykge1xuICAgIHRoaXMuZGF0YVNldC5tdWx0aXBsZVNlbGVjdFJvdyhyb3cpO1xuICB9XG5cbiAgb25TZWxlY3RSb3coKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5vblNlbGVjdFJvd1NvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGVkaXQocm93OiBSb3cpIHtcbiAgICByb3cuaXNJbkVkaXRpbmcgPSB0cnVlO1xuICB9XG5cbiAgY3JlYXRlKHJvdzogUm93LCBjb25maXJtRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4pIHtcblxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XG4gICAgZGVmZXJyZWQucHJvbWlzZS50aGVuKChuZXdEYXRhKSA9PiB7XG4gICAgICBuZXdEYXRhID0gbmV3RGF0YSA/IG5ld0RhdGEgOiByb3cuZ2V0TmV3RGF0YSgpO1xuICAgICAgaWYgKGRlZmVycmVkLnJlc29sdmUuc2tpcEFkZCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm1TaG93biA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3VyY2UucHJlcGVuZChuZXdEYXRhKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1TaG93biA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGF0YVNldC5jcmVhdGVOZXdSb3coKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgLy8gZG9pbmcgbm90aGluZ1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuZ2V0U2V0dGluZygnYWRkLmNvbmZpcm1DcmVhdGUnKSkge1xuICAgICAgY29uZmlybUVtaXR0ZXIuZW1pdCh7XG4gICAgICAgIG5ld0RhdGE6IHJvdy5nZXROZXdEYXRhKCksXG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgIGNvbmZpcm06IGRlZmVycmVkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICB9XG4gIH1cblxuICBzYXZlKHJvdzogUm93LCBjb25maXJtRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4pIHtcblxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XG4gICAgZGVmZXJyZWQucHJvbWlzZS50aGVuKChuZXdEYXRhKSA9PiB7XG4gICAgICBuZXdEYXRhID0gbmV3RGF0YSA/IG5ld0RhdGEgOiByb3cuZ2V0TmV3RGF0YSgpO1xuICAgICAgaWYgKGRlZmVycmVkLnJlc29sdmUuc2tpcEVkaXQpIHtcbiAgICAgICAgcm93LmlzSW5FZGl0aW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNvdXJjZS51cGRhdGUocm93LmdldERhdGEoKSwgbmV3RGF0YSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcm93LmlzSW5FZGl0aW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIC8vIGRvaW5nIG5vdGhpbmdcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmdldFNldHRpbmcoJ2VkaXQuY29uZmlybVNhdmUnKSkge1xuICAgICAgY29uZmlybUVtaXR0ZXIuZW1pdCh7XG4gICAgICAgIGRhdGE6IHJvdy5nZXREYXRhKCksXG4gICAgICAgIG5ld0RhdGE6IHJvdy5nZXROZXdEYXRhKCksXG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgIGNvbmZpcm06IGRlZmVycmVkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGUocm93OiBSb3csIGNvbmZpcm1FbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55Pikge1xuXG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoKTtcbiAgICBkZWZlcnJlZC5wcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zb3VyY2UucmVtb3ZlKHJvdy5nZXREYXRhKCkpO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIC8vIGRvaW5nIG5vdGhpbmdcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmdldFNldHRpbmcoJ2RlbGV0ZS5jb25maXJtRGVsZXRlJykpIHtcbiAgICAgIGNvbmZpcm1FbWl0dGVyLmVtaXQoe1xuICAgICAgICBkYXRhOiByb3cuZ2V0RGF0YSgpLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgICBjb25maXJtOiBkZWZlcnJlZCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvY2Vzc0RhdGFDaGFuZ2UoY2hhbmdlczogYW55KSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkUHJvY2Vzc0NoYW5nZShjaGFuZ2VzKSkge1xuICAgICAgdGhpcy5kYXRhU2V0LnNldERhdGEoY2hhbmdlc1snZWxlbWVudHMnXSk7XG4gICAgICBpZiAodGhpcy5nZXRTZXR0aW5nKCdzZWxlY3RNb2RlJykgIT09ICdtdWx0aScpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5kZXRlcm1pbmVSb3dUb1NlbGVjdChjaGFuZ2VzKTtcblxuICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgdGhpcy5vblNlbGVjdFJvd1NvdXJjZS5uZXh0KHJvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG91bGRQcm9jZXNzQ2hhbmdlKGNoYW5nZXM6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmIChbJ2ZpbHRlcicsICdzb3J0JywgJ3BhZ2UnLCAncmVtb3ZlJywgJ3JlZnJlc2gnLCAnbG9hZCcsICdwYWdpbmcnXS5pbmRleE9mKGNoYW5nZXNbJ2FjdGlvbiddKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoWydwcmVwZW5kJywgJ2FwcGVuZCddLmluZGV4T2YoY2hhbmdlc1snYWN0aW9uJ10pICE9PSAtMSAmJiAhdGhpcy5nZXRTZXR0aW5nKCdwYWdlci5kaXNwbGF5JykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRPRE86IG1vdmUgdG8gc2VsZWN0YWJsZT8gU2VwYXJhdGUgZGlyZWN0aXZlXG4gIGRldGVybWluZVJvd1RvU2VsZWN0KGNoYW5nZXM6IGFueSk6IFJvdyB7XG5cbiAgICBpZiAoWydsb2FkJywgJ3BhZ2UnLCAnZmlsdGVyJywgJ3NvcnQnLCAncmVmcmVzaCddLmluZGV4T2YoY2hhbmdlc1snYWN0aW9uJ10pICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVNldC5zZWxlY3QoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ2FjdGlvbiddID09PSAncmVtb3ZlJykge1xuICAgICAgaWYgKGNoYW5nZXNbJ2VsZW1lbnRzJ10ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gc3RvcmUgd2hpY2ggb25lIHRvIHNlbGVjdCBhcyB0aGUgZGF0YSB3aWxsIGJlIHJlbG9hZGVkXG4gICAgICAgIHRoaXMuZGF0YVNldC53aWxsU2VsZWN0TGFzdFJvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNldC5zZWxlY3RQcmV2aW91c1JvdygpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snYWN0aW9uJ10gPT09ICdhcHBlbmQnKSB7XG4gICAgICAvLyB3ZSBoYXZlIHRvIHN0b3JlIHdoaWNoIG9uZSB0byBzZWxlY3QgYXMgdGhlIGRhdGEgd2lsbCBiZSByZWxvYWRlZFxuICAgICAgdGhpcy5kYXRhU2V0LndpbGxTZWxlY3RMYXN0Um93KCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydhY3Rpb24nXSA9PT0gJ2FkZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFTZXQuc2VsZWN0Rmlyc3RSb3coKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ2FjdGlvbiddID09PSAndXBkYXRlJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVNldC5zZWxlY3RGaXJzdFJvdygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snYWN0aW9uJ10gPT09ICdwcmVwZW5kJykge1xuICAgICAgLy8gd2UgaGF2ZSB0byBzdG9yZSB3aGljaCBvbmUgdG8gc2VsZWN0IGFzIHRoZSBkYXRhIHdpbGwgYmUgcmVsb2FkZWRcbiAgICAgIHRoaXMuZGF0YVNldC53aWxsU2VsZWN0Rmlyc3RSb3coKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcmVwYXJlU291cmNlKHNvdXJjZTogYW55KTogRGF0YVNvdXJjZSB7XG4gICAgY29uc3QgaW5pdGlhbFNvdXJjZTogYW55ID0gdGhpcy5nZXRJbml0aWFsU29ydCgpO1xuICAgIGlmIChpbml0aWFsU291cmNlICYmIGluaXRpYWxTb3VyY2VbJ2ZpZWxkJ10gJiYgaW5pdGlhbFNvdXJjZVsnZGlyZWN0aW9uJ10pIHtcbiAgICAgIHNvdXJjZS5zZXRTb3J0KFtpbml0aWFsU291cmNlXSwgZmFsc2UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXRTZXR0aW5nKCdwYWdlci5kaXNwbGF5JykgPT09IHRydWUpIHtcbiAgICAgIHNvdXJjZS5zZXRQYWdpbmcoMSwgdGhpcy5nZXRTZXR0aW5nKCdwYWdlci5wZXJQYWdlJyksIGZhbHNlKTtcbiAgICB9XG5cbiAgICBzb3VyY2UucmVmcmVzaCgpO1xuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICBnZXRJbml0aWFsU29ydCgpIHtcbiAgICBjb25zdCBzb3J0Q29uZjogYW55ID0ge307XG4gICAgdGhpcy5nZXRDb2x1bW5zKCkuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW4pID0+IHtcbiAgICAgIGlmIChjb2x1bW4uaXNTb3J0YWJsZSAmJiBjb2x1bW4uZGVmYXVsdFNvcnREaXJlY3Rpb24pIHtcbiAgICAgICAgc29ydENvbmZbJ2ZpZWxkJ10gPSBjb2x1bW4uaWQ7XG4gICAgICAgIHNvcnRDb25mWydkaXJlY3Rpb24nXSA9IGNvbHVtbi5kZWZhdWx0U29ydERpcmVjdGlvbjtcbiAgICAgICAgc29ydENvbmZbJ2NvbXBhcmUnXSA9IGNvbHVtbi5nZXRDb21wYXJlRnVuY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc29ydENvbmY7XG4gIH1cblxuICBnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNldC5nZXRSb3dzKClcbiAgICAgIC5maWx0ZXIociA9PiByLmlzU2VsZWN0ZWQpO1xuICB9XG5cbiAgc2VsZWN0QWxsUm93cyhzdGF0dXM6IGFueSkge1xuICAgIHRoaXMuZGF0YVNldC5nZXRSb3dzKClcbiAgICAgIC5mb3JFYWNoKHIgPT4gci5pc1NlbGVjdGVkID0gc3RhdHVzKTtcbiAgfVxuXG4gIGdldEZpcnN0Um93KCk6IFJvdyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNldC5nZXRGaXJzdFJvdygpO1xuICB9XG5cbiAgZ2V0TGFzdFJvdygpOiBSb3cge1xuICAgIHJldHVybiB0aGlzLmRhdGFTZXQuZ2V0TGFzdFJvdygpO1xuICB9XG5cbn1cbiJdfQ==