import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
let SelectEditorComponent = class SelectEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
};
SelectEditorComponent = tslib_1.__decorate([
    Component({
        selector: 'select-editor',
        template: `
    <select [ngClass]="inputClass"
            class="form-control"
            [(ngModel)]="cell.newValue"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            (click)="onClick.emit($event)"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">

        <option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                [selected]="option.value === cell.getValue()">{{ option.title }}
        </option>
    </select>
    `
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SelectEditorComponent);
export { SelectEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9zZWxlY3QtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFvQmpELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEsYUFBYTtJQUV0RDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztDQUNGLENBQUE7QUFMWSxxQkFBcUI7SUFsQmpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7S0FjUDtLQUNKLENBQUM7O0dBQ1cscUJBQXFCLENBS2pDO1NBTFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERlZmF1bHRFZGl0b3IgfSBmcm9tICcuL2RlZmF1bHQtZWRpdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWVkaXRvcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlbGVjdCBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXG4gICAgICAgICAgICBbbmFtZV09XCJjZWxsLmdldElkKClcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFjZWxsLmlzRWRpdGFibGUoKVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwib25FZGl0ZWQuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgIChrZXlkb3duLmVzYyk9XCJvblN0b3BFZGl0aW5nLmVtaXQoKVwiPlxuXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpPy5saXN0XCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cIm9wdGlvbi52YWx1ZSA9PT0gY2VsbC5nZXRWYWx1ZSgpXCI+e3sgb3B0aW9uLnRpdGxlIH19XG4gICAgICAgIDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEVkaXRvckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRFZGl0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cbiJdfQ==