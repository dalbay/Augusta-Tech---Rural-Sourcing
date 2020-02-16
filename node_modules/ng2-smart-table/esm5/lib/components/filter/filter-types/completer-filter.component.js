import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { CompleterService } from 'ng2-completer';
import { DefaultFilter } from './default-filter';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
var CompleterFilterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CompleterFilterComponent, _super);
    function CompleterFilterComponent(completerService) {
        var _this = _super.call(this) || this;
        _this.completerService = completerService;
        _this.completerContent = new Subject();
        return _this;
    }
    CompleterFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.column.getFilterConfig().completer;
        config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        config.dataService.descriptionField(config.descriptionField);
        this.changesSubscription = this.completerContent
            .pipe(map(function (ev) { return (ev && ev.title) || ev || ''; }), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe(function (search) {
            _this.query = search;
            _this.setFilter();
        });
    };
    CompleterFilterComponent.prototype.inputTextChanged = function (event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    };
    CompleterFilterComponent = tslib_1.__decorate([
        Component({
            selector: 'completer-filter',
            template: "\n    <ng2-completer [(ngModel)]=\"query\"\n                   (ngModelChange)=\"inputTextChanged($event)\"\n                   [dataService]=\"column.getFilterConfig().completer.dataService\"\n                   [minSearchLength]=\"column.getFilterConfig().completer.minSearchLength || 0\"\n                   [pause]=\"column.getFilterConfig().completer.pause || 0\"\n                   [placeholder]=\"column.getFilterConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"completerContent.next($event)\">\n    </ng2-completer>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [CompleterService])
    ], CompleterFilterComponent);
    return CompleterFilterComponent;
}(DefaultFilter));
export { CompleterFilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2NvbXBsZXRlci1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZXpFO0lBQThDLG9EQUFhO0lBSXpELGtDQUFvQixnQkFBa0M7UUFBdEQsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGdEQsc0JBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQzs7SUFJdEMsQ0FBQztJQUVELDJDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RHLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxnQkFBZ0I7YUFDN0MsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLEVBQU8sSUFBSyxPQUFBLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDLEVBQzlDLG9CQUFvQixFQUFFLEVBQ3RCLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxDQUFDLFVBQUMsTUFBYztZQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUNwQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbURBQWdCLEdBQWhCLFVBQWlCLEtBQWE7UUFDNUIsK0VBQStFO1FBQy9FLGlHQUFpRztRQUNqRyxrQ0FBa0M7UUFDbEMsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBaENVLHdCQUF3QjtRQWJwQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSx3akJBU1Q7U0FDRixDQUFDO2lEQUtzQyxnQkFBZ0I7T0FKM0Msd0JBQXdCLENBaUNwQztJQUFELCtCQUFDO0NBQUEsQUFqQ0QsQ0FBOEMsYUFBYSxHQWlDMUQ7U0FqQ1ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbXBsZXRlclNlcnZpY2UgfSBmcm9tICduZzItY29tcGxldGVyJztcblxuaW1wb3J0IHsgRGVmYXVsdEZpbHRlciB9IGZyb20gJy4vZGVmYXVsdC1maWx0ZXInO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGRlYm91bmNlVGltZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21wbGV0ZXItZmlsdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmcyLWNvbXBsZXRlciBbKG5nTW9kZWwpXT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJpbnB1dFRleHRDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgIFtkYXRhU2VydmljZV09XCJjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuY29tcGxldGVyLmRhdGFTZXJ2aWNlXCJcbiAgICAgICAgICAgICAgICAgICBbbWluU2VhcmNoTGVuZ3RoXT1cImNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5jb21wbGV0ZXIubWluU2VhcmNoTGVuZ3RoIHx8IDBcIlxuICAgICAgICAgICAgICAgICAgIFtwYXVzZV09XCJjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuY29tcGxldGVyLnBhdXNlIHx8IDBcIlxuICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuY29tcGxldGVyLnBsYWNlaG9sZGVyIHx8ICdTdGFydCB0eXBpbmcuLi4nXCJcbiAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWQpPVwiY29tcGxldGVyQ29udGVudC5uZXh0KCRldmVudClcIj5cbiAgICA8L25nMi1jb21wbGV0ZXI+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbXBsZXRlckZpbHRlckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGaWx0ZXIgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbXBsZXRlckNvbnRlbnQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wbGV0ZXJTZXJ2aWNlOiBDb21wbGV0ZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlcjtcbiAgICBjb25maWcuZGF0YVNlcnZpY2UgPSB0aGlzLmNvbXBsZXRlclNlcnZpY2UubG9jYWwoY29uZmlnLmRhdGEsIGNvbmZpZy5zZWFyY2hGaWVsZHMsIGNvbmZpZy50aXRsZUZpZWxkKTtcbiAgICBjb25maWcuZGF0YVNlcnZpY2UuZGVzY3JpcHRpb25GaWVsZChjb25maWcuZGVzY3JpcHRpb25GaWVsZCk7XG5cbiAgICB0aGlzLmNoYW5nZXNTdWJzY3JpcHRpb24gPSB0aGlzLmNvbXBsZXRlckNvbnRlbnRcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKGV2OiBhbnkpID0+IChldiAmJiBldi50aXRsZSkgfHwgZXYgfHwgJycpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWxheSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHNlYXJjaDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucXVlcnkgPSBzZWFyY2g7XG4gICAgICAgIHRoaXMuc2V0RmlsdGVyKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGlucHV0VGV4dENoYW5nZWQoZXZlbnQ6IHN0cmluZykge1xuICAgIC8vIHdvcmthcm91bmQgdG8gdHJpZ2dlciB0aGUgc2VhcmNoIGV2ZW50IHdoZW4gdGhlIGhvbWUvZW5kIGJ1dHRvbnMgYXJlIGNsaWNrZWRcbiAgICAvLyB3aGVuIHRoaXMgaGFwcGVucyB0aGUgWyhuZ01vZGVsKV09XCJxdWVyeVwiIGlzIHNldCB0byBcIlwiIGJ1dCB0aGUgKHNlbGVjdGVkKSBtZXRob2QgaXMgbm90IGNhbGxlZFxuICAgIC8vIHNvIGhlcmUgaXQgZ2V0cyBjYWxsZWQgbWFudWFsbHlcbiAgICBpZiAoZXZlbnQgPT09ICcnKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlckNvbnRlbnQubmV4dChldmVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=