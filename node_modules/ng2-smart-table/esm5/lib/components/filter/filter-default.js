import * as tslib_1 from "tslib";
import { Output, EventEmitter, Input } from '@angular/core';
import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';
var FilterDefault = /** @class */ (function () {
    function FilterDefault() {
        this.inputClass = '';
        this.filter = new EventEmitter();
        this.query = '';
    }
    FilterDefault.prototype.onFilter = function (query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Column)
    ], FilterDefault.prototype, "column", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DataSource)
    ], FilterDefault.prototype, "source", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], FilterDefault.prototype, "inputClass", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], FilterDefault.prototype, "filter", void 0);
    return FilterDefault;
}());
export { FilterDefault };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWRlZmF1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLWRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRS9EO0lBQUE7UUFJVyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTNDLFVBQUssR0FBVyxFQUFFLENBQUM7SUFTckIsQ0FBQztJQVBDLGdDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckIsTUFBTSxFQUFFLEtBQUs7WUFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBZFE7UUFBUixLQUFLLEVBQUU7MENBQVMsTUFBTTtpREFBQztJQUNmO1FBQVIsS0FBSyxFQUFFOzBDQUFTLFVBQVU7aURBQUM7SUFDbkI7UUFBUixLQUFLLEVBQUU7O3FEQUF5QjtJQUV2QjtRQUFULE1BQU0sRUFBRTs7aURBQWtDO0lBVzdDLG9CQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FqQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyRGVmYXVsdCB7XG5cbiAgQElucHV0KCkgY29sdW1uOiBDb2x1bW47XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nID0gJyc7XG5cbiAgQE91dHB1dCgpIGZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHF1ZXJ5OiBzdHJpbmcgPSAnJztcblxuICBvbkZpbHRlcihxdWVyeTogc3RyaW5nKSB7XG4gICAgdGhpcy5zb3VyY2UuYWRkRmlsdGVyKHtcbiAgICAgIGZpZWxkOiB0aGlzLmNvbHVtbi5pZCxcbiAgICAgIHNlYXJjaDogcXVlcnksXG4gICAgICBmaWx0ZXI6IHRoaXMuY29sdW1uLmdldEZpbHRlckZ1bmN0aW9uKCksXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==