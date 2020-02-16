import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CompleterService } from 'ng2-completer';
import { DefaultEditor } from './default-editor';
let CompleterEditorComponent = class CompleterEditorComponent extends DefaultEditor {
    constructor(completerService) {
        super();
        this.completerService = completerService;
        this.completerStr = '';
    }
    ngOnInit() {
        if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
            const config = this.cell.getColumn().getConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
        }
    }
    onEditedCompleter(event) {
        this.cell.newValue = event.title;
        return false;
    }
};
CompleterEditorComponent = tslib_1.__decorate([
    Component({
        selector: 'completer-editor',
        template: `
    <ng2-completer [(ngModel)]="completerStr"
                   [dataService]="cell.getColumn().getConfig().completer.dataService"
                   [minSearchLength]="cell.getColumn().getConfig().completer.minSearchLength || 0"
                   [pause]="cell.getColumn().getConfig().completer.pause || 0"
                   [placeholder]="cell.getColumn().getConfig().completer.placeholder || 'Start typing...'"
                   (selected)="onEditedCompleter($event)">
    </ng2-completer>
    `
    }),
    tslib_1.__metadata("design:paramtypes", [CompleterService])
], CompleterEditorComponent);
export { CompleterEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9jb21wbGV0ZXItZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBY2pELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXlCLFNBQVEsYUFBYTtJQUl6RCxZQUFvQixnQkFBa0M7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFEVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRnRELGlCQUFZLEdBQVcsRUFBRSxDQUFDO0lBSTFCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO1lBQ3JGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQzNELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RHLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBb0I7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNqQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRixDQUFBO0FBcEJZLHdCQUF3QjtJQVpwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7S0FRUDtLQUNKLENBQUM7NkNBS3NDLGdCQUFnQjtHQUozQyx3QkFBd0IsQ0FvQnBDO1NBcEJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV0ZXJTZXJ2aWNlIH0gZnJvbSAnbmcyLWNvbXBsZXRlcic7XG5cbmltcG9ydCB7IERlZmF1bHRFZGl0b3IgfSBmcm9tICcuL2RlZmF1bHQtZWRpdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tcGxldGVyLWVkaXRvcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nMi1jb21wbGV0ZXIgWyhuZ01vZGVsKV09XCJjb21wbGV0ZXJTdHJcIlxuICAgICAgICAgICAgICAgICAgIFtkYXRhU2VydmljZV09XCJjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmNvbXBsZXRlci5kYXRhU2VydmljZVwiXG4gICAgICAgICAgICAgICAgICAgW21pblNlYXJjaExlbmd0aF09XCJjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmNvbXBsZXRlci5taW5TZWFyY2hMZW5ndGggfHwgMFwiXG4gICAgICAgICAgICAgICAgICAgW3BhdXNlXT1cImNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkuY29tcGxldGVyLnBhdXNlIHx8IDBcIlxuICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmNvbXBsZXRlci5wbGFjZWhvbGRlciB8fCAnU3RhcnQgdHlwaW5nLi4uJ1wiXG4gICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkKT1cIm9uRWRpdGVkQ29tcGxldGVyKCRldmVudClcIj5cbiAgICA8L25nMi1jb21wbGV0ZXI+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcGxldGVyRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEVkaXRvciBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29tcGxldGVyU3RyOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBsZXRlclNlcnZpY2U6IENvbXBsZXRlclNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5lZGl0b3IgJiYgdGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvci50eXBlID09PSAnY29tcGxldGVyJykge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmNvbXBsZXRlcjtcbiAgICAgIGNvbmZpZy5kYXRhU2VydmljZSA9IHRoaXMuY29tcGxldGVyU2VydmljZS5sb2NhbChjb25maWcuZGF0YSwgY29uZmlnLnNlYXJjaEZpZWxkcywgY29uZmlnLnRpdGxlRmllbGQpO1xuICAgICAgY29uZmlnLmRhdGFTZXJ2aWNlLmRlc2NyaXB0aW9uRmllbGQoY29uZmlnLmRlc2NyaXB0aW9uRmllbGQpO1xuICAgIH1cbiAgfVxuXG4gIG9uRWRpdGVkQ29tcGxldGVyKGV2ZW50OiB7IHRpdGxlOiAnJyB9KTogYm9vbGVhbiB7XG4gICAgdGhpcy5jZWxsLm5ld1ZhbHVlID0gZXZlbnQudGl0bGU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=