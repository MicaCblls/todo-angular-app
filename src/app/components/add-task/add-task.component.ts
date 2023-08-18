import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../tasks/interface/Task.interface';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddEmitter: EventEmitter<Task> = new EventEmitter();
  newTask: Task = { title: '', day: '', reminder: false };
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiSvc: UiService) {
    this.subscription = this.uiSvc
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  onAdd() {
    this.onAddEmitter.emit(this.newTask);
    this.newTask = { title: '', day: '', reminder: false };
  }
}
