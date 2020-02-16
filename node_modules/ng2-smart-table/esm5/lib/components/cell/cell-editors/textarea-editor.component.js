import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
var TextareaEditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TextareaEditorComponent, _super);
    function TextareaEditorComponent() {
        return _super.call(this) || this;
    }
    TextareaEditorComponent = tslib_1.__decorate([
        Component({
            selector: 'textarea-editor',
            template: "\n    <textarea [ngClass]=\"inputClass\"\n              class=\"form-control\"\n              [(ngModel)]=\"cell.newValue\"\n              [name]=\"cell.getId()\"\n              [disabled]=\"!cell.isEditable()\"\n              [placeholder]=\"cell.getTitle()\"\n              (click)=\"onClick.emit($event)\"\n              (keydown.enter)=\"onEdited.emit($event)\"\n              (keydown.esc)=\"onStopEditing.emit()\">\n    </textarea>\n    ",
            styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TextareaEditorComponent);
    return TextareaEditorComponent;
}(DefaultEditor));
export { TextareaEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL3RleHRhcmVhLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBa0JqRDtJQUE2QyxtREFBYTtJQUV4RDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUpVLHVCQUF1QjtRQWhCbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUUzQixRQUFRLEVBQUUsNmJBV1A7O1NBQ0osQ0FBQzs7T0FDVyx1QkFBdUIsQ0FLbkM7SUFBRCw4QkFBQztDQUFBLEFBTEQsQ0FBNkMsYUFBYSxHQUt6RDtTQUxZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZWZhdWx0RWRpdG9yIH0gZnJvbSAnLi9kZWZhdWx0LWVkaXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RleHRhcmVhLWVkaXRvcicsXG4gIHN0eWxlVXJsczogWycuL2VkaXRvci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx0ZXh0YXJlYSBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxuICAgICAgICAgICAgICBbbmFtZV09XCJjZWxsLmdldElkKClcIlxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWNlbGwuaXNFZGl0YWJsZSgpXCJcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNlbGwuZ2V0VGl0bGUoKVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cIm9uRWRpdGVkLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChrZXlkb3duLmVzYyk9XCJvblN0b3BFZGl0aW5nLmVtaXQoKVwiPlxuICAgIDwvdGV4dGFyZWE+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RWRpdG9yIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iXX0=