import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function Counter(): JSX.Element {
  const tasks = useSelector((state: RootState) => state.tasks.tasks)
  const numbers = { 'conmpleted': 0, 'current': 0 }
  for (const task of tasks) {
    if (task.done) {
      numbers.conmpleted += 1
    } else {
      numbers.current += 1
    }
  }
  return (
    <Box sx={{ 'display': 'flex' }}>
      <Typography variant="body2" pr={1} color='#90CAF9' fontWeight='bold'>
        Current:
      </Typography>
      <Typography variant="body2" pr={2} color='#fffffff'>
        {numbers.current}
      </Typography>
      <Typography variant="body2" pr={1} color='#90CAF9' fontWeight='bold'>
        Completed:
      </Typography>
      <Typography variant="body2" pr={2} color='#fffffff'>
        {numbers.conmpleted}
      </Typography>
    </Box>
  )
}
