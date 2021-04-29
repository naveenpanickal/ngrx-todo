import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Task } from 'src/app/model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private firestore: AngularFirestore) { }

  addData(title){
    this.firestore.collection("tasks").add({}).then( (docref) => {
      this.firestore.collection("tasks").doc(docref.id).set({
        id: docref.id,
        title: title
      })
    })
  }

  updateData(selectedTask){
    this.firestore.collection("tasks").doc(selectedTask.id).set(selectedTask);
  }

  deleteData(id){
    this.firestore.collection("tasks").doc(id).delete();
  }

  getAllData(){
   return this.firestore.collection("tasks").valueChanges();
  }
}
