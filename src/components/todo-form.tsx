import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../slices/task-slice'
import { v4 as uuidv4 } from 'uuid'
import { Typography } from '@mui/material'

export default function TodoForm(): JSX.Element {
  const recordLength = 10
  const [task, setTask] = useState('')
  const [error, setError] = useState(false)
  const dispatch = useDispatch()

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      task: { value: string }
    }

    if (target.task.value.length > recordLength) {
      setError(true)
      return
    }

    if (target.task.value) {
      dispatch(
        addTask({
          'id': uuidv4(),
          'text': target.task.value,
          'done': false,
        }),
      )
    }
    setError(false)
    setTask('')
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setTask(event.target.value)
  }
  return (
    <Box
      component="form"
      margin="0 auto"
      display="block"
      sx={{
        '& > :not(style)': { 'm': 1, 'width': '25ch' },
        'mb': 4,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="task"
        name="task"
        label="New Todo"
        variant="standard"
        value={task}
        onChange={handleChange}
      />
      <Button
        type="submit"
        id="submit"
        variant="outlined"
        size="small"
        sx={{ 'verticalAlign': 'bottom' }}
      >
        Add
      </Button>
      {error ? <Typography color='#E05F52' variant='body2'>
          The record should be no longer than {recordLength} characters
      </Typography> : undefined}
    </Box>
  )
}
