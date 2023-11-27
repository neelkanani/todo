import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateTaskComponent } from './create-task/create-task.component';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit{
  
  metaData = {
    pendingItems : ['Todo Item 1', 'Todo Item 2'],
    inProgressItems : ['Todo Item 3'],
    doneItems : ['Todo Item 4']
  }

  ngOnInit(): void {
  }

  constructor(private modalService: NgbModal) {}

  openCreateTodoModal() {
    const modalRef = this.modalService.open(CreateTaskComponent);
    modalRef.result.then((newTodo: string) => {
      if (newTodo) {
        this.metaData.pendingItems.push(newTodo);
      }
    }, () => {
    });
  }


  onDrop(column: string, event: CdkDragDrop<string[]>) {
    if(event.previousContainer.id === event.container.id)
      this.sortItems(event);
    else
      this.dragDropBetweenStatusColumns(column, event);
  }

  dragDropBetweenStatusColumns(column, event: CdkDragDrop<string[]>) {
    let previousContainerName = event.previousContainer.id;
    let previousContainer = this.metaData[previousContainerName]
    let item = event.item.element.nativeElement.innerText;
    let index = previousContainer.findIndex((el: string) => {return el === item});
    if(event.container.data)
      event.container.data.push(previousContainer[index]);
    else  
      this.metaData[column].push(previousContainer[index])

    previousContainer.splice(index, 1);
  }
  
  sortItems(event: CdkDragDrop<string[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
}
