import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FilterDefault } from './filter-default';
var FilterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterComponent, _super);
    function FilterComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.query = '';
        return _this;
    }
    FilterComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var filterConf = _this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    _this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach(function (k, v) {
                        if (k.field == _this.column.id) {
                            _this.query = k.search;
                        }
                    });
                }
            });
        }
    };
    FilterComponent = tslib_1.__decorate([
        Component({
            selector: 'ng2-smart-table-filter',
            template: "\n      <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n        <custom-table-filter *ngSwitchCase=\"'custom'\"\n                             [query]=\"query\"\n                             [column]=\"column\"\n                             [source]=\"source\"\n                             [inputClass]=\"inputClass\"\n                             (filter)=\"onFilter($event)\">\n        </custom-table-filter>\n        <default-table-filter *ngSwitchDefault\n                              [query]=\"query\"\n                              [column]=\"column\"\n                              [source]=\"source\"\n                              [inputClass]=\"inputClass\"\n                              (filter)=\"onFilter($event)\">\n        </default-table-filter>\n      </div>\n    ",
            styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}"]
        })
    ], FilterComponent);
    return FilterComponent;
}(FilterDefault));
export { FilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUF5QmpEO0lBQXFDLDJDQUFhO0lBdEJsRDtRQUFBLHFFQWdEQztRQXpCQyxXQUFLLEdBQVcsRUFBRSxDQUFDOztJQXlCckIsQ0FBQztJQXRCQyxxQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBcUJDO1FBcEJDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsV0FBVztnQkFDbEUsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0MsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ3ZFLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUVoQixrRkFBa0Y7b0JBQ2xGLHNHQUFzRztpQkFDdkc7cUJBQU0sSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzVFLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU07d0JBQ3hDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTs0QkFDN0IsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO3lCQUN2QjtvQkFDSCxDQUFDLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBekJVLGVBQWU7UUF0QjNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx3QkFBd0I7WUFFbEMsUUFBUSxFQUFFLHUwQkFpQlA7O1NBQ0osQ0FBQztPQUNXLGVBQWUsQ0EwQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTFCRCxDQUFxQyxhQUFhLEdBMEJqRDtTQTFCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlckRlZmF1bHQgfSBmcm9tICcuL2ZpbHRlci1kZWZhdWx0JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc21hcnQtdGFibGUtZmlsdGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsdGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwibmcyLXNtYXJ0LWZpbHRlclwiICpuZ0lmPVwiY29sdW1uLmlzRmlsdGVyYWJsZVwiIFtuZ1N3aXRjaF09XCJjb2x1bW4uZ2V0RmlsdGVyVHlwZSgpXCI+XG4gICAgICAgIDxjdXN0b20tdGFibGUtZmlsdGVyICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCI+XG4gICAgICAgIDwvY3VzdG9tLXRhYmxlLWZpbHRlcj5cbiAgICAgICAgPGRlZmF1bHQtdGFibGUtZmlsdGVyICpuZ1N3aXRjaERlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxuICAgICAgICA8L2RlZmF1bHQtdGFibGUtZmlsdGVyPlxuICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRmlsdGVyRGVmYXVsdCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHF1ZXJ5OiBzdHJpbmcgPSAnJztcbiAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnNvdXJjZSkge1xuICAgICAgaWYgKCFjaGFuZ2VzLnNvdXJjZS5maXJzdENoYW5nZSkge1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViID0gdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKChkYXRhQ2hhbmdlcykgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJDb25mID0gdGhpcy5zb3VyY2UuZ2V0RmlsdGVyKCk7XG4gICAgICAgIGlmIChmaWx0ZXJDb25mICYmIGZpbHRlckNvbmYuZmlsdGVycyAmJiBmaWx0ZXJDb25mLmZpbHRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5xdWVyeSA9ICcnO1xuXG4gICAgICAgICAgLy8gYWRkIGEgY2hlY2sgZm9yIGV4aXN0aW5nIGZpbHRlcnMgYW4gc2V0IHRoZSBxdWVyeSBpZiBvbmUgZXhpc3RzIGZvciB0aGlzIGNvbHVtblxuICAgICAgICAgIC8vIHRoaXMgY292ZXJzIGluc3RhbmNlcyB3aGVyZSB0aGUgZmlsdGVyIGlzIHNldCBieSB1c2VyIGNvZGUgd2hpbGUgbWFpbnRhaW5pbmcgZXhpc3RpbmcgZnVuY3Rpb25hbGl0eVxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlckNvbmYgJiYgZmlsdGVyQ29uZi5maWx0ZXJzICYmIGZpbHRlckNvbmYuZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZmlsdGVyQ29uZi5maWx0ZXJzLmZvckVhY2goKGs6IGFueSwgdjogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoay5maWVsZCA9PSB0aGlzLmNvbHVtbi5pZCkge1xuICAgICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gay5zZWFyY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19