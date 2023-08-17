import { Component, Input, OnInit } from '@angular/core';
import { Task } from './interface/Task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  @Input() showForm!: boolean;
  tasks: Task[] = [];
  /*  newTask: Task = { title: '', day: '', reminder: false }; */

  constructor(private taskSvc: TaskService) {}
  async ngOnInit(): Promise<void> {
    let res = await this.taskSvc.getTasks();
    this.tasks = res;
  }
  async addTask(task: Task): Promise<void> {
    let newTask = await this.taskSvc.addTask(task);

    this.tasks = [...this.tasks, ...newTask];
  }
  async updateTask(task: Task): Promise<void> {
    let updatedTask = await this.taskSvc.updateTask(task);

    this.tasks = [
      ...this.tasks.filter((task) => updatedTask[0].id !== task.id),
      ...updatedTask,
    ];
  }
  async deleteTask(task: Task): Promise<void> {
    let taskId = task.id;

    await this.taskSvc.deleteTask(taskId);
    this.tasks = this.tasks.filter((task) => taskId !== task.id);
  }
}
