import { useContext } from 'react'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'

import { useColorMode } from '../providers/theme'

function ThemeButton() {
  const theme = useTheme()
  const colorMode = useColorMode()

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color='inherit'
    >
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  )
}

export default ThemeButton
