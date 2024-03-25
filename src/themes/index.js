// import { useMemo } from 'react'
// import { CssBaseline } from '@mui/material'
// // import {
// //   createTheme,
// //   ThemeProvider as ThemeProviderMUI,
// // } from '@mui/material/styles'
// import {
//   useTheme,
//   ThemeProvider as ThemeProviderMUI,
//   createTheme,
// } from '@mui/material/styles'
// import PropTypes from 'prop-types'
// // import componentsOverride from './overrides'
// // import Palette from './palette'
// // import Typography from './typography'
// export default function ThemeProvider({ children }) {
//   const theme = useMemo(() => Palette('light'), [])
//   const themeOptions = useMemo(
//     () => ({
//       // palette: theme.palette,
//       typography: Typography,
//     }),
//     [theme],
//   )
//   const themeOverride = createTheme(themeOptions)
//   // themeOverride.components = componentsOverride(themeOverride)
//   return (
//     <ThemeProviderMUI theme={themeOverride}>
//       <CssBaseline />
//       {children}
//     </ThemeProviderMUI>
//   )
// }
import { createContext, useState, useMemo, useContext } from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles'

const ColorModeContext = createContext({ toggleColorMode })

export default function toggleColorMode({ children }) {
  const [mode, setMode] = useState('dark')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export function useColorMode() {
  return useContext(ColorModeContext)
}
