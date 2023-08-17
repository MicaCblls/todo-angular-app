import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../tasks/interface/Task.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Input() showForm!: boolean;
  @Output() onAddEmitter: EventEmitter<Task> = new EventEmitter();
  newTask: Task = { title: '', day: '', reminder: false };

  constructor() {}
  onAdd() {
    this.onAddEmitter.emit(this.newTask);
  }
}
