import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';
var CellComponent = /** @class */ (function () {
    function CellComponent() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new EventEmitter();
    }
    CellComponent.prototype.onEdited = function (event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
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
            template: "\n    <table-cell-view-mode *ngIf=\"!isInEditing\" [cell]=\"cell\"></table-cell-view-mode>\n    <table-cell-edit-mode *ngIf=\"isInEditing\" [cell]=\"cell\"\n                          [inputClass]=\"inputClass\"\n                          (edited)=\"onEdited($event)\">\n    </table-cell-edit-mode>\n  "
        })
    ], CellComponent);
    return CellComponent;
}());
export { CellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBWTdDO0lBVkE7UUFrQlcsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixTQUFJLEdBQVcsUUFBUSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTVCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBUzdDLENBQUM7SUFQQyxnQ0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBbEJRO1FBQVIsS0FBSyxFQUFFOzBDQUFPLElBQUk7K0NBQUM7SUFDWDtRQUFSLEtBQUssRUFBRTswQ0FBTSxHQUFHOzhDQUFDO0lBQ1Q7UUFBUixLQUFLLEVBQUU7MENBQWMsWUFBWTtzREFBTTtJQUMvQjtRQUFSLEtBQUssRUFBRTswQ0FBZ0IsWUFBWTt3REFBTTtJQUNqQztRQUFSLEtBQUssRUFBRTs7Z0RBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7MENBQU8sSUFBSTsrQ0FBQztJQUNYO1FBQVIsS0FBSyxFQUFFOztxREFBeUI7SUFDeEI7UUFBUixLQUFLLEVBQUU7OytDQUF5QjtJQUN4QjtRQUFSLEtBQUssRUFBRTs7c0RBQThCO0lBRTVCO1FBQVQsTUFBTSxFQUFFOztpREFBa0M7SUFaaEMsYUFBYTtRQVZ6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSwrU0FNVDtTQUNGLENBQUM7T0FDVyxhQUFhLENBcUJ6QjtJQUFELG9CQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FyQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc2V0L3Jvdyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZS1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dGFibGUtY2VsbC12aWV3LW1vZGUgKm5nSWY9XCIhaXNJbkVkaXRpbmdcIiBbY2VsbF09XCJjZWxsXCI+PC90YWJsZS1jZWxsLXZpZXctbW9kZT5cbiAgICA8dGFibGUtY2VsbC1lZGl0LW1vZGUgKm5nSWY9XCJpc0luRWRpdGluZ1wiIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRlZCk9XCJvbkVkaXRlZCgkZXZlbnQpXCI+XG4gICAgPC90YWJsZS1jZWxsLWVkaXQtbW9kZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2VsbENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgcm93OiBSb3c7XG4gIEBJbnB1dCgpIGVkaXRDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQElucHV0KCkgY3JlYXRlQ29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIGlzTmV3OiBib29sZWFuO1xuICBASW5wdXQoKSBjZWxsOiBDZWxsO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbW9kZTogc3RyaW5nID0gJ2lubGluZSc7XG4gIEBJbnB1dCgpIGlzSW5FZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG9uRWRpdGVkKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5pc05ldykge1xuICAgICAgdGhpcy5ncmlkLmNyZWF0ZSh0aGlzLmdyaWQuZ2V0TmV3Um93KCksIHRoaXMuY3JlYXRlQ29uZmlybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZC5zYXZlKHRoaXMucm93LCB0aGlzLmVkaXRDb25maXJtKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==