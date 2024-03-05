import List from '@mui/material/List'
import { useSelector } from 'react-redux'
import TodoItem from './todo-item'
import { Task } from '../lib/types'
import { RootState } from '../store'

export default function TodoList({ filter }: { filter: string }):
JSX.Element | null | undefined {
  let tasks = useSelector((state: RootState) => state.tasks.tasks)

  if (filter === 'current') {
    tasks = tasks.filter((task) => !task.done)
  } else if (filter === 'completed') {
    tasks = tasks.filter((task) => task.done)
  }

  return tasks.length > 0 ? <List
    sx={{
      'width': '100%',
      'bgcolor': 'background.paper',
      'borderRadius': '5px',
      'padding': '1rem',
    }}
  >
    {tasks.map((todo: Task) => {
      return <TodoItem todo={todo} key={todo.id} />
    })}
  </List> : undefined
}
