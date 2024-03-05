import { Box, Chip, Typography } from "@mui/material"
import { useState } from "react"
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function ToolBar({setFilter}: {setFilter: (filter: string)=>void}): JSX.Element {
  const [all, setAll] = useState(true)
  const [current, setCurrent] = useState(false)
  const [completed, setCompleted] = useState(false)

  const items = useSelector((state: RootState) => state.tasks.tasks)

  const numbers = { conmpleted: 0, current: 0 }
  items.forEach(item => {
    if (item.done) {
      numbers.conmpleted++
    } else {
      numbers.current++
    }
  })

  return (
    <Box sx={{
      bgcolor: 'background.paper',
      mb: 2,
      borderRadius: 1,
      px: 4,
      py: 1,
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <Box>
        <Chip 
          label="all" 
          size="small"
          variant={all ? 'filled' : 'outlined'} 
          clickable={all ? false : true}
          sx={{mr:1}}
          onClick={() => {
            setAll(true)
            setCurrent(false)
            setCompleted(false)
            setFilter('all')
          }}
        />
        <Chip 
          label="current"  
          size="small" 
          variant={current ? 'filled' : 'outlined'} 
          clickable={current ? false : true}
          sx={{mr:1}}
          onClick={() => {
            setAll(false)
            setCurrent(true)
            setCompleted(false)
            setFilter('current')
          }}
        />
        <Chip 
          label="completed"  
          size="small" 
          variant={completed ? 'filled' : 'outlined'} 
          clickable={completed ? false : true}
          sx={{mr:1}}
          onClick={() => {
            setAll(false)
            setCurrent(false)
            setCompleted(true)
            setFilter('completed')
          }}
        />
      </Box>
      <Box sx={{display: 'flex'}}>
        <Typography variant="body2" pr={1} color='#90CAF9' fontWeight='bold'>Current: </Typography>
        <Typography variant="body2" pr={2} color='#fffffff'>{numbers.current}</Typography>
        <Typography variant="body2" pr={1} color='#90CAF9' fontWeight='bold'>Completed: </Typography>
        <Typography variant="body2" pr={2} color='#fffffff'>{numbers.conmpleted}</Typography>
        
      </Box>
    </Box>
  )
}