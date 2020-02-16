import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
var TbodyEditDeleteComponent = /** @class */ (function () {
    function TbodyEditDeleteComponent() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.editRowSelect = new EventEmitter();
    }
    TbodyEditDeleteComponent.prototype.onEdit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.edit(this.row);
        }
    };
    TbodyEditDeleteComponent.prototype.onDelete = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    };
    TbodyEditDeleteComponent.prototype.ngOnChanges = function () {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grid)
    ], TbodyEditDeleteComponent.prototype, "grid", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Row)
    ], TbodyEditDeleteComponent.prototype, "row", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DataSource)
    ], TbodyEditDeleteComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TbodyEditDeleteComponent.prototype, "deleteConfirm", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TbodyEditDeleteComponent.prototype, "editConfirm", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TbodyEditDeleteComponent.prototype, "edit", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TbodyEditDeleteComponent.prototype, "delete", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TbodyEditDeleteComponent.prototype, "editRowSelect", void 0);
    TbodyEditDeleteComponent = tslib_1.__decorate([
        Component({
            selector: 'ng2-st-tbody-edit-delete',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n    <a href=\"#\" *ngIf=\"isActionEdit\" class=\"ng2-smart-action ng2-smart-action-edit-edit\"\n        [innerHTML]=\"editRowButtonContent\" (click)=\"onEdit($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionDelete\" class=\"ng2-smart-action ng2-smart-action-delete-delete\"\n        [innerHTML]=\"deleteRowButtonContent\" (click)=\"onDelete($event)\"></a>\n  "
        })
    ], TbodyEditDeleteComponent);
    return TbodyEditDeleteComponent;
}());
export { TbodyEditDeleteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kZWxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvY2VsbHMvZWRpdC1kZWxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBWWxFO0lBVkE7UUFrQlksU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBMkNwRCxDQUFDO0lBcENDLHlDQUFNLEdBQU4sVUFBTyxLQUFVO1FBQ2YsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCwyQ0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNqQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVSxFQUFFO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3BCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFRCw4Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDbkYsQ0FBQztJQWxEUTtRQUFSLEtBQUssRUFBRTswQ0FBTyxJQUFJOzBEQUFDO0lBQ1g7UUFBUixLQUFLLEVBQUU7MENBQU0sR0FBRzt5REFBQztJQUNUO1FBQVIsS0FBSyxFQUFFOzBDQUFTLFVBQVU7NERBQUM7SUFDbkI7UUFBUixLQUFLLEVBQUU7MENBQWdCLFlBQVk7bUVBQU07SUFDakM7UUFBUixLQUFLLEVBQUU7MENBQWMsWUFBWTtpRUFBTTtJQUU5QjtRQUFULE1BQU0sRUFBRTs7MERBQWdDO0lBQy9CO1FBQVQsTUFBTSxFQUFFOzs0REFBa0M7SUFDakM7UUFBVCxNQUFNLEVBQUU7O21FQUF5QztJQVZ2Qyx3QkFBd0I7UUFWcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxRQUFRLEVBQUUsNFdBS1Q7U0FDRixDQUFDO09BQ1csd0JBQXdCLENBcURwQztJQUFELCtCQUFDO0NBQUEsQUFyREQsSUFxREM7U0FyRFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L3Jvdyc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGEgaHJlZj1cIiNcIiAqbmdJZj1cImlzQWN0aW9uRWRpdFwiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbiBuZzItc21hcnQtYWN0aW9uLWVkaXQtZWRpdFwiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiZWRpdFJvd0J1dHRvbkNvbnRlbnRcIiAoY2xpY2spPVwib25FZGl0KCRldmVudClcIj48L2E+XG4gICAgPGEgaHJlZj1cIiNcIiAqbmdJZj1cImlzQWN0aW9uRGVsZXRlXCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tZGVsZXRlLWRlbGV0ZVwiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiZGVsZXRlUm93QnV0dG9uQ29udGVudFwiIChjbGljayk9XCJvbkRlbGV0ZSgkZXZlbnQpXCI+PC9hPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUYm9keUVkaXREZWxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBJbnB1dCgpIHJvdzogUm93O1xuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XG4gIEBJbnB1dCgpIGRlbGV0ZUNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBASW5wdXQoKSBlZGl0Q29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZWRpdFJvd1NlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGlzQWN0aW9uRWRpdDogYm9vbGVhbjtcbiAgaXNBY3Rpb25EZWxldGU6IGJvb2xlYW47XG4gIGVkaXRSb3dCdXR0b25Db250ZW50OiBzdHJpbmc7XG4gIGRlbGV0ZVJvd0J1dHRvbkNvbnRlbnQ6IHN0cmluZztcblxuICBvbkVkaXQoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmVkaXRSb3dTZWxlY3QuZW1pdCh0aGlzLnJvdyk7XG5cbiAgICBpZiAodGhpcy5ncmlkLmdldFNldHRpbmcoJ21vZGUnKSA9PT0gJ2V4dGVybmFsJykge1xuICAgICAgdGhpcy5lZGl0LmVtaXQoe1xuICAgICAgICBkYXRhOiB0aGlzLnJvdy5nZXREYXRhKCksXG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncmlkLmVkaXQodGhpcy5yb3cpO1xuICAgIH1cbiAgfVxuXG4gIG9uRGVsZXRlKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdtb2RlJykgPT09ICdleHRlcm5hbCcpIHtcbiAgICAgIHRoaXMuZGVsZXRlLmVtaXQoe1xuICAgICAgICBkYXRhOiB0aGlzLnJvdy5nZXREYXRhKCksXG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncmlkLmRlbGV0ZSh0aGlzLnJvdywgdGhpcy5kZWxldGVDb25maXJtKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpe1xuICAgIHRoaXMuaXNBY3Rpb25FZGl0ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuZWRpdCcpO1xuICAgIHRoaXMuaXNBY3Rpb25EZWxldGUgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5kZWxldGUnKTtcbiAgICB0aGlzLmVkaXRSb3dCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2VkaXQuZWRpdEJ1dHRvbkNvbnRlbnQnKTtcbiAgICB0aGlzLmRlbGV0ZVJvd0J1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnZGVsZXRlLmRlbGV0ZUJ1dHRvbkNvbnRlbnQnKTtcbiAgfVxufVxuIl19