import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Row } from '../../../lib/data-set/row';
import { Grid } from '../../../lib/grid';
var TbodyCustomComponent = /** @class */ (function () {
    function TbodyCustomComponent() {
        this.custom = new EventEmitter();
    }
    TbodyCustomComponent.prototype.onCustom = function (action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grid)
    ], TbodyCustomComponent.prototype, "grid", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Row)
    ], TbodyCustomComponent.prototype, "row", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TbodyCustomComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TbodyCustomComponent.prototype, "custom", void 0);
    TbodyCustomComponent = tslib_1.__decorate([
        Component({
            selector: 'ng2-st-tbody-custom',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n      <a *ngFor=\"let action of grid.getSetting('actions.custom')\" href=\"#\"\n         class=\"ng2-smart-action ng2-smart-action-custom-custom\" \n         [innerHTML]=\"action.title\"\n         (click)=\"onCustom(action, $event)\"></a>\n        "
        })
    ], TbodyCustomComponent);
    return TbodyCustomComponent;
}());
export { TbodyCustomComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rib2R5L2NlbGxzL2N1c3RvbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWhELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVl6QztJQVZBO1FBZWMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFhL0MsQ0FBQztJQVhHLHVDQUFRLEdBQVIsVUFBUyxNQUFXLEVBQUUsS0FBVTtRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWRRO1FBQVIsS0FBSyxFQUFFOzBDQUFPLElBQUk7c0RBQUM7SUFDWDtRQUFSLEtBQUssRUFBRTswQ0FBTSxHQUFHO3FEQUFDO0lBQ1Q7UUFBUixLQUFLLEVBQUU7O3dEQUFhO0lBQ1g7UUFBVCxNQUFNLEVBQUU7O3dEQUFrQztJQUxsQyxvQkFBb0I7UUFWaEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxRQUFRLEVBQUUsNFBBS0w7U0FDUixDQUFDO09BQ1csb0JBQW9CLENBa0JoQztJQUFELDJCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvcm93JztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItc3QtdGJvZHktY3VzdG9tJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGEgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuY3VzdG9tJylcIiBocmVmPVwiI1wiXG4gICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1jdXN0b20tY3VzdG9tXCIgXG4gICAgICAgICBbaW5uZXJIVE1MXT1cImFjdGlvbi50aXRsZVwiXG4gICAgICAgICAoY2xpY2spPVwib25DdXN0b20oYWN0aW9uLCAkZXZlbnQpXCI+PC9hPlxuICAgICAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRib2R5Q3VzdG9tQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gICAgQElucHV0KCkgcm93OiBSb3c7XG4gICAgQElucHV0KCkgc291cmNlOiBhbnk7XG4gICAgQE91dHB1dCgpIGN1c3RvbSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgb25DdXN0b20oYWN0aW9uOiBhbnksIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5jdXN0b20uZW1pdCh7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbi5uYW1lLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5yb3cuZ2V0RGF0YSgpLFxuICAgICAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==