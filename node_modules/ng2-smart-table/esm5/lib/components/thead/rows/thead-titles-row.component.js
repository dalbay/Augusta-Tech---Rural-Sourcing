import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
var TheadTitlesRowComponent = /** @class */ (function () {
    function TheadTitlesRowComponent() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
    }
    TheadTitlesRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grid)
    ], TheadTitlesRowComponent.prototype, "grid", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TheadTitlesRowComponent.prototype, "isAllSelected", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DataSource)
    ], TheadTitlesRowComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TheadTitlesRowComponent.prototype, "sort", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TheadTitlesRowComponent.prototype, "selectAllRows", void 0);
    TheadTitlesRowComponent = tslib_1.__decorate([
        Component({
            selector: '[ng2-st-thead-titles-row]',
            template: "\n    <th ng2-st-checkbox-select-all *ngIf=\"isMultiSelectVisible\"\n                                   [grid]=\"grid\"\n                                   [source]=\"source\"\n                                   [isAllSelected]=\"isAllSelected\"\n                                   (click)=\"selectAllRows.emit($event)\">\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnLeft\" [grid]=\"grid\"></th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\" [ngClass]=\"column.class\"\n      [style.width]=\"column.width\" >\n      <ng2-st-column-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnRight\" [grid]=\"grid\"></th>\n  "
        })
    ], TheadTitlesRowComponent);
    return TheadTitlesRowComponent;
}());
export { TheadTitlesRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtdGl0bGVzLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9yb3dzL3RoZWFkLXRpdGxlcy1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFvQmxFO0lBakJBO1FBdUJZLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQWFwRCxDQUFDO0lBTkMsNkNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQWhCUTtRQUFSLEtBQUssRUFBRTswQ0FBTyxJQUFJO3lEQUFDO0lBQ1g7UUFBUixLQUFLLEVBQUU7O2tFQUF3QjtJQUN2QjtRQUFSLEtBQUssRUFBRTswQ0FBUyxVQUFVOzJEQUFDO0lBRWxCO1FBQVQsTUFBTSxFQUFFOzt5REFBZ0M7SUFDL0I7UUFBVCxNQUFNLEVBQUU7O2tFQUF5QztJQVB2Qyx1QkFBdUI7UUFqQm5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsUUFBUSxFQUFFLDB4QkFhVDtTQUNGLENBQUM7T0FDVyx1QkFBdUIsQ0FvQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LXRoZWFkLXRpdGxlcy1yb3ddJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dGggbmcyLXN0LWNoZWNrYm94LXNlbGVjdC1hbGwgKm5nSWY9XCJpc011bHRpU2VsZWN0VmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc0FsbFNlbGVjdGVkXT1cImlzQWxsU2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0QWxsUm93cy5lbWl0KCRldmVudClcIj5cbiAgICA8L3RoPlxuICAgIDx0aCBuZzItc3QtYWN0aW9ucy10aXRsZSAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5MZWZ0XCIgW2dyaWRdPVwiZ3JpZFwiPjwvdGg+XG4gICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgZ3JpZC5nZXRDb2x1bW5zKClcIiBjbGFzcz1cIm5nMi1zbWFydC10aCB7eyBjb2x1bW4uaWQgfX1cIiBbbmdDbGFzc109XCJjb2x1bW4uY2xhc3NcIlxuICAgICAgW3N0eWxlLndpZHRoXT1cImNvbHVtbi53aWR0aFwiID5cbiAgICAgIDxuZzItc3QtY29sdW1uLXRpdGxlIFtzb3VyY2VdPVwic291cmNlXCIgW2NvbHVtbl09XCJjb2x1bW5cIiAoc29ydCk9XCJzb3J0LmVtaXQoJGV2ZW50KVwiPjwvbmcyLXN0LWNvbHVtbi10aXRsZT5cbiAgICA8L3RoPlxuICAgIDx0aCBuZzItc3QtYWN0aW9ucy10aXRsZSAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5SaWdodFwiIFtncmlkXT1cImdyaWRcIj48L3RoPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUaGVhZFRpdGxlc1Jvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgaXNBbGxTZWxlY3RlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuXG4gIEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RBbGxSb3dzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgaXNNdWx0aVNlbGVjdFZpc2libGU6IGJvb2xlYW47XG4gIHNob3dBY3Rpb25Db2x1bW5MZWZ0OiBib29sZWFuO1xuICBzaG93QWN0aW9uQ29sdW1uUmlnaHQ6IGJvb2xlYW47XG5cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3RWaXNpYmxlID0gdGhpcy5ncmlkLmlzTXVsdGlTZWxlY3RWaXNpYmxlKCk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uTGVmdCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdsZWZ0Jyk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uUmlnaHQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbigncmlnaHQnKTtcbiAgfVxuXG59XG4iXX0=