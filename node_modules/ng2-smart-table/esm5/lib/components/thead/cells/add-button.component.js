import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
var AddButtonComponent = /** @class */ (function () {
    function AddButtonComponent(ref) {
        this.ref = ref;
        this.create = new EventEmitter();
    }
    AddButtonComponent.prototype.ngAfterViewInit = function () {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    };
    AddButtonComponent.prototype.ngOnChanges = function () {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
    };
    AddButtonComponent.prototype.onAdd = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source,
            });
        }
        else {
            this.grid.createFormShown = true;
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grid)
    ], AddButtonComponent.prototype, "grid", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DataSource)
    ], AddButtonComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AddButtonComponent.prototype, "create", void 0);
    AddButtonComponent = tslib_1.__decorate([
        Component({
            selector: '[ng2-st-add-button]',
            template: "\n    <a *ngIf=\"isActionAdd\" href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-add\"\n        [innerHTML]=\"addNewButtonContent\" (click)=\"onAdd($event)\"></a>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], AddButtonComponent);
    return AddButtonComponent;
}());
export { AddButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hZGQtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBaUIsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTdHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFTbEU7SUFTRSw0QkFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFMekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFNM0MsQ0FBQztJQUVELDRDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxrQ0FBSyxHQUFMLFVBQU0sS0FBVTtRQUNkLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3BCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBN0JRO1FBQVIsS0FBSyxFQUFFOzBDQUFPLElBQUk7b0RBQUM7SUFDWDtRQUFSLEtBQUssRUFBRTswQ0FBUyxVQUFVO3NEQUFDO0lBQ2xCO1FBQVQsTUFBTSxFQUFFOztzREFBa0M7SUFKaEMsa0JBQWtCO1FBUDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLCtLQUdUO1NBQ0YsQ0FBQztpREFVeUIsVUFBVTtPQVR4QixrQkFBa0IsQ0FnQzlCO0lBQUQseUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQWhDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25nMi1zdC1hZGQtYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGEgKm5nSWY9XCJpc0FjdGlvbkFkZFwiIGhyZWY9XCIjXCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tYWRkLWFkZFwiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiYWRkTmV3QnV0dG9uQ29udGVudFwiIChjbGljayk9XCJvbkFkZCgkZXZlbnQpXCI+PC9hPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGlzQWN0aW9uQWRkOiBib29sZWFuO1xuICBhZGROZXdCdXR0b25Db250ZW50OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25nMi1zbWFydC1hY3Rpb25zLXRpdGxlJywgJ25nMi1zbWFydC1hY3Rpb25zLXRpdGxlLWFkZCcpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5pc0FjdGlvbkFkZCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmFkZCcpO1xuICAgIHRoaXMuYWRkTmV3QnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhZGQuYWRkQnV0dG9uQ29udGVudCcpO1xuICB9XG5cbiAgb25BZGQoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdtb2RlJykgPT09ICdleHRlcm5hbCcpIHtcbiAgICAgIHRoaXMuY3JlYXRlLmVtaXQoe1xuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZC5jcmVhdGVGb3JtU2hvd24gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19