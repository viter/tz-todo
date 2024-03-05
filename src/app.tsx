import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TodoList from './components/todo-list'
import TodoForm from './components/todo-form'
import ToolBar from './components/tool-bar'
import { useState } from 'react'

export default function App(): JSX.Element {
  const [filter, setFilter] = useState('all')
  return (
    <>
      <Container maxWidth="sm">
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          sx={{ 'paddingTop': '4em' }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            fontWeight="bold"
            sx={{
              'background': '-webkit-linear-gradient(#1A54A8, #1A9FA8)',
              'WebkitBackgroundClip': 'text',
              'WebkitTextFillColor': 'transparent',
            }}
          >
            TODO App
          </Typography>
          <TodoForm />
          <Box>
            <ToolBar setFilter={setFilter}/>
            <TodoList filter={filter}/>
          </Box>
        </Box>
      </Container>
    </>
  )
}
