import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';
let CellComponent = class CellComponent {
    constructor() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], CellComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Row)
], CellComponent.prototype, "row", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], CellComponent.prototype, "editConfirm", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], CellComponent.prototype, "createConfirm", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], CellComponent.prototype, "isNew", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Cell)
], CellComponent.prototype, "cell", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CellComponent.prototype, "inputClass", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CellComponent.prototype, "mode", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], CellComponent.prototype, "isInEditing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], CellComponent.prototype, "edited", void 0);
CellComponent = tslib_1.__decorate([
    Component({
        selector: 'ng2-smart-table-cell',
        template: `
    <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
                          [inputClass]="inputClass"
                          (edited)="onEdited($event)">
    </table-cell-edit-mode>
  `
    })
], CellComponent);
export { CellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBWTdDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFWMUI7UUFrQlcsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixTQUFJLEdBQVcsUUFBUSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTVCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBUzdDLENBQUM7SUFQQyxRQUFRLENBQUMsS0FBVTtRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQW5CVTtJQUFSLEtBQUssRUFBRTtzQ0FBTyxJQUFJOzJDQUFDO0FBQ1g7SUFBUixLQUFLLEVBQUU7c0NBQU0sR0FBRzswQ0FBQztBQUNUO0lBQVIsS0FBSyxFQUFFO3NDQUFjLFlBQVk7a0RBQU07QUFDL0I7SUFBUixLQUFLLEVBQUU7c0NBQWdCLFlBQVk7b0RBQU07QUFDakM7SUFBUixLQUFLLEVBQUU7OzRDQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFO3NDQUFPLElBQUk7MkNBQUM7QUFDWDtJQUFSLEtBQUssRUFBRTs7aURBQXlCO0FBQ3hCO0lBQVIsS0FBSyxFQUFFOzsyQ0FBeUI7QUFDeEI7SUFBUixLQUFLLEVBQUU7O2tEQUE4QjtBQUU1QjtJQUFULE1BQU0sRUFBRTs7NkNBQWtDO0FBWmhDLGFBQWE7SUFWekIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxRQUFRLEVBQUU7Ozs7OztHQU1UO0tBQ0YsQ0FBQztHQUNXLGFBQWEsQ0FxQnpCO1NBckJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNldC9yb3cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc21hcnQtdGFibGUtY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRhYmxlLWNlbGwtdmlldy1tb2RlICpuZ0lmPVwiIWlzSW5FZGl0aW5nXCIgW2NlbGxdPVwiY2VsbFwiPjwvdGFibGUtY2VsbC12aWV3LW1vZGU+XG4gICAgPHRhYmxlLWNlbGwtZWRpdC1tb2RlICpuZ0lmPVwiaXNJbkVkaXRpbmdcIiBbY2VsbF09XCJjZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0ZWQpPVwib25FZGl0ZWQoJGV2ZW50KVwiPlxuICAgIDwvdGFibGUtY2VsbC1lZGl0LW1vZGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENlbGxDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBJbnB1dCgpIHJvdzogUm93O1xuICBASW5wdXQoKSBlZGl0Q29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIGNyZWF0ZUNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBASW5wdXQoKSBpc05ldzogYm9vbGVhbjtcbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG1vZGU6IHN0cmluZyA9ICdpbmxpbmUnO1xuICBASW5wdXQoKSBpc0luRWRpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBvbkVkaXRlZChldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMuaXNOZXcpIHtcbiAgICAgIHRoaXMuZ3JpZC5jcmVhdGUodGhpcy5ncmlkLmdldE5ld1JvdygpLCB0aGlzLmNyZWF0ZUNvbmZpcm0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyaWQuc2F2ZSh0aGlzLnJvdywgdGhpcy5lZGl0Q29uZmlybSk7XG4gICAgfVxuICB9XG59XG4iXX0=