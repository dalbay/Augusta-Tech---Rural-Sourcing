import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
var TheadFormRowComponent = /** @class */ (function () {
    function TheadFormRowComponent() {
        this.create = new EventEmitter();
    }
    TheadFormRowComponent.prototype.onCreate = function (event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    };
    TheadFormRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.addInputClass = this.grid.getSetting('add.inputClass');
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grid)
    ], TheadFormRowComponent.prototype, "grid", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Row)
    ], TheadFormRowComponent.prototype, "row", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TheadFormRowComponent.prototype, "createConfirm", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TheadFormRowComponent.prototype, "create", void 0);
    TheadFormRowComponent = tslib_1.__decorate([
        Component({
            selector: '[ng2-st-thead-form-row]',
            template: "\n      <td *ngIf=\"\"></td>\n      <td  *ngIf=\"showActionColumnLeft\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n      <td *ngFor=\"let cell of grid.getNewRow().getCells()\">\n        <ng2-smart-table-cell [cell]=\"cell\"\n                              [grid]=\"grid\"\n                              [isNew]=\"true\"\n                              [createConfirm]=\"createConfirm\"\n                              [inputClass]=\"addInputClass\"\n                              [isInEditing]=\"grid.getNewRow().isInEditing\"\n                              (edited)=\"onCreate($event)\">\n        </ng2-smart-table-cell>\n      </td>\n      <td  *ngIf=\"showActionColumnRight\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n  "
        })
    ], TheadFormRowComponent);
    return TheadFormRowComponent;
}());
export { TheadFormRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZm9ybS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvcm93cy90aGVhZC1mb3JtLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQXdCaEQ7SUF0QkE7UUE0QlksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFtQjdDLENBQUM7SUFaQyx3Q0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNqQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBdEJRO1FBQVIsS0FBSyxFQUFFOzBDQUFPLElBQUk7dURBQUM7SUFDWDtRQUFSLEtBQUssRUFBRTswQ0FBTSxHQUFHO3NEQUFDO0lBQ1Q7UUFBUixLQUFLLEVBQUU7MENBQWdCLFlBQVk7Z0VBQU07SUFFaEM7UUFBVCxNQUFNLEVBQUU7O3lEQUFrQztJQU5oQyxxQkFBcUI7UUF0QmpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsUUFBUSxFQUFFLHU0QkFrQlQ7U0FDRixDQUFDO09BQ1cscUJBQXFCLENBeUJqQztJQUFELDRCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F6QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L3Jvdyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuZzItc3QtdGhlYWQtZm9ybS1yb3ddJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDx0ZCAqbmdJZj1cIlwiPjwvdGQ+XG4gICAgICA8dGQgICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtbkxlZnRcIiAgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uc1wiPlxuICAgICAgICA8bmcyLXN0LWFjdGlvbnMgW2dyaWRdPVwiZ3JpZFwiIChjcmVhdGUpPVwib25DcmVhdGUoJGV2ZW50KVwiPjwvbmcyLXN0LWFjdGlvbnM+XG4gICAgICA8L3RkPlxuICAgICAgPHRkICpuZ0Zvcj1cImxldCBjZWxsIG9mIGdyaWQuZ2V0TmV3Um93KCkuZ2V0Q2VsbHMoKVwiPlxuICAgICAgICA8bmcyLXNtYXJ0LXRhYmxlLWNlbGwgW2NlbGxdPVwiY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc05ld109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjcmVhdGVDb25maXJtXT1cImNyZWF0ZUNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiYWRkSW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNJbkVkaXRpbmddPVwiZ3JpZC5nZXROZXdSb3coKS5pc0luRWRpdGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdGVkKT1cIm9uQ3JlYXRlKCRldmVudClcIj5cbiAgICAgICAgPC9uZzItc21hcnQtdGFibGUtY2VsbD5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtblJpZ2h0XCIgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cbiAgICAgICAgPG5nMi1zdC1hY3Rpb25zIFtncmlkXT1cImdyaWRcIiAoY3JlYXRlKT1cIm9uQ3JlYXRlKCRldmVudClcIj48L25nMi1zdC1hY3Rpb25zPlxuICAgICAgPC90ZD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVGhlYWRGb3JtUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICBASW5wdXQoKSByb3c6IFJvdztcbiAgQElucHV0KCkgY3JlYXRlQ29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGlzTXVsdGlTZWxlY3RWaXNpYmxlOiBib29sZWFuO1xuICBzaG93QWN0aW9uQ29sdW1uTGVmdDogYm9vbGVhbjtcbiAgc2hvd0FjdGlvbkNvbHVtblJpZ2h0OiBib29sZWFuO1xuICBhZGRJbnB1dENsYXNzOiBzdHJpbmc7XG5cbiAgb25DcmVhdGUoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5ncmlkLmNyZWF0ZSh0aGlzLmdyaWQuZ2V0TmV3Um93KCksIHRoaXMuY3JlYXRlQ29uZmlybSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpe1xuICAgIHRoaXMuaXNNdWx0aVNlbGVjdFZpc2libGUgPSB0aGlzLmdyaWQuaXNNdWx0aVNlbGVjdFZpc2libGUoKTtcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5MZWZ0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ2xlZnQnKTtcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5SaWdodCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdyaWdodCcpO1xuICAgIHRoaXMuYWRkSW5wdXRDbGFzcyA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhZGQuaW5wdXRDbGFzcycpO1xuICB9XG59XG4iXX0=