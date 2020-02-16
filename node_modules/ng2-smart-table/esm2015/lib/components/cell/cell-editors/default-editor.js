import * as tslib_1 from "tslib";
import { Output, EventEmitter, Input } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export class DefaultEditor {
    constructor() {
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
}
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Cell)
], DefaultEditor.prototype, "cell", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], DefaultEditor.prototype, "inputClass", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], DefaultEditor.prototype, "onStopEditing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], DefaultEditor.prototype, "onEdited", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], DefaultEditor.prototype, "onClick", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lZGl0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9kZWZhdWx0LWVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFhLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVsRCxNQUFNLE9BQU8sYUFBYTtJQUExQjtRQUlZLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUM5QyxDQUFDO0NBQUE7QUFOVTtJQUFSLEtBQUssRUFBRTtzQ0FBTyxJQUFJOzJDQUFDO0FBQ1g7SUFBUixLQUFLLEVBQUU7O2lEQUFvQjtBQUVsQjtJQUFULE1BQU0sRUFBRTs7b0RBQXlDO0FBQ3hDO0lBQVQsTUFBTSxFQUFFOzsrQ0FBb0M7QUFDbkM7SUFBVCxNQUFNLEVBQUU7OzhDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0RWRpdG9yIGltcGxlbWVudHMgRWRpdG9yIHtcbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvblN0b3BFZGl0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRvciB7XG4gIGNlbGw6IENlbGw7XG4gIGlucHV0Q2xhc3M6IHN0cmluZztcbiAgb25TdG9wRWRpdGluZzogRXZlbnRFbWl0dGVyPGFueT47XG4gIG9uRWRpdGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT47XG59XG4iXX0=