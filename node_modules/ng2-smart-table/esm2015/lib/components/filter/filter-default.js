import * as tslib_1 from "tslib";
import { Output, EventEmitter, Input } from '@angular/core';
import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';
export class FilterDefault {
    constructor() {
        this.inputClass = '';
        this.filter = new EventEmitter();
        this.query = '';
    }
    onFilter(query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWRlZmF1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLWRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRS9ELE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBSVcsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV2QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUzQyxVQUFLLEdBQVcsRUFBRSxDQUFDO0lBU3JCLENBQUM7SUFQQyxRQUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBZlU7SUFBUixLQUFLLEVBQUU7c0NBQVMsTUFBTTs2Q0FBQztBQUNmO0lBQVIsS0FBSyxFQUFFO3NDQUFTLFVBQVU7NkNBQUM7QUFDbkI7SUFBUixLQUFLLEVBQUU7O2lEQUF5QjtBQUV2QjtJQUFULE1BQU0sRUFBRTs7NkNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW4nO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJEZWZhdWx0IHtcblxuICBASW5wdXQoKSBjb2x1bW46IENvbHVtbjtcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcblxuICBAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcXVlcnk6IHN0cmluZyA9ICcnO1xuXG4gIG9uRmlsdGVyKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnNvdXJjZS5hZGRGaWx0ZXIoe1xuICAgICAgZmllbGQ6IHRoaXMuY29sdW1uLmlkLFxuICAgICAgc2VhcmNoOiBxdWVyeSxcbiAgICAgIGZpbHRlcjogdGhpcy5jb2x1bW4uZ2V0RmlsdGVyRnVuY3Rpb24oKSxcbiAgICB9KTtcbiAgfVxufVxuIl19