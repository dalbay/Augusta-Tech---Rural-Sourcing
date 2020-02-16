import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
let TbodyEditDeleteComponent = class TbodyEditDeleteComponent {
    constructor() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.editRowSelect = new EventEmitter();
    }
    onEdit(event) {
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
    }
    onDelete(event) {
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
    }
    ngOnChanges() {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
    }
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
        template: `
    <a href="#" *ngIf="isActionEdit" class="ng2-smart-action ng2-smart-action-edit-edit"
        [innerHTML]="editRowButtonContent" (click)="onEdit($event)"></a>
    <a href="#" *ngIf="isActionDelete" class="ng2-smart-action ng2-smart-action-delete-delete"
        [innerHTML]="deleteRowButtonContent" (click)="onDelete($event)"></a>
  `
    })
], TbodyEditDeleteComponent);
export { TbodyEditDeleteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kZWxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvY2VsbHMvZWRpdC1kZWxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBWWxFLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBVnJDO1FBa0JZLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQTJDcEQsQ0FBQztJQXBDQyxNQUFNLENBQUMsS0FBVTtRQUNmLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVSxFQUFFO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNiLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3BCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVU7UUFDakIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNwQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Q0FDRixDQUFBO0FBbkRVO0lBQVIsS0FBSyxFQUFFO3NDQUFPLElBQUk7c0RBQUM7QUFDWDtJQUFSLEtBQUssRUFBRTtzQ0FBTSxHQUFHO3FEQUFDO0FBQ1Q7SUFBUixLQUFLLEVBQUU7c0NBQVMsVUFBVTt3REFBQztBQUNuQjtJQUFSLEtBQUssRUFBRTtzQ0FBZ0IsWUFBWTsrREFBTTtBQUNqQztJQUFSLEtBQUssRUFBRTtzQ0FBYyxZQUFZOzZEQUFNO0FBRTlCO0lBQVQsTUFBTSxFQUFFOztzREFBZ0M7QUFDL0I7SUFBVCxNQUFNLEVBQUU7O3dEQUFrQztBQUNqQztJQUFULE1BQU0sRUFBRTs7K0RBQXlDO0FBVnZDLHdCQUF3QjtJQVZwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFFBQVEsRUFBRTs7Ozs7R0FLVDtLQUNGLENBQUM7R0FDVyx3QkFBd0IsQ0FxRHBDO1NBckRZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9yb3cnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zdC10Ym9keS1lZGl0LWRlbGV0ZScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhIGhyZWY9XCIjXCIgKm5nSWY9XCJpc0FjdGlvbkVkaXRcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1lZGl0LWVkaXRcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImVkaXRSb3dCdXR0b25Db250ZW50XCIgKGNsaWNrKT1cIm9uRWRpdCgkZXZlbnQpXCI+PC9hPlxuICAgIDxhIGhyZWY9XCIjXCIgKm5nSWY9XCJpc0FjdGlvbkRlbGV0ZVwiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbiBuZzItc21hcnQtYWN0aW9uLWRlbGV0ZS1kZWxldGVcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImRlbGV0ZVJvd0J1dHRvbkNvbnRlbnRcIiAoY2xpY2spPVwib25EZWxldGUoJGV2ZW50KVwiPjwvYT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVGJvZHlFZGl0RGVsZXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICBASW5wdXQoKSByb3c6IFJvdztcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuICBASW5wdXQoKSBkZWxldGVDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQElucHV0KCkgZWRpdENvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIEBPdXRwdXQoKSBlZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVkaXRSb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBpc0FjdGlvbkVkaXQ6IGJvb2xlYW47XG4gIGlzQWN0aW9uRGVsZXRlOiBib29sZWFuO1xuICBlZGl0Um93QnV0dG9uQ29udGVudDogc3RyaW5nO1xuICBkZWxldGVSb3dCdXR0b25Db250ZW50OiBzdHJpbmc7XG5cbiAgb25FZGl0KGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5lZGl0Um93U2VsZWN0LmVtaXQodGhpcy5yb3cpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdtb2RlJykgPT09ICdleHRlcm5hbCcpIHtcbiAgICAgIHRoaXMuZWRpdC5lbWl0KHtcbiAgICAgICAgZGF0YTogdGhpcy5yb3cuZ2V0RGF0YSgpLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZC5lZGl0KHRoaXMucm93KTtcbiAgICB9XG4gIH1cblxuICBvbkRlbGV0ZShldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnbW9kZScpID09PSAnZXh0ZXJuYWwnKSB7XG4gICAgICB0aGlzLmRlbGV0ZS5lbWl0KHtcbiAgICAgICAgZGF0YTogdGhpcy5yb3cuZ2V0RGF0YSgpLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZC5kZWxldGUodGhpcy5yb3csIHRoaXMuZGVsZXRlQ29uZmlybSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKXtcbiAgICB0aGlzLmlzQWN0aW9uRWRpdCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmVkaXQnKTtcbiAgICB0aGlzLmlzQWN0aW9uRGVsZXRlID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuZGVsZXRlJyk7XG4gICAgdGhpcy5lZGl0Um93QnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdlZGl0LmVkaXRCdXR0b25Db250ZW50Jyk7XG4gICAgdGhpcy5kZWxldGVSb3dCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2RlbGV0ZS5kZWxldGVCdXR0b25Db250ZW50Jyk7XG4gIH1cbn1cbiJdfQ==