import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FilterDefault } from './filter-default';
let FilterComponent = class FilterComponent extends FilterDefault {
    constructor() {
        super(...arguments);
        this.query = '';
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const filterConf = this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach((k, v) => {
                        if (k.field == this.column.id) {
                            this.query = k.search;
                        }
                    });
                }
            });
        }
    }
};
FilterComponent = tslib_1.__decorate([
    Component({
        selector: 'ng2-smart-table-filter',
        template: `
      <div class="ng2-smart-filter" *ngIf="column.isFilterable" [ngSwitch]="column.getFilterType()">
        <custom-table-filter *ngSwitchCase="'custom'"
                             [query]="query"
                             [column]="column"
                             [source]="source"
                             [inputClass]="inputClass"
                             (filter)="onFilter($event)">
        </custom-table-filter>
        <default-table-filter *ngSwitchDefault
                              [query]="query"
                              [column]="column"
                              [source]="source"
                              [inputClass]="inputClass"
                              (filter)="onFilter($event)">
        </default-table-filter>
      </div>
    `,
        styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}"]
    })
], FilterComponent);
export { FilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUF5QmpELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWdCLFNBQVEsYUFBYTtJQXRCbEQ7O1FBdUJFLFVBQUssR0FBVyxFQUFFLENBQUM7SUF5QnJCLENBQUM7SUF0QkMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3RFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNDLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFFaEIsa0ZBQWtGO29CQUNsRixzR0FBc0c7aUJBQ3ZHO3FCQUFNLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUM1RSxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTt3QkFDNUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFOzRCQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7eUJBQ3ZCO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRixDQUFBO0FBMUJZLGVBQWU7SUF0QjNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx3QkFBd0I7UUFFbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCUDs7S0FDSixDQUFDO0dBQ1csZUFBZSxDQTBCM0I7U0ExQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJEZWZhdWx0IH0gZnJvbSAnLi9maWx0ZXItZGVmYXVsdCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmcyLXNtYXJ0LXRhYmxlLWZpbHRlcicsXG4gIHN0eWxlVXJsczogWycuL2ZpbHRlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cIm5nMi1zbWFydC1maWx0ZXJcIiAqbmdJZj1cImNvbHVtbi5pc0ZpbHRlcmFibGVcIiBbbmdTd2l0Y2hdPVwiY29sdW1uLmdldEZpbHRlclR5cGUoKVwiPlxuICAgICAgICA8Y3VzdG9tLXRhYmxlLWZpbHRlciAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxuICAgICAgICA8L2N1c3RvbS10YWJsZS1maWx0ZXI+XG4gICAgICAgIDxkZWZhdWx0LXRhYmxlLWZpbHRlciAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIj5cbiAgICAgICAgPC9kZWZhdWx0LXRhYmxlLWZpbHRlcj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCBleHRlbmRzIEZpbHRlckRlZmF1bHQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBxdWVyeTogc3RyaW5nID0gJyc7XG4gIHByb3RlY3RlZCBkYXRhQ2hhbmdlZFN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5zb3VyY2UpIHtcbiAgICAgIGlmICghY2hhbmdlcy5zb3VyY2UuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1YiA9IHRoaXMuc291cmNlLm9uQ2hhbmdlZCgpLnN1YnNjcmliZSgoZGF0YUNoYW5nZXMpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyQ29uZiA9IHRoaXMuc291cmNlLmdldEZpbHRlcigpO1xuICAgICAgICBpZiAoZmlsdGVyQ29uZiAmJiBmaWx0ZXJDb25mLmZpbHRlcnMgJiYgZmlsdGVyQ29uZi5maWx0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMucXVlcnkgPSAnJztcblxuICAgICAgICAgIC8vIGFkZCBhIGNoZWNrIGZvciBleGlzdGluZyBmaWx0ZXJzIGFuIHNldCB0aGUgcXVlcnkgaWYgb25lIGV4aXN0cyBmb3IgdGhpcyBjb2x1bW5cbiAgICAgICAgICAvLyB0aGlzIGNvdmVycyBpbnN0YW5jZXMgd2hlcmUgdGhlIGZpbHRlciBpcyBzZXQgYnkgdXNlciBjb2RlIHdoaWxlIG1haW50YWluaW5nIGV4aXN0aW5nIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJDb25mICYmIGZpbHRlckNvbmYuZmlsdGVycyAmJiBmaWx0ZXJDb25mLmZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZpbHRlckNvbmYuZmlsdGVycy5mb3JFYWNoKChrOiBhbnksIHY6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGsuZmllbGQgPT0gdGhpcy5jb2x1bW4uaWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5xdWVyeSA9IGsuc2VhcmNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==