import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';
import { TaskService } from '../services/task/task.service';
import { Store } from '@ngrx/store'
import { TasksState } from '../state/tasks/tasks.reducer';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor(private taskService: TaskService, private store: Store<TasksState>) { }

  emptyTask: Task = {
    id: null,
    title: ''
  }

  tasks ;
  selectedTask: Task ;
  title: string;


  ngOnInit(): void {

    this.selectedTask = {
      id: null,
      title: null
    }

    // this.tasks = [
    //   {
    //     id : '1',
    //     title: 'workout'
    //   },
    //   {
    //     id : '2',
    //     title: 'practice piano'
    //   },
    //   {
    //     id : '3',
    //     title: 'pay bill'
    //   },
    //   {
    //     id : '4',
    //     title: 'call Ryan'
    //   },
    // ]
    this.taskService.getAllData().subscribe(res => {
      this.tasks = res;
    });
  }


  saveTask(form){
    console.log(form);
    console.log("selected task",this.selectedTask)
    if(this.selectedTask.id){
      this.taskService.updateData(this.selectedTask);
    }
    else{
      
      this.taskService.addData(this.selectedTask.title);
    }
    form.reset();
  }

  onSelect(task){
    this.selectedTask = task;
  }

  delete(task){
    this.taskService.deleteData(task.id);
  }

  onCancel(){
    this.selectedTask = this.emptyTask;
  }

}
