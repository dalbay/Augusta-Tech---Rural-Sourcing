import * as tslib_1 from "tslib";
import { Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
var DefaultFilter = /** @class */ (function () {
    function DefaultFilter() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    DefaultFilter.prototype.ngOnDestroy = function () {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    };
    DefaultFilter.prototype.setFilter = function () {
        this.filter.emit(this.query);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], DefaultFilter.prototype, "query", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], DefaultFilter.prototype, "inputClass", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Column)
    ], DefaultFilter.prototype, "column", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], DefaultFilter.prototype, "filter", void 0);
    return DefaultFilter;
}());
export { DefaultFilter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2RlZmF1bHQtZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXREO0lBQUE7UUFFRSxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBS1YsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFXaEQsQ0FBQztJQVRDLG1DQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBYlE7UUFBUixLQUFLLEVBQUU7O2dEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7O3FEQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTswQ0FBUyxNQUFNO2lEQUFDO0lBQ2Q7UUFBVCxNQUFNLEVBQUU7O2lEQUFxQztJQVdoRCxvQkFBQztDQUFBLEFBbEJELElBa0JDO1NBbEJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW4nO1xuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIEZpbHRlciwgT25EZXN0cm95IHtcblxuICBkZWxheTogbnVtYmVyID0gMzAwO1xuICBjaGFuZ2VzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIEBJbnB1dCgpIHF1ZXJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlucHV0Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgY29sdW1uOiBDb2x1bW47XG4gIEBPdXRwdXQoKSBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmNoYW5nZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBzZXRGaWx0ZXIoKSB7XG4gICAgdGhpcy5maWx0ZXIuZW1pdCh0aGlzLnF1ZXJ5KTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlciB7XG5cbiAgZGVsYXk/OiBudW1iZXI7XG4gIGNoYW5nZXNTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIGlucHV0Q2xhc3M6IHN0cmluZztcbiAgY29sdW1uOiBDb2x1bW47XG4gIGZpbHRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz47XG59XG4iXX0=