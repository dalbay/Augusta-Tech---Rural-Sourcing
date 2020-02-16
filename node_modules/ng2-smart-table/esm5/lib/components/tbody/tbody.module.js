import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTbodyComponent } from './tbody.component';
import { TbodyCreateCancelComponent } from './cells/create-cancel.component';
import { TbodyEditDeleteComponent } from './cells/edit-delete.component';
import { TbodyCustomComponent } from './cells/custom.component';
var TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    TbodyCustomComponent,
    Ng2SmartTableTbodyComponent
];
var TBodyModule = /** @class */ (function () {
    function TBodyModule() {
    }
    TBodyModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                CellModule,
            ],
            declarations: tslib_1.__spread(TBODY_COMPONENTS),
            exports: tslib_1.__spread(TBODY_COMPONENTS),
        })
    ], TBodyModule);
    return TBodyModule;
}());
export { TBodyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWhFLElBQU0sZ0JBQWdCLEdBQUc7SUFDdkIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsMkJBQTJCO0NBQzVCLENBQUM7QUFlRjtJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBYnZCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsVUFBVTthQUNYO1lBQ0QsWUFBWSxtQkFDUCxnQkFBZ0IsQ0FDcEI7WUFDRCxPQUFPLG1CQUNGLGdCQUFnQixDQUNwQjtTQUNGLENBQUM7T0FDVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUFBLEFBQTVCLElBQTRCO1NBQWYsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENlbGxNb2R1bGUgfSBmcm9tICcuLi9jZWxsL2NlbGwubW9kdWxlJztcblxuaW1wb3J0IHsgTmcyU21hcnRUYWJsZVRib2R5Q29tcG9uZW50IH0gZnJvbSAnLi90Ym9keS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGJvZHlDcmVhdGVDYW5jZWxDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2NyZWF0ZS1jYW5jZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRib2R5RWRpdERlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvZWRpdC1kZWxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRib2R5Q3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9jdXN0b20uY29tcG9uZW50JztcblxuY29uc3QgVEJPRFlfQ09NUE9ORU5UUyA9IFtcbiAgVGJvZHlDcmVhdGVDYW5jZWxDb21wb25lbnQsXG4gIFRib2R5RWRpdERlbGV0ZUNvbXBvbmVudCxcbiAgVGJvZHlDdXN0b21Db21wb25lbnQsXG4gIE5nMlNtYXJ0VGFibGVUYm9keUNvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDZWxsTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5UQk9EWV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uVEJPRFlfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVEJvZHlNb2R1bGUgeyB9XG4iXX0=