import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
        this.create = new EventEmitter();
    }
    ActionsComponent.prototype.ngOnChanges = function () {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grid)
    ], ActionsComponent.prototype, "grid", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ActionsComponent.prototype, "create", void 0);
    ActionsComponent = tslib_1.__decorate([
        Component({
            selector: 'ng2-st-actions',
            template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-create\"\n        [innerHTML]=\"createButtonContent\"\n        (click)=\"$event.preventDefault();create.emit($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-cancel\"\n        [innerHTML]=\"cancelButtonContent\"\n        (click)=\"$event.preventDefault();grid.createFormShown = false;\"></a>\n  "
        })
    ], ActionsComponent);
    return ActionsComponent;
}());
export { ActionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFhekM7SUFYQTtRQWNZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBUzdDLENBQUM7SUFKQyxzQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0UsQ0FBQztJQVRRO1FBQVIsS0FBSyxFQUFFOzBDQUFPLElBQUk7a0RBQUM7SUFDVjtRQUFULE1BQU0sRUFBRTs7b0RBQWtDO0lBSGhDLGdCQUFnQjtRQVg1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSwwWUFPVDtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FZNUI7SUFBRCx1QkFBQztDQUFBLEFBWkQsSUFZQztTQVpZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc3QtYWN0aW9ucycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1hZGQtY3JlYXRlXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJjcmVhdGVCdXR0b25Db250ZW50XCJcbiAgICAgICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO2NyZWF0ZS5lbWl0KCRldmVudClcIj48L2E+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1hZGQtY2FuY2VsXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJjYW5jZWxCdXR0b25Db250ZW50XCJcbiAgICAgICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO2dyaWQuY3JlYXRlRm9ybVNob3duID0gZmFsc2U7XCI+PC9hPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY3JlYXRlQnV0dG9uQ29udGVudDogc3RyaW5nO1xuICBjYW5jZWxCdXR0b25Db250ZW50OiBzdHJpbmc7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5jcmVhdGVCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FkZC5jcmVhdGVCdXR0b25Db250ZW50Jyk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FkZC5jYW5jZWxCdXR0b25Db250ZW50Jyk7XG4gIH1cbn1cbiJdfQ==