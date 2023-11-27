import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CdkDrag, CdkDragDrop, CdkDropList, DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoContainerComponent } from './todo-container.component';
import { CreateTaskComponent } from './create-task/create-task.component';

describe('TodoContainerComponent', () => {
  let component: TodoContainerComponent;
  let fixture: ComponentFixture<TodoContainerComponent>;
  let modalService: NgbModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoContainerComponent],
      imports: [DragDropModule, NgbModalModule],
      providers: [NgbModal]
    }).compileComponents();

    modalService = TestBed.inject(NgbModal);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open create task modal', () => {
    spyOn(modalService, 'open').and.callThrough();
    component.openCreateTodoModal();
    expect(modalService.open).toHaveBeenCalledWith(CreateTaskComponent);
  });
});
