import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Task } from 'src/app/model/task.model';
import * as TaskActions from './tasks.actions'



// 01 Shape of state

export interface TasksState extends EntityState<Task>{
    selectedTaskId: string | null;
  }
  
// 02 Create entitiy adapter
export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

// 03 Define the initial state

export const initialState: TasksState = adapter.getInitialState(
  {
    selectedTaskId: null
  }
);

//04 Reducer
const tasksReducers = createReducer(
    initialState,
    on(TaskActions.SelectTask, state => {}),
    on(TaskActions.TasksLoaded, (state, tasks )=> adapter.addMany(tasks, state)),
    on(TaskActions.TaskAdded, (state, task => ()),
    on(TaskActions.TaskUpdated, (state, task => ()),
   
  );