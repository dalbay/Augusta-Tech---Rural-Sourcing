import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
let TheadFormRowComponent = class TheadFormRowComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    onCreate(event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.addInputClass = this.grid.getSetting('add.inputClass');
    }
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
        template: `
      <td *ngIf=""></td>
      <td  *ngIf="showActionColumnLeft"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
      <td *ngFor="let cell of grid.getNewRow().getCells()">
        <ng2-smart-table-cell [cell]="cell"
                              [grid]="grid"
                              [isNew]="true"
                              [createConfirm]="createConfirm"
                              [inputClass]="addInputClass"
                              [isInEditing]="grid.getNewRow().isInEditing"
                              (edited)="onCreate($event)">
        </ng2-smart-table-cell>
      </td>
      <td  *ngIf="showActionColumnRight"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
  `
    })
], TheadFormRowComponent);
export { TheadFormRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZm9ybS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvcm93cy90aGVhZC1mb3JtLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQXdCaEQsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUF0QmxDO1FBNEJZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBbUI3QyxDQUFDO0lBWkMsUUFBUSxDQUFDLEtBQVU7UUFDakIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNGLENBQUE7QUF2QlU7SUFBUixLQUFLLEVBQUU7c0NBQU8sSUFBSTttREFBQztBQUNYO0lBQVIsS0FBSyxFQUFFO3NDQUFNLEdBQUc7a0RBQUM7QUFDVDtJQUFSLEtBQUssRUFBRTtzQ0FBZ0IsWUFBWTs0REFBTTtBQUVoQztJQUFULE1BQU0sRUFBRTs7cURBQWtDO0FBTmhDLHFCQUFxQjtJQXRCakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtLQUNGLENBQUM7R0FDVyxxQkFBcUIsQ0F5QmpDO1NBekJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9yb3cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LXRoZWFkLWZvcm0tcm93XScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8dGQgKm5nSWY9XCJcIj48L3RkPlxuICAgICAgPHRkICAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5MZWZ0XCIgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cbiAgICAgICAgPG5nMi1zdC1hY3Rpb25zIFtncmlkXT1cImdyaWRcIiAoY3JlYXRlKT1cIm9uQ3JlYXRlKCRldmVudClcIj48L25nMi1zdC1hY3Rpb25zPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY2VsbCBvZiBncmlkLmdldE5ld1JvdygpLmdldENlbGxzKClcIj5cbiAgICAgICAgPG5nMi1zbWFydC10YWJsZS1jZWxsIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNOZXddPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3JlYXRlQ29uZmlybV09XCJjcmVhdGVDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImFkZElucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzSW5FZGl0aW5nXT1cImdyaWQuZ2V0TmV3Um93KCkuaXNJbkVkaXRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRlZCk9XCJvbkNyZWF0ZSgkZXZlbnQpXCI+XG4gICAgICAgIDwvbmcyLXNtYXJ0LXRhYmxlLWNlbGw+XG4gICAgICA8L3RkPlxuICAgICAgPHRkICAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5SaWdodFwiICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCI+XG4gICAgICAgIDxuZzItc3QtYWN0aW9ucyBbZ3JpZF09XCJncmlkXCIgKGNyZWF0ZSk9XCJvbkNyZWF0ZSgkZXZlbnQpXCI+PC9uZzItc3QtYWN0aW9ucz5cbiAgICAgIDwvdGQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRoZWFkRm9ybVJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgcm93OiBSb3c7XG4gIEBJbnB1dCgpIGNyZWF0ZUNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBpc011bHRpU2VsZWN0VmlzaWJsZTogYm9vbGVhbjtcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQ6IGJvb2xlYW47XG4gIHNob3dBY3Rpb25Db2x1bW5SaWdodDogYm9vbGVhbjtcbiAgYWRkSW5wdXRDbGFzczogc3RyaW5nO1xuXG4gIG9uQ3JlYXRlKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuZ3JpZC5jcmVhdGUodGhpcy5ncmlkLmdldE5ld1JvdygpLCB0aGlzLmNyZWF0ZUNvbmZpcm0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKXtcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3RWaXNpYmxlID0gdGhpcy5ncmlkLmlzTXVsdGlTZWxlY3RWaXNpYmxlKCk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uTGVmdCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdsZWZ0Jyk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uUmlnaHQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbigncmlnaHQnKTtcbiAgICB0aGlzLmFkZElucHV0Q2xhc3MgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWRkLmlucHV0Q2xhc3MnKTtcbiAgfVxufVxuIl19