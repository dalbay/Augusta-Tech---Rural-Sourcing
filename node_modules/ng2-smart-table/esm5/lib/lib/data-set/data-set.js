import { Row } from './row';
import { Column } from './column';
var DataSet = /** @class */ (function () {
    function DataSet(data, columnSettings) {
        if (data === void 0) { data = []; }
        this.columnSettings = columnSettings;
        this.data = [];
        this.columns = [];
        this.rows = [];
        this.willSelect = 'first';
        this.createColumns(columnSettings);
        this.setData(data);
        this.createNewRow();
    }
    DataSet.prototype.setData = function (data) {
        this.data = data;
        this.createRows();
    };
    DataSet.prototype.getColumns = function () {
        return this.columns;
    };
    DataSet.prototype.getRows = function () {
        return this.rows;
    };
    DataSet.prototype.getFirstRow = function () {
        return this.rows[0];
    };
    DataSet.prototype.getLastRow = function () {
        return this.rows[this.rows.length - 1];
    };
    DataSet.prototype.findRowByData = function (data) {
        return this.rows.find(function (row) { return row.getData() === data; });
    };
    DataSet.prototype.deselectAll = function () {
        this.rows.forEach(function (row) {
            row.isSelected = false;
        });
    };
    DataSet.prototype.selectRow = function (row) {
        var previousIsSelected = row.isSelected;
        this.deselectAll();
        row.isSelected = !previousIsSelected;
        this.selectedRow = row;
        return this.selectedRow;
    };
    DataSet.prototype.multipleSelectRow = function (row) {
        row.isSelected = !row.isSelected;
        this.selectedRow = row;
        return this.selectedRow;
    };
    DataSet.prototype.selectPreviousRow = function () {
        if (this.rows.length > 0) {
            var index = this.selectedRow ? this.selectedRow.index : 0;
            if (index > this.rows.length - 1) {
                index = this.rows.length - 1;
            }
            this.selectRow(this.rows[index]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.selectFirstRow = function () {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[0]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.selectLastRow = function () {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[this.rows.length - 1]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.willSelectFirstRow = function () {
        this.willSelect = 'first';
    };
    DataSet.prototype.willSelectLastRow = function () {
        this.willSelect = 'last';
    };
    DataSet.prototype.select = function () {
        if (this.getRows().length === 0) {
            return;
        }
        if (this.willSelect) {
            if (this.willSelect === 'first') {
                this.selectFirstRow();
            }
            if (this.willSelect === 'last') {
                this.selectLastRow();
            }
            this.willSelect = '';
        }
        else {
            this.selectFirstRow();
        }
        return this.selectedRow;
    };
    DataSet.prototype.createNewRow = function () {
        this.newRow = new Row(-1, {}, this);
        this.newRow.isInEditing = true;
    };
    /**
     * Create columns by mapping from the settings
     * @param settings
     * @private
     */
    DataSet.prototype.createColumns = function (settings) {
        for (var id in settings) {
            if (settings.hasOwnProperty(id)) {
                this.columns.push(new Column(id, settings[id], this));
            }
        }
    };
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    DataSet.prototype.createRows = function () {
        var _this = this;
        this.rows = [];
        this.data.forEach(function (el, index) {
            _this.rows.push(new Row(index, el, _this));
        });
    };
    return DataSet;
}());
export { DataSet };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvbGliL2RhdGEtc2V0L2RhdGEtc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDNUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQztJQVVFLGlCQUFZLElBQXFCLEVBQVksY0FBc0I7UUFBdkQscUJBQUEsRUFBQSxTQUFxQjtRQUFZLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBTnpELFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFrQixFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUV0QixlQUFVLEdBQVcsT0FBTyxDQUFDO1FBR3JDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHlCQUFPLEdBQVAsVUFBUSxJQUFnQjtRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDRCQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELHlCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELDZCQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELDRCQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FB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OlsiaW1wb3J0IHsgUm93IH0gZnJvbSAnLi9yb3cnO1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi9jb2x1bW4nO1xuXG5leHBvcnQgY2xhc3MgRGF0YVNldCB7XG5cbiAgbmV3Um93OiBSb3c7XG5cbiAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PGFueT4gPSBbXTtcbiAgcHJvdGVjdGVkIGNvbHVtbnM6IEFycmF5PENvbHVtbj4gPSBbXTtcbiAgcHJvdGVjdGVkIHJvd3M6IEFycmF5PFJvdz4gPSBbXTtcbiAgcHJvdGVjdGVkIHNlbGVjdGVkUm93OiBSb3c7XG4gIHByb3RlY3RlZCB3aWxsU2VsZWN0OiBzdHJpbmcgPSAnZmlyc3QnO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEFycmF5PGFueT4gPSBbXSwgcHJvdGVjdGVkIGNvbHVtblNldHRpbmdzOiBPYmplY3QpIHtcbiAgICB0aGlzLmNyZWF0ZUNvbHVtbnMoY29sdW1uU2V0dGluZ3MpO1xuICAgIHRoaXMuc2V0RGF0YShkYXRhKTtcblxuICAgIHRoaXMuY3JlYXRlTmV3Um93KCk7XG4gIH1cblxuICBzZXREYXRhKGRhdGE6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuY3JlYXRlUm93cygpO1xuICB9XG5cbiAgZ2V0Q29sdW1ucygpOiBBcnJheTxDb2x1bW4+IHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zO1xuICB9XG5cbiAgZ2V0Um93cygpOiBBcnJheTxSb3c+IHtcbiAgICByZXR1cm4gdGhpcy5yb3dzO1xuICB9XG5cbiAgZ2V0Rmlyc3RSb3coKTogUm93IHtcbiAgICByZXR1cm4gdGhpcy5yb3dzWzBdO1xuICB9XG5cbiAgZ2V0TGFzdFJvdygpOiBSb3cge1xuICAgIHJldHVybiB0aGlzLnJvd3NbdGhpcy5yb3dzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZmluZFJvd0J5RGF0YShkYXRhOiBhbnkpOiBSb3cge1xuICAgIHJldHVybiB0aGlzLnJvd3MuZmluZCgocm93OiBSb3cpID0+IHJvdy5nZXREYXRhKCkgPT09IGRhdGEpO1xuICB9XG5cbiAgZGVzZWxlY3RBbGwoKSB7XG4gICAgdGhpcy5yb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdFJvdyhyb3c6IFJvdyk6IFJvdyB7XG4gICAgY29uc3QgcHJldmlvdXNJc1NlbGVjdGVkID0gcm93LmlzU2VsZWN0ZWQ7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuXG4gICAgcm93LmlzU2VsZWN0ZWQgPSAhcHJldmlvdXNJc1NlbGVjdGVkO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3cgPSByb3c7XG5cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFJvdztcbiAgfVxuXG4gIG11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KTogUm93IHtcbiAgICByb3cuaXNTZWxlY3RlZCA9ICFyb3cuaXNTZWxlY3RlZDtcbiAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xuXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XG4gIH1cblxuICBzZWxlY3RQcmV2aW91c1JvdygpOiBSb3cge1xuICAgIGlmICh0aGlzLnJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGluZGV4ID0gdGhpcy5zZWxlY3RlZFJvdyA/IHRoaXMuc2VsZWN0ZWRSb3cuaW5kZXggOiAwO1xuICAgICAgaWYgKGluZGV4ID4gdGhpcy5yb3dzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaW5kZXggPSB0aGlzLnJvd3MubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0Um93KHRoaXMucm93c1tpbmRleF0pO1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Rmlyc3RSb3coKTogUm93IHtcbiAgICBpZiAodGhpcy5yb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0Um93KHRoaXMucm93c1swXSk7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFJvdztcbiAgICB9XG4gIH1cblxuICBzZWxlY3RMYXN0Um93KCk6IFJvdyB7XG4gICAgaWYgKHRoaXMucm93cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNlbGVjdFJvdyh0aGlzLnJvd3NbdGhpcy5yb3dzLmxlbmd0aCAtIDFdKTtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xuICAgIH1cbiAgfVxuXG4gIHdpbGxTZWxlY3RGaXJzdFJvdygpIHtcbiAgICB0aGlzLndpbGxTZWxlY3QgPSAnZmlyc3QnO1xuICB9XG5cbiAgd2lsbFNlbGVjdExhc3RSb3coKSB7XG4gICAgdGhpcy53aWxsU2VsZWN0ID0gJ2xhc3QnO1xuICB9XG5cbiAgc2VsZWN0KCk6IFJvdyB7XG4gICAgaWYgKHRoaXMuZ2V0Um93cygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWxsU2VsZWN0KSB7XG4gICAgICBpZiAodGhpcy53aWxsU2VsZWN0ID09PSAnZmlyc3QnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0Rmlyc3RSb3coKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLndpbGxTZWxlY3QgPT09ICdsYXN0Jykge1xuICAgICAgICB0aGlzLnNlbGVjdExhc3RSb3coKTtcbiAgICAgIH1cbiAgICAgIHRoaXMud2lsbFNlbGVjdCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdEZpcnN0Um93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XG4gIH1cblxuICBjcmVhdGVOZXdSb3coKSB7XG4gICAgdGhpcy5uZXdSb3cgPSBuZXcgUm93KC0xLCB7fSwgdGhpcyk7XG4gICAgdGhpcy5uZXdSb3cuaXNJbkVkaXRpbmcgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjb2x1bW5zIGJ5IG1hcHBpbmcgZnJvbSB0aGUgc2V0dGluZ3NcbiAgICogQHBhcmFtIHNldHRpbmdzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVDb2x1bW5zKHNldHRpbmdzOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IGlkIGluIHNldHRpbmdzKSB7XG4gICAgICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKG5ldyBDb2x1bW4oaWQsIHNldHRpbmdzW2lkXSwgdGhpcykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgcm93cyBiYXNlZCBvbiBjdXJyZW50IGRhdGEgcHJlcGFyZWQgaW4gZGF0YSBzb3VyY2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZVJvd3MoKSB7XG4gICAgdGhpcy5yb3dzID0gW107XG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5yb3dzLnB1c2gobmV3IFJvdyhpbmRleCwgZWwsIHRoaXMpKTtcbiAgICB9KTtcbiAgfVxufVxuIl19