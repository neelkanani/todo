import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop'; 

import { TodoContainerRoutingModule } from './todo-container-routing.module';
import { TodoContainerComponent } from './todo-container.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskContainerComponent } from './task-container/task-container.component';


@NgModule({
  declarations: [
    TodoContainerComponent,
    CreateTaskComponent,
    TaskContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoContainerRoutingModule,
    DragDropModule,
    NgbModalModule
  ]
})
export class TodoContainerModule { }
