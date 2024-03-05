import { Box } from '@mui/material'
import Filter from './filter'
import Counter from './couter'

type ToolBarProps = {
  setFilter: (filter: string)=>void
}

export default function ToolBar({ setFilter }: ToolBarProps): JSX.Element {
  return (
    <Box sx={{
      'bgcolor': 'background.paper',
      'mb': 2,
      'borderRadius': 1,
      'px': 4,
      'py': 1,
      'display': 'flex',
      'justifyContent': 'space-between',
    }}>
      <Filter setFilter={setFilter} />
      <Counter />
    </Box>
  )
}
