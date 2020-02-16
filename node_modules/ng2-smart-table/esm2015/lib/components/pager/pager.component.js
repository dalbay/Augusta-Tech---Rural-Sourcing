import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../lib/data-source/data-source';
let PagerComponent = class PagerComponent {
    constructor() {
        this.perPageSelect = [];
        this.changePage = new EventEmitter();
        this.count = 0;
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                this.page = this.source.getPaging().page;
                this.perPage = this.source.getPaging().perPage;
                this.currentPerPage = this.perPage;
                this.count = this.source.count();
                if (this.isPageOutOfBounce()) {
                    this.source.setPage(--this.page);
                }
                this.processPageChange(dataChanges);
                this.initPages();
            });
        }
    }
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    processPageChange(changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    }
    shouldShow() {
        return this.source.count() > this.perPage;
    }
    paginate(page) {
        this.source.setPage(page);
        this.page = page;
        this.changePage.emit({ page });
        return false;
    }
    next() {
        return this.paginate(this.getPage() + 1);
    }
    prev() {
        return this.paginate(this.getPage() - 1);
    }
    getPage() {
        return this.page;
    }
    getPages() {
        return this.pages;
    }
    getLast() {
        return Math.ceil(this.count / this.perPage);
    }
    isPageOutOfBounce() {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    }
    initPages() {
        const pagesCount = this.getLast();
        let showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            let middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            let lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            const firstOne = lastOne - showPagesCount + 1;
            for (let i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    }
    onChangePerPage(event) {
        if (this.currentPerPage) {
            if (typeof this.currentPerPage === 'string' && this.currentPerPage.toLowerCase() === 'all') {
                this.source.getPaging().perPage = null;
            }
            else {
                this.source.getPaging().perPage = this.currentPerPage * 1;
                this.source.refresh();
            }
            this.initPages();
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DataSource)
], PagerComponent.prototype, "source", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], PagerComponent.prototype, "perPageSelect", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], PagerComponent.prototype, "changePage", void 0);
PagerComponent = tslib_1.__decorate([
    Component({
        selector: 'ng2-smart-table-pager',
        template: `
    <nav *ngIf="shouldShow()" class="ng2-smart-pagination-nav">
      <ul class="ng2-smart-pagination pagination">
        <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="getPage() == 1 ? false : paginate(1)" aria-label="First">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">First</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
          <a class="ng2-smart-page-link page-link page-link-prev" href="#"
             (click)="getPage() == 1 ? false : prev()" aria-label="Prev">
            <span aria-hidden="true">&lt;</span>
            <span class="sr-only">Prev</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item"
        [ngClass]="{active: getPage() == page}" *ngFor="let page of getPages()">
          <span class="ng2-smart-page-link page-link"
          *ngIf="getPage() == page">{{ page }} <span class="sr-only">(current)</span></span>
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="paginate(page)" *ngIf="getPage() != page">{{ page }}</a>
        </li>

        <li class="ng2-smart-page-item page-item"
            [ngClass]="{disabled: getPage() == getLast()}">
          <a class="ng2-smart-page-link page-link page-link-next" href="#"
             (click)="getPage() == getLast() ? false : next()" aria-label="Next">
            <span aria-hidden="true">&gt;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
        
        <li class="ng2-smart-page-item page-item"
        [ngClass]="{disabled: getPage() == getLast()}">
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="getPage() == getLast() ? false : paginate(getLast())" aria-label="Last">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Last</span>
          </a>
        </li>
      </ul>
    </nav>
    
    <nav *ngIf="perPageSelect && perPageSelect.length > 0" class="ng2-smart-pagination-per-page">
      <label for="per-page">
        Per Page:
      </label>
      <select (change)="onChangePerPage($event)" [(ngModel)]="currentPerPage" id="per-page">
        <option *ngFor="let item of perPageSelect" [value]="item">{{ item }}</option>
      </select>
    </nav>
  `,
        styles: [".ng2-smart-pagination{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination .ng2-smart-page-item{display:inline}.ng2-smart-pagination .page-link-next,.ng2-smart-pagination .page-link-prev{font-size:10px}:host{display:flex;justify-content:space-between}:host select{margin:1rem 0 1rem 1rem}:host label{margin:1rem 0 1rem 1rem;line-height:2.5rem}"]
    })
], PagerComponent);
export { PagerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnZXIvcGFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUdqRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUE0RC9ELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUExRDNCO1FBNkRXLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBRXpCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBTXJDLFVBQUssR0FBVyxDQUFDLENBQUM7SUE4RzlCLENBQUM7SUF6R0MsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3RFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFD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QUFjLENBeUgxQjtTQXpIWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc21hcnQtdGFibGUtcGFnZXInLFxuICBzdHlsZVVybHM6IFsnLi9wYWdlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYXYgKm5nSWY9XCJzaG91bGRTaG93KClcIiBjbGFzcz1cIm5nMi1zbWFydC1wYWdpbmF0aW9uLW5hdlwiPlxuICAgICAgPHVsIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2luYXRpb24gcGFnaW5hdGlvblwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1pdGVtIHBhZ2UtaXRlbVwiIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZ2V0UGFnZSgpID09IDF9XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGlua1wiIGhyZWY9XCIjXCJcbiAgICAgICAgICAoY2xpY2spPVwiZ2V0UGFnZSgpID09IDEgPyBmYWxzZSA6IHBhZ2luYXRlKDEpXCIgYXJpYS1sYWJlbD1cIkZpcnN0XCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbGFxdW87PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+Rmlyc3Q8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1pdGVtIHBhZ2UtaXRlbVwiIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZ2V0UGFnZSgpID09IDF9XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGluayBwYWdlLWxpbmstcHJldlwiIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAoY2xpY2spPVwiZ2V0UGFnZSgpID09IDEgPyBmYWxzZSA6IHByZXYoKVwiIGFyaWEtbGFiZWw9XCJQcmV2XCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbHQ7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldjwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCJcbiAgICAgICAgW25nQ2xhc3NdPVwie2FjdGl2ZTogZ2V0UGFnZSgpID09IHBhZ2V9XCIgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgZ2V0UGFnZXMoKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtbGluayBwYWdlLWxpbmtcIlxuICAgICAgICAgICpuZ0lmPVwiZ2V0UGFnZSgpID09IHBhZ2VcIj57eyBwYWdlIH19IDxzcGFuIGNsYXNzPVwic3Itb25seVwiPihjdXJyZW50KTwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGlua1wiIGhyZWY9XCIjXCJcbiAgICAgICAgICAoY2xpY2spPVwicGFnaW5hdGUocGFnZSlcIiAqbmdJZj1cImdldFBhZ2UoKSAhPSBwYWdlXCI+e3sgcGFnZSB9fTwvYT5cbiAgICAgICAgPC9saT5cblxuICAgICAgICA8bGkgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1pdGVtIHBhZ2UtaXRlbVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IGdldFBhZ2UoKSA9PSBnZXRMYXN0KCl9XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGluayBwYWdlLWxpbmstbmV4dFwiIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAoY2xpY2spPVwiZ2V0UGFnZSgpID09IGdldExhc3QoKSA/IGZhbHNlIDogbmV4dCgpXCIgYXJpYS1sYWJlbD1cIk5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZndDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgXG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCJcbiAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBnZXRQYWdlKCkgPT0gZ2V0TGFzdCgpfVwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtbGluayBwYWdlLWxpbmtcIiBocmVmPVwiI1wiXG4gICAgICAgICAgKGNsaWNrKT1cImdldFBhZ2UoKSA9PSBnZXRMYXN0KCkgPyBmYWxzZSA6IHBhZ2luYXRlKGdldExhc3QoKSlcIiBhcmlhLWxhYmVsPVwiTGFzdFwiPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnJhcXVvOzwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxhc3Q8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgICBcbiAgICA8bmF2ICpuZ0lmPVwicGVyUGFnZVNlbGVjdCAmJiBwZXJQYWdlU2VsZWN0Lmxlbmd0aCA+IDBcIiBjbGFzcz1cIm5nMi1zbWFydC1wYWdpbmF0aW9uLXBlci1wYWdlXCI+XG4gICAgICA8bGFiZWwgZm9yPVwicGVyLXBhZ2VcIj5cbiAgICAgICAgUGVyIFBhZ2U6XG4gICAgICA8L2xhYmVsPlxuICAgICAgPHNlbGVjdCAoY2hhbmdlKT1cIm9uQ2hhbmdlUGVyUGFnZSgkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJjdXJyZW50UGVyUGFnZVwiIGlkPVwicGVyLXBhZ2VcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwZXJQYWdlU2VsZWN0XCIgW3ZhbHVlXT1cIml0ZW1cIj57eyBpdGVtIH19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L25hdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgQElucHV0KCkgcGVyUGFnZVNlbGVjdDogYW55W10gPSBbXTtcblxuICBAT3V0cHV0KCkgY2hhbmdlUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGN1cnJlbnRQZXJQYWdlOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHBhZ2VzOiBBcnJheTxhbnk+O1xuICBwcm90ZWN0ZWQgcGFnZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgY291bnQ6IG51bWJlciA9IDA7XG4gIHByb3RlY3RlZCBwZXJQYWdlOiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnNvdXJjZSkge1xuICAgICAgaWYgKCFjaGFuZ2VzLnNvdXJjZS5maXJzdENoYW5nZSkge1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViID0gdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKChkYXRhQ2hhbmdlcykgPT4ge1xuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlO1xuICAgICAgICB0aGlzLnBlclBhZ2UgPSB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlO1xuICAgICAgICB0aGlzLmN1cnJlbnRQZXJQYWdlID0gdGhpcy5wZXJQYWdlO1xuICAgICAgICB0aGlzLmNvdW50ID0gdGhpcy5zb3VyY2UuY291bnQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNQYWdlT3V0T2ZCb3VuY2UoKSkge1xuICAgICAgICAgIHRoaXMuc291cmNlLnNldFBhZ2UoLS10aGlzLnBhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzUGFnZUNoYW5nZShkYXRhQ2hhbmdlcyk7XG4gICAgICAgIHRoaXMuaW5pdFBhZ2VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2UgY2hhbmdlIHRoZSBwYWdlIGhlcmUgZGVwZW5kaW5nIG9uIHRoZSBhY3Rpb24gcGVyZm9ybWVkIGFnYWluc3QgZGF0YSBzb3VyY2VcbiAgICogaWYgYSBuZXcgZWxlbWVudCB3YXMgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgdGFibGUgLSB0aGVuIGNoYW5nZSB0aGUgcGFnZSB0byB0aGUgbGFzdFxuICAgKiBpZiBhIG5ldyBlbGVtZW50IHdhcyBhZGRlZCB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSB0YWJsZSAtIHRoZW4gdG8gdGhlIGZpcnN0IHBhZ2VcbiAgICogQHBhcmFtIGNoYW5nZXNcbiAgICovXG4gIHByb2Nlc3NQYWdlQ2hhbmdlKGNoYW5nZXM6IGFueSkge1xuICAgIGlmIChjaGFuZ2VzWydhY3Rpb24nXSA9PT0gJ3ByZXBlbmQnKSB7XG4gICAgICB0aGlzLnNvdXJjZS5zZXRQYWdlKDEpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snYWN0aW9uJ10gPT09ICdhcHBlbmQnKSB7XG4gICAgICB0aGlzLnNvdXJjZS5zZXRQYWdlKHRoaXMuZ2V0TGFzdCgpKTtcbiAgICB9XG4gIH1cblxuICBzaG91bGRTaG93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZS5jb3VudCgpID4gdGhpcy5wZXJQYWdlO1xuICB9XG5cbiAgcGFnaW5hdGUocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgdGhpcy5zb3VyY2Uuc2V0UGFnZShwYWdlKTtcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIHRoaXMuY2hhbmdlUGFnZS5lbWl0KHsgcGFnZSB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBuZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRlKHRoaXMuZ2V0UGFnZSgpICsgMSk7XG4gIH1cblxuICBwcmV2KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRlKHRoaXMuZ2V0UGFnZSgpIC0gMSk7XG4gIH1cblxuICBnZXRQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgfVxuXG4gIGdldFBhZ2VzKCk6IEFycmF5PGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2VzO1xuICB9XG5cbiAgZ2V0TGFzdCgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5jb3VudCAvIHRoaXMucGVyUGFnZSk7XG4gIH1cblxuICBpc1BhZ2VPdXRPZkJvdW5jZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMucGFnZSAqIHRoaXMucGVyUGFnZSkgPj0gKHRoaXMuY291bnQgKyB0aGlzLnBlclBhZ2UpICYmIHRoaXMucGFnZSA+IDE7XG4gIH1cblxuICBpbml0UGFnZXMoKSB7XG4gICAgY29uc3QgcGFnZXNDb3VudCA9IHRoaXMuZ2V0TGFzdCgpO1xuICAgIGxldCBzaG93UGFnZXNDb3VudCA9IDQ7XG4gICAgc2hvd1BhZ2VzQ291bnQgPSBwYWdlc0NvdW50IDwgc2hvd1BhZ2VzQ291bnQgPyBwYWdlc0NvdW50IDogc2hvd1BhZ2VzQ291bnQ7XG4gICAgdGhpcy5wYWdlcyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuc2hvdWxkU2hvdygpKSB7XG5cbiAgICAgIGxldCBtaWRkbGVPbmUgPSBNYXRoLmNlaWwoc2hvd1BhZ2VzQ291bnQgLyAyKTtcbiAgICAgIG1pZGRsZU9uZSA9IHRoaXMucGFnZSA+PSBtaWRkbGVPbmUgPyB0aGlzLnBhZ2UgOiBtaWRkbGVPbmU7XG5cbiAgICAgIGxldCBsYXN0T25lID0gbWlkZGxlT25lICsgTWF0aC5mbG9vcihzaG93UGFnZXNDb3VudCAvIDIpO1xuICAgICAgbGFzdE9uZSA9IGxhc3RPbmUgPj0gcGFnZXNDb3VudCA/IHBhZ2VzQ291bnQgOiBsYXN0T25lO1xuXG4gICAgICBjb25zdCBmaXJzdE9uZSA9IGxhc3RPbmUgLSBzaG93UGFnZXNDb3VudCArIDE7XG5cbiAgICAgIGZvciAobGV0IGkgPSBmaXJzdE9uZTsgaSA8PSBsYXN0T25lOyBpKyspIHtcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlUGVyUGFnZShldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFBlclBhZ2UpIHtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmN1cnJlbnRQZXJQYWdlID09PSAnc3RyaW5nJyAmJiB0aGlzLmN1cnJlbnRQZXJQYWdlLnRvTG93ZXJDYXNlKCkgPT09ICdhbGwnKSB7XG4gICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2UgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGVyUGFnZSA9IHRoaXMuY3VycmVudFBlclBhZ2UgKiAxO1xuICAgICAgICB0aGlzLnNvdXJjZS5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmluaXRQYWdlcygpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=