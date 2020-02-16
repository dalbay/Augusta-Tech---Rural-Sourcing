import * as tslib_1 from "tslib";
import { Output, EventEmitter, Input } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export class EditCellDefault {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    onStopEditing() {
        this.cell.getRow().isInEditing = false;
        return false;
    }
    onClick(event) {
        event.stopPropagation();
    }
}
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Cell)
], EditCellDefault.prototype, "cell", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], EditCellDefault.prototype, "inputClass", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], EditCellDefault.prototype, "edited", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jZWxsLWRlZmF1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdC1tb2RlL2VkaXQtY2VsbC1kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWEsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWxELE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBR1csZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV2QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQWU3QyxDQUFDO0lBYkMsUUFBUSxDQUFDLEtBQVU7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN2QyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBVTtRQUNoQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQztDQUNGO0FBbEJVO0lBQVIsS0FBSyxFQUFFO3NDQUFPLElBQUk7NkNBQUM7QUFDWDtJQUFSLEtBQUssRUFBRTs7bURBQXlCO0FBRXZCO0lBQVQsTUFBTSxFQUFFOzsrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xuXG5leHBvcnQgY2xhc3MgRWRpdENlbGxEZWZhdWx0IHtcblxuICBASW5wdXQoKSBjZWxsOiBDZWxsO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcblxuICBAT3V0cHV0KCkgZWRpdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgb25FZGl0ZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHRoaXMuZWRpdGVkLm5leHQoZXZlbnQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uU3RvcEVkaXRpbmcoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5jZWxsLmdldFJvdygpLmlzSW5FZGl0aW5nID0gZmFsc2U7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25DbGljayhldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==