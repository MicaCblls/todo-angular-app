/* import { Injectable } from '@angular/core';
import { TASKS } from '../components/tasks/mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks() {
    return TASKS;
  }
} */
import { Injectable } from '@angular/core';
import { Task } from '../components/tasks/interface/Task.interface';
import supabase from 'src/supabase.config';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  async getTasks(): Promise<Task[]> {
    const { data, error } = await supabase.from('tasks').select('*');
    if (error) throw error;
    return data || [];
  }

  async addTask(task: Task): Promise<Task[]> {
    const { data, error } = await supabase
      .from('tasks')
      .insert([task])
      .select();
    if (error) throw error;
    return data || [];
  }

  async updateTask(task: Task): Promise<Task[]> {
    const { data, error } = await supabase
      .from('tasks')
      .update({ reminder: !task.reminder })
      .eq('id', task.id)
      .select();
    if (error) throw error;
    return data || [];
  }

  async deleteTask(id?: string): Promise<Task[]> {
    const { data, error } = await supabase.from('tasks').delete().eq('id', id);
    if (error) throw error;
    return data || [];
  }
}
