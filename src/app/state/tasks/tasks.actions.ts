import {createAction, props } from '@ngrx/store';
import { Task } from "../../model/task.model";



export const SelectTask = createAction(
    '[Tasks] Selected',
    props<Task>()
);

export const LoadTask = createAction(
    '[Tasks] Load Data'
);

export const TasksLoaded = createAction(
    '[Tasks] Loaded Tasks',
    props<{tasks: Task[]}>()
);

export const AddTask = createAction(
    '[Tasks] Add Data',
    props<Task>()
);

export const TaskAdded = createAction(
    '[Tasks] Added Tasks',
    props<Task>()
);

export const DeleteTask = createAction(
    '[Tasks] Delete Data',
    props<Task>()
);

export const TaskDeleted = createAction(
    '[Tasks] Deleted Tasks',
    props<Task>()
);

export const UpdateTask = createAction(
    '[Tasks] Update Data',
    props<Task>()
);

export const TaskUpdated = createAction(
    '[Tasks]  Updated Tasks',
    props<Task>()
);

