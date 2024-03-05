import List from '@mui/material/List'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { Task } from '../lib/types'
import { RootState } from '../store'

export default function TodoList({filter}: {filter: string}): JSX.Element | null | undefined {
  let items = useSelector((state: RootState) => state.tasks.tasks)

  if(filter === 'current') {
    items = items.filter(item => !item.done)
  } else if(filter === 'completed') {
    items = items.filter(item => item.done)
  }

  return items.length ? 
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        borderRadius: '5px',
        padding: '1rem',
      }}
    >
      {items.map((item: Task) => {
        return <TodoItem item={item} key={item.id} />
      })}
    </List>
    : null
}
