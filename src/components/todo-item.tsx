import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteOutlineOutlinedIcon
  from '@mui/icons-material/DeleteOutlineOutlined'
import { Task } from '../lib/types'
import { useDispatch } from 'react-redux'
import { deleteTask, updateTask } from '../slices/task-slice'

export default function TodoItem({ todo }: { todo: Task }): JSX.Element {
  const dispatch = useDispatch()

  function handleUpdate(task: Task): void {
    if (task.id) {
      dispatch(updateTask(task.id))
    }
  }

  const labelId = `checkbox-list-label-${todo.id}`

  function handleDelete(task: Task): void {
    if (task.id) {
      dispatch(deleteTask(task.id))
    }
  }

  const textDecoration = todo.done ? 'line-through' : 'none'

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => handleDelete(todo)}
        >
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        sx={{ 'borderRadius': '3px' }}
        role={undefined}
        onClick={() => handleUpdate(todo)}
        dense
      >
        <ListItemIcon>
          <Checkbox
            name="done"
            edge="start"
            checked={todo.done}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText
          id={labelId}
          primary={todo.text}
          sx={{ textDecoration }}
        />
      </ListItemButton>
    </ListItem>
  )
}
