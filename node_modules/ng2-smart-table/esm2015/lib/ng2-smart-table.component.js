import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
let Ng2SmartTableComponent = class Ng2SmartTableComponent {
    constructor() {
        this.settings = {};
        this.rowSelect = new EventEmitter();
        this.userRowSelect = new EventEmitter();
        this.delete = new EventEmitter();
        this.edit = new EventEmitter();
        this.create = new EventEmitter();
        this.custom = new EventEmitter();
        this.deleteConfirm = new EventEmitter();
        this.editConfirm = new EventEmitter();
        this.createConfirm = new EventEmitter();
        this.rowHover = new EventEmitter();
        this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',
            hideHeader: false,
            hideSubHeader: false,
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true,
                custom: [],
                position: 'left',
            },
            filter: {
                inputClass: '',
            },
            edit: {
                inputClass: '',
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                cancelButtonContent: 'Cancel',
                confirmSave: false,
            },
            add: {
                inputClass: '',
                addButtonContent: 'Add New',
                createButtonContent: 'Create',
                cancelButtonContent: 'Cancel',
                confirmCreate: false,
            },
            delete: {
                deleteButtonContent: 'Delete',
                confirmDelete: false,
            },
            attr: {
                id: '',
                class: '',
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
                display: true,
                perPage: 10,
            },
            rowClassFunction: () => ""
        };
        this.isAllSelected = false;
    }
    ngOnChanges(changes) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
            }
        }
        else {
            this.initGrid();
        }
        this.tableId = this.grid.getSetting('attr.id');
        this.tableClass = this.grid.getSetting('attr.class');
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction');
    }
    editRowSelect(row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    }
    onUserSelectRow(row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    }
    onRowHover(row) {
        this.rowHover.emit(row);
    }
    multipleSelectRow(row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    }
    onSelectAllRows($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    }
    onSelectRow(row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    }
    onMultipleSelectRow(row) {
        this.emitSelectRow(row);
    }
    initGrid() {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe((row) => this.emitSelectRow(row));
    }
    prepareSource() {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }
        return new LocalDataSource();
    }
    prepareSettings() {
        return deepExtend({}, this.defaultSettings, this.settings);
    }
    changePage($event) {
        this.resetAllSelector();
    }
    sort($event) {
        this.resetAllSelector();
    }
    filter($event) {
        this.resetAllSelector();
    }
    resetAllSelector() {
        this.isAllSelected = false;
    }
    emitUserSelectRow(row) {
        const selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r) => r.getData()) : [],
        });
    }
    emitSelectRow(row) {
        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "source", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "settings", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "rowSelect", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "userRowSelect", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "delete", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "edit", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "create", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "custom", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "deleteConfirm", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "editConfirm", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "createConfirm", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], Ng2SmartTableComponent.prototype, "rowHover", void 0);
