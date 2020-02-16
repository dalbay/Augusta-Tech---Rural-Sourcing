import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
var Ng2SmartTableTheadComponent = /** @class */ (function () {
    function Ng2SmartTableTheadComponent() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    Ng2SmartTableTheadComponent.prototype.ngOnChanges = function () {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grid)
    ], Ng2SmartTableTheadComponent.prototype, "grid", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DataSource)
    ], Ng2SmartTableTheadComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], Ng2SmartTableTheadComponent.prototype, "isAllSelected", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], Ng2SmartTableTheadComponent.prototype, "createConfirm", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "sort", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "selectAllRows", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "create", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "filter", void 0);
    Ng2SmartTableTheadComponent = tslib_1.__decorate([
        Component({
            selector: '[ng2-st-thead]',
            template: "<tr ng2-st-thead-titles-row *ngIf=\"!isHideHeader\"\n                            class=\"ng2-smart-titles\"\n                            [grid]=\"grid\"\n                            [isAllSelected]=\"isAllSelected\"\n                            [source]=\"source\"\n                            (sort)=\"sort.emit($event)\"\n                            (selectAllRows)=\"selectAllRows.emit($event)\">\n</tr>\n\n<tr ng2-st-thead-filters-row *ngIf=\"!isHideSubHeader\"\n                              class=\"ng2-smart-filters\"\n                              [grid]=\"grid\"\n                              [source]=\"source\"\n                              (create)=\"create.emit($event)\"\n                              (filter)=\"filter.emit($event)\">\n</tr>\n\n<tr ng2-st-thead-form-row *ngIf=\"grid.createFormShown\"\n                          [grid]=\"grid\"\n                          [createConfirm]=\"createConfirm\">\n</tr>\n"
        })
    ], Ng2SmartTableTheadComponent);
    return Ng2SmartTableTheadComponent;
}());
export { Ng2SmartTableTheadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFNL0Q7SUFKQTtRQVdjLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQVMvQyxDQUFDO0lBSkMsaURBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBaEJRO1FBQVIsS0FBSyxFQUFFOzBDQUFPLElBQUk7NkRBQUM7SUFDWDtRQUFSLEtBQUssRUFBRTswQ0FBUyxVQUFVOytEQUFDO0lBQ25CO1FBQVIsS0FBSyxFQUFFOztzRUFBd0I7SUFDdkI7UUFBUixLQUFLLEVBQUU7MENBQWdCLFlBQVk7c0VBQU07SUFFaEM7UUFBVCxNQUFNLEVBQUU7OzZEQUFnQztJQUMvQjtRQUFULE1BQU0sRUFBRTs7c0VBQXlDO0lBQ3hDO1FBQVQsTUFBTSxFQUFFOzsrREFBa0M7SUFDakM7UUFBVCxNQUFNLEVBQUU7OytEQUFrQztJQVZsQywyQkFBMkI7UUFKdkMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixnN0JBQXFDO1NBQ3hDLENBQUM7T0FDVywyQkFBMkIsQ0FtQnZDO0lBQUQsa0NBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnW25nMi1zdC10aGVhZF0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90aGVhZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5nMlNtYXJ0VGFibGVUaGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICAgIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgICBASW5wdXQoKSBpc0FsbFNlbGVjdGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGNyZWF0ZUNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gICAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgc2VsZWN0QWxsUm93cyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBpc0hpZGVIZWFkZXI6IGJvb2xlYW47XG4gICAgaXNIaWRlU3ViSGVhZGVyOiBib29sZWFuO1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgICAgdGhpcy5pc0hpZGVIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZUhlYWRlcicpO1xuICAgICAgdGhpcy5pc0hpZGVTdWJIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZVN1YkhlYWRlcicpO1xuICAgIH1cbn1cbiJdfQ==