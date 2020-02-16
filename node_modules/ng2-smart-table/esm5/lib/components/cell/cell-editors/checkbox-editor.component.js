import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
var CheckboxEditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxEditorComponent, _super);
    function CheckboxEditorComponent() {
        return _super.call(this) || this;
    }
    CheckboxEditorComponent.prototype.onChange = function (event) {
        var trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
        var falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
        this.cell.newValue = event.target.checked ? trueVal : falseVal;
    };
    CheckboxEditorComponent = tslib_1.__decorate([
        Component({
            selector: 'checkbox-editor',
            template: "\n    <input [ngClass]=\"inputClass\"\n           type=\"checkbox\"\n           class=\"form-control\"\n           [name]=\"cell.getId()\"\n           [disabled]=\"!cell.isEditable()\"\n           [checked]=\"cell.getValue() == (cell.getColumn().getConfig()?.true || true)\"\n           (click)=\"onClick.emit($event)\"\n           (change)=\"onChange($event)\">\n    ",
            styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CheckboxEditorComponent);
    return CheckboxEditorComponent;
}(DefaultEditor));
export { CheckboxEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL2NoZWNrYm94LWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBZ0JqRDtJQUE2QyxtREFBYTtJQUV4RDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUVELDBDQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLElBQU0sT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztRQUN0RyxJQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUM7UUFDekcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2pFLENBQUM7SUFWVSx1QkFBdUI7UUFkbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUUzQixRQUFRLEVBQUUsa1hBU1A7O1NBQ0osQ0FBQzs7T0FDVyx1QkFBdUIsQ0FXbkM7SUFBRCw4QkFBQztDQUFBLEFBWEQsQ0FBNkMsYUFBYSxHQVd6RDtTQVhZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZWZhdWx0RWRpdG9yIH0gZnJvbSAnLi9kZWZhdWx0LWVkaXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoZWNrYm94LWVkaXRvcicsXG4gIHN0eWxlVXJsczogWycuL2VkaXRvci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpbnB1dCBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICBbbmFtZV09XCJjZWxsLmdldElkKClcIlxuICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWNlbGwuaXNFZGl0YWJsZSgpXCJcbiAgICAgICAgICAgW2NoZWNrZWRdPVwiY2VsbC5nZXRWYWx1ZSgpID09IChjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpPy50cnVlIHx8IHRydWUpXCJcbiAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCI+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RWRpdG9yIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHRydWVWYWwgPSAodGhpcy5jZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpICYmIHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKS50cnVlKSB8fCB0cnVlO1xuICAgIGNvbnN0IGZhbHNlVmFsID0gKHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKSAmJiB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkuZmFsc2UpIHx8IGZhbHNlO1xuICAgIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IGV2ZW50LnRhcmdldC5jaGVja2VkID8gdHJ1ZVZhbCA6IGZhbHNlVmFsO1xuICB9XG59XG4iXX0=