Ng2SmartTableComponent = tslib_1.__decorate([
    Component({
        selector: 'ng2-smart-table',
        template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\n                      [grid]=\"grid\"\n                      [isAllSelected]=\"isAllSelected\"\n                      [source]=\"source\"\n                      [createConfirm]=\"createConfirm\"\n                      (create)=\"create.emit($event)\"\n                      (selectAllRows)=\"onSelectAllRows($event)\"\n                      (sort)=\"sort($event)\"\n                      (filter)=\"filter($event)\">\n  </thead>\n\n  <tbody ng2-st-tbody [grid]=\"grid\"\n                      [source]=\"source\"\n                      [deleteConfirm]=\"deleteConfirm\"\n                      [editConfirm]=\"editConfirm\"\n                      [rowClassFunction]=\"rowClassFunction\"\n                      (edit)=\"edit.emit($event)\"\n                      (delete)=\"delete.emit($event)\"\n                      (custom)=\"custom.emit($event)\"\n                      (userSelectRow)=\"onUserSelectRow($event)\"\n                      (editRowSelect)=\"editRowSelect($event)\"\n                      (multipleSelectRow)=\"multipleSelectRow($event)\"\n                      (rowHover)=\"onRowHover($event)\">\n  </tbody>\n\n</table>\n\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\n                        [source]=\"source\"\n                        [perPageSelect]=\"perPageSelect\"\n                        (changePage)=\"changePage($event)\">\n</ng2-smart-table-pager>\n",
        styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}"]
    })
], Ng2SmartTableComponent);
export { Ng2SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWdCLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVoRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQU81RSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUxuQztRQVFXLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFckIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQVloRSxvQkFBZSxHQUFXO1lBQ3hCLElBQUksRUFBRSxRQUFRO1lBQ2QsVUFBVSxFQUFFLFFBQVE7WUFDcEIsVUFBVSxF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QUU7c0NBQVcsTUFBTTt3REFBTTtBQUVyQjtJQUFULE1BQU0sRUFBRTs7eURBQXFDO0FBQ3BDO0lBQVQsTUFBTSxFQUFFOzs2REFBeUM7QUFDeEM7SUFBVCxNQUFNLEVBQUU7O3NEQUFrQztBQUNqQztJQUFULE1BQU0sRUFBRTs7b0RBQWdDO0FBQy9CO0lBQVQsTUFBTSxFQUFFOztzREFBa0M7QUFDakM7SUFBVCxNQUFNLEVBQUU7O3NEQUFrQztBQUNqQztJQUFULE1BQU0sRUFBRTs7NkRBQXlDO0FBQ3hDO0lBQVQsTUFBTSxFQUFFOzsyREFBdUM7QUFDdEM7SUFBVCxNQUFNLEVBQUU7OzZEQUF5QztBQUN4QztJQUFULE1BQU0sRUFBRTtzQ0FBVyxZQUFZO3dEQUFnQztBQWRyRCxzQkFBc0I7SUFMbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUUzQix5K0NBQStDOztLQUNoRCxDQUFDO0dBQ1csc0JBQXNCLENBbU1sQztTQW5NWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZSwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vbGliL2dyaWQnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4vbGliL2RhdGEtc2V0L3Jvdyc7XG5pbXBvcnQgeyBkZWVwRXh0ZW5kIH0gZnJvbSAnLi9saWIvaGVscGVycyc7XG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UgfSBmcm9tICcuL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZScsXG4gIHN0eWxlVXJsczogWycuL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmcyU21hcnRUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgc291cmNlOiBhbnk7XG4gIEBJbnB1dCgpIHNldHRpbmdzOiBPYmplY3QgPSB7fTtcblxuICBAT3V0cHV0KCkgcm93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB1c2VyUm93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkZWxldGVDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Q29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY3JlYXRlQ29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcm93SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgdGFibGVDbGFzczogc3RyaW5nO1xuICB0YWJsZUlkOiBzdHJpbmc7XG4gIHBlclBhZ2VTZWxlY3Q6IGFueTtcbiAgaXNIaWRlSGVhZGVyOiBib29sZWFuO1xuICBpc0hpZGVTdWJIZWFkZXI6IGJvb2xlYW47XG4gIGlzUGFnZXJEaXNwbGF5OiBib29sZWFuO1xuICByb3dDbGFzc0Z1bmN0aW9uOiBGdW5jdGlvbjtcblxuXG4gIGdyaWQ6IEdyaWQ7XG4gIGRlZmF1bHRTZXR0aW5nczogT2JqZWN0ID0ge1xuICAgIG1vZGU6ICdpbmxpbmUnLCAvLyBpbmxpbmV8ZXh0ZXJuYWx8Y2xpY2stdG8tZWRpdFxuICAgIHNlbGVjdE1vZGU6ICdzaW5nbGUnLCAvLyBzaW5nbGV8bXVsdGlcbiAgICBoaWRlSGVhZGVyOiBmYWxzZSxcbiAgICBoaWRlU3ViSGVhZGVyOiBmYWxzZSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICBjb2x1bW5UaXRsZTogJ0FjdGlvbnMnLFxuICAgICAgYWRkOiB0cnVlLFxuICAgICAgZWRpdDogdHJ1ZSxcbiAgICAgIGRlbGV0ZTogdHJ1ZSxcbiAgICAgIGN1c3RvbTogW10sXG4gICAgICBwb3NpdGlvbjogJ2xlZnQnLCAvLyBsZWZ0fHJpZ2h0XG4gICAgfSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIGlucHV0Q2xhc3M6ICcnLFxuICAgIH0sXG4gICAgZWRpdDoge1xuICAgICAgaW5wdXRDbGFzczogJycsXG4gICAgICBlZGl0QnV0dG9uQ29udGVudDogJ0VkaXQnLFxuICAgICAgc2F2ZUJ1dHRvbkNvbnRlbnQ6ICdVcGRhdGUnLFxuICAgICAgY2FuY2VsQnV0dG9uQ29udGVudDogJ0NhbmNlbCcsXG4gICAgICBjb25maXJtU2F2ZTogZmFsc2UsXG4gICAgfSxcbiAgICBhZGQ6IHtcbiAgICAgIGlucHV0Q2xhc3M6ICcnLFxuICAgICAgYWRkQnV0dG9uQ29udGVudDogJ0FkZCBOZXcnLFxuICAgICAgY3JlYXRlQnV0dG9uQ29udGVudDogJ0NyZWF0ZScsXG4gICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnQ2FuY2VsJyxcbiAgICAgIGNvbmZpcm1DcmVhdGU6IGZhbHNlLFxuICAgIH0sXG4gICAgZGVsZXRlOiB7XG4gICAgICBkZWxldGVCdXR0b25Db250ZW50OiAnRGVsZXRlJyxcbiAgICAgIGNvbmZpcm1EZWxldGU6IGZhbHNlLFxuICAgIH0sXG4gICAgYXR0cjoge1xuICAgICAgaWQ6ICcnLFxuICAgICAgY2xhc3M6ICcnLFxuICAgIH0sXG4gICAgbm9EYXRhTWVzc2FnZTogJ05vIGRhdGEgZm91bmQnLFxuICAgIGNvbHVtbnM6IHt9LFxuICAgIHBhZ2VyOiB7XG4gICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgcGVyUGFnZTogMTAsXG4gICAgfSxcbiAgICByb3dDbGFzc0Z1bmN0aW9uOiAoKSA9PiBcIlwiXG4gIH07XG5cbiAgaXNBbGxTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICBpZiAoY2hhbmdlc1snc2V0dGluZ3MnXSkge1xuICAgICAgICB0aGlzLmdyaWQuc2V0U2V0dGluZ3ModGhpcy5wcmVwYXJlU2V0dGluZ3MoKSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlc1snc291cmNlJ10pIHtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLnByZXBhcmVTb3VyY2UoKTtcbiAgICAgICAgdGhpcy5ncmlkLnNldFNvdXJjZSh0aGlzLnNvdXJjZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdEdyaWQoKTtcbiAgICB9XG4gICAgdGhpcy50YWJsZUlkID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2F0dHIuaWQnKTtcbiAgICB0aGlzLnRhYmxlQ2xhc3MgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYXR0ci5jbGFzcycpO1xuICAgIHRoaXMuaXNIaWRlSGVhZGVyID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2hpZGVIZWFkZXInKTtcbiAgICB0aGlzLmlzSGlkZVN1YkhlYWRlciA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdoaWRlU3ViSGVhZGVyJyk7XG4gICAgdGhpcy5pc1BhZ2VyRGlzcGxheSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdwYWdlci5kaXNwbGF5Jyk7XG4gICAgdGhpcy5pc1BhZ2VyRGlzcGxheSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdwYWdlci5kaXNwbGF5Jyk7XG4gICAgdGhpcy5wZXJQYWdlU2VsZWN0ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ3BhZ2VyLnBlclBhZ2VTZWxlY3QnKTtcbiAgICB0aGlzLnJvd0NsYXNzRnVuY3Rpb24gPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncm93Q2xhc3NGdW5jdGlvbicpO1xuICB9XG5cbiAgZWRpdFJvd1NlbGVjdChyb3c6IFJvdykge1xuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnc2VsZWN0TW9kZScpID09PSAnbXVsdGknKSB7XG4gICAgICB0aGlzLm9uTXVsdGlwbGVTZWxlY3RSb3cocm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vblNlbGVjdFJvdyhyb3cpO1xuICAgIH1cbiAgfVxuXG4gIG9uVXNlclNlbGVjdFJvdyhyb3c6IFJvdykge1xuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnc2VsZWN0TW9kZScpICE9PSAnbXVsdGknKSB7XG4gICAgICB0aGlzLmdyaWQuc2VsZWN0Um93KHJvdyk7XG4gICAgICB0aGlzLmVtaXRVc2VyU2VsZWN0Um93KHJvdyk7XG4gICAgICB0aGlzLmVtaXRTZWxlY3RSb3cocm93KTtcbiAgICB9XG4gIH1cblxuICBvblJvd0hvdmVyKHJvdzogUm93KSB7XG4gICAgdGhpcy5yb3dIb3Zlci5lbWl0KHJvdyk7XG4gIH1cblxuICBtdWx0aXBsZVNlbGVjdFJvdyhyb3c6IFJvdykge1xuICAgIHRoaXMuZ3JpZC5tdWx0aXBsZVNlbGVjdFJvdyhyb3cpO1xuICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cocm93KTtcbiAgICB0aGlzLmVtaXRTZWxlY3RSb3cocm93KTtcbiAgfVxuXG4gIG9uU2VsZWN0QWxsUm93cygkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCA9ICF0aGlzLmlzQWxsU2VsZWN0ZWQ7XG4gICAgdGhpcy5ncmlkLnNlbGVjdEFsbFJvd3ModGhpcy5pc0FsbFNlbGVjdGVkKTtcblxuICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cobnVsbCk7XG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KG51bGwpO1xuICB9XG5cbiAgb25TZWxlY3RSb3cocm93OiBSb3cpIHtcbiAgICB0aGlzLmdyaWQuc2VsZWN0Um93KHJvdyk7XG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XG4gIH1cblxuICBvbk11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KSB7XG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XG4gIH1cblxuICBpbml0R3JpZCgpIHtcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMucHJlcGFyZVNvdXJjZSgpO1xuICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKHRoaXMuc291cmNlLCB0aGlzLnByZXBhcmVTZXR0aW5ncygpKTtcbiAgICB0aGlzLmdyaWQub25TZWxlY3RSb3coKS5zdWJzY3JpYmUoKHJvdykgPT4gdGhpcy5lbWl0U2VsZWN0Um93KHJvdykpO1xuICB9XG5cbiAgcHJlcGFyZVNvdXJjZSgpOiBEYXRhU291cmNlIHtcbiAgICBpZiAodGhpcy5zb3VyY2UgaW5zdGFuY2VvZiBEYXRhU291cmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4gbmV3IExvY2FsRGF0YVNvdXJjZSh0aGlzLnNvdXJjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBMb2NhbERhdGFTb3VyY2UoKTtcbiAgfVxuXG4gIHByZXBhcmVTZXR0aW5ncygpOiBPYmplY3Qge1xuICAgIHJldHVybiBkZWVwRXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRTZXR0aW5ncywgdGhpcy5zZXR0aW5ncyk7XG4gIH1cblxuICBjaGFuZ2VQYWdlKCRldmVudDogYW55KSB7XG4gICAgdGhpcy5yZXNldEFsbFNlbGVjdG9yKCk7XG4gIH1cblxuICBzb3J0KCRldmVudDogYW55KSB7XG4gICAgdGhpcy5yZXNldEFsbFNlbGVjdG9yKCk7XG4gIH1cblxuICBmaWx0ZXIoJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnJlc2V0QWxsU2VsZWN0b3IoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRBbGxTZWxlY3RvcigpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdFVzZXJTZWxlY3RSb3cocm93OiBSb3cpIHtcbiAgICBjb25zdCBzZWxlY3RlZFJvd3MgPSB0aGlzLmdyaWQuZ2V0U2VsZWN0ZWRSb3dzKCk7XG5cbiAgICB0aGlzLnVzZXJSb3dTZWxlY3QuZW1pdCh7XG4gICAgICBkYXRhOiByb3cgPyByb3cuZ2V0RGF0YSgpIDogbnVsbCxcbiAgICAgIGlzU2VsZWN0ZWQ6IHJvdyA/IHJvdy5nZXRJc1NlbGVjdGVkKCkgOiBudWxsLFxuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZFJvd3MgJiYgc2VsZWN0ZWRSb3dzLmxlbmd0aCA/IHNlbGVjdGVkUm93cy5tYXAoKHI6IFJvdykgPT4gci5nZXREYXRhKCkpIDogW10sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGVtaXRTZWxlY3RSb3cocm93OiBSb3cpIHtcbiAgICB0aGlzLnJvd1NlbGVjdC5lbWl0KHtcbiAgICAgIGRhdGE6IHJvdyA/IHJvdy5nZXREYXRhKCkgOiBudWxsLFxuICAgICAgaXNTZWxlY3RlZDogcm93ID8gcm93LmdldElzU2VsZWN0ZWQoKSA6IG51bGwsXG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==