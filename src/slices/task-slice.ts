import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Task } from '../lib/types'

type TasksState = {
  tasks: Task[]
}

const initialState: TasksState = {
  'tasks': [],
}

export const tasksSlice = createSlice({
  'name': 'tasks',
  initialState,
  'reducers': {
    'addTask': (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    'updateTask': (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.done = !task.done
        }
        return task
      })
    },
    'deleteTask': (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
  },
})

export const { addTask, updateTask, deleteTask } = tasksSlice.actions
export default tasksSlice.reducer
