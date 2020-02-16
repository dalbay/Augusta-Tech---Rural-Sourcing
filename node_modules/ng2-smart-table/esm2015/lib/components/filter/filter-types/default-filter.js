import * as tslib_1 from "tslib";
import { Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
export class DefaultFilter {
    constructor() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    ngOnDestroy() {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    }
    setFilter() {
        this.filter.emit(this.query);
    }
}
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], DefaultFilter.prototype, "query", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], DefaultFilter.prototype, "inputClass", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Column)
], DefaultFilter.prototype, "column", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], DefaultFilter.prototype, "filter", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2RlZmF1bHQtZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXRELE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBRUUsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUtWLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBV2hELENBQUM7SUFUQyxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBZFU7SUFBUixLQUFLLEVBQUU7OzRDQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7O2lEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTtzQ0FBUyxNQUFNOzZDQUFDO0FBQ2Q7SUFBVCxNQUFNLEVBQUU7OzZDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtbic7XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0RmlsdGVyIGltcGxlbWVudHMgRmlsdGVyLCBPbkRlc3Ryb3kge1xuXG4gIGRlbGF5OiBudW1iZXIgPSAzMDA7XG4gIGNoYW5nZXNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgQElucHV0KCkgcXVlcnk6IHN0cmluZztcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjb2x1bW46IENvbHVtbjtcbiAgQE91dHB1dCgpIGZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNoYW5nZXNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuY2hhbmdlc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldEZpbHRlcigpIHtcbiAgICB0aGlzLmZpbHRlci5lbWl0KHRoaXMucXVlcnkpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyIHtcblxuICBkZWxheT86IG51bWJlcjtcbiAgY2hhbmdlc1N1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbjtcbiAgcXVlcnk6IHN0cmluZztcbiAgaW5wdXRDbGFzczogc3RyaW5nO1xuICBjb2x1bW46IENvbHVtbjtcbiAgZmlsdGVyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcbn1cbiJdfQ==