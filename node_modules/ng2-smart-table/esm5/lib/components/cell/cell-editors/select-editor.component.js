import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
var SelectEditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectEditorComponent, _super);
    function SelectEditorComponent() {
        return _super.call(this) || this;
    }
    SelectEditorComponent = tslib_1.__decorate([
        Component({
            selector: 'select-editor',
            template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"cell.newValue\"\n            [name]=\"cell.getId()\"\n            [disabled]=\"!cell.isEditable()\"\n            (click)=\"onClick.emit($event)\"\n            (keydown.enter)=\"onEdited.emit($event)\"\n            (keydown.esc)=\"onStopEditing.emit()\">\n\n        <option *ngFor=\"let option of cell.getColumn().getConfig()?.list\" [value]=\"option.value\"\n                [selected]=\"option.value === cell.getValue()\">{{ option.title }}\n        </option>\n    </select>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SelectEditorComponent);
    return SelectEditorComponent;
}(DefaultEditor));
export { SelectEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9zZWxlY3QtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFvQmpEO0lBQTJDLGlEQUFhO0lBRXREO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBSlUscUJBQXFCO1FBbEJqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUseWtCQWNQO1NBQ0osQ0FBQzs7T0FDVyxxQkFBcUIsQ0FLakM7SUFBRCw0QkFBQztDQUFBLEFBTEQsQ0FBMkMsYUFBYSxHQUt2RDtTQUxZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZWZhdWx0RWRpdG9yIH0gZnJvbSAnLi9kZWZhdWx0LWVkaXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1lZGl0b3InLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWxlY3QgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxuICAgICAgICAgICAgW25hbWVdPVwiY2VsbC5nZXRJZCgpXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhY2VsbC5pc0VkaXRhYmxlKClcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cIm9uRWRpdGVkLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAoa2V5ZG93bi5lc2MpPVwib25TdG9wRWRpdGluZy5lbWl0KClcIj5cblxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKT8ubGlzdFwiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJvcHRpb24udmFsdWUgPT09IGNlbGwuZ2V0VmFsdWUoKVwiPnt7IG9wdGlvbi50aXRsZSB9fVxuICAgICAgICA8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RWRpdG9yIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iXX0=