import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetListContainerComponent } from './containers/widget-list-container/widget-list-container.component';
import { WidgetCreateContainerComponent } from './containers/widget-create-container/widget-create-container.component';
import { WidgetUpdateContainerComponent } from './containers/widget-update-container/widget-update-container.component';
import { WidgetDetailComponent } from './components/widget-detail/widget-detail.component';

const routes: Routes = [
  { path: '', component: WidgetListContainerComponent },
  { path: 'widgets', component: WidgetListContainerComponent },
  { path: 'widget-create', component: WidgetCreateContainerComponent },
  { 
    path: 'widget-detail/:id', 
    component: WidgetDetailComponent
  },
  { 
    path: 'widget-update/:id', 
    component: WidgetUpdateContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetRoutingModule {}