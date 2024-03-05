import { Box, Chip } from '@mui/material'
import { useState } from 'react'

type FilterProps = {
  setFilter: (filter: string)=>void
}

export default function Filter({ setFilter }: FilterProps): JSX.Element {
  const [all, setAll] = useState(true)
  const [current, setCurrent] = useState(false)
  const [completed, setCompleted] = useState(false)

  return (
    <Box>
      <Chip
        label="all"
        size="small"
        variant={all ? 'filled' : 'outlined'}
        clickable={!all}
        sx={{ 'mr': 1 }}
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
        clickable={!current}
        sx={{ 'mr': 1 }}
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
        clickable={!completed}
        sx={{ 'mr': 1 }}
        onClick={() => {
          setAll(false)
          setCurrent(false)
          setCompleted(true)
          setFilter('completed')
        }}
      />
    </Box>
  )
}
