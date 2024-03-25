import { createTheme } from '@mui/material/styles'

import Default from './theme/default'

const Palette = (mode) => {
  const paletteColor = Default()

  return createTheme({
    palette: {
      mode,
      common: {
        black: '#000',
        white: '#fff',
      },
      ...paletteColor,
      text: {
        primary: '#282b2a',
        secondary: '#949696',
        disabled: '#c5c7c5',
        mark: '#000000',
        warning: '#f7a600',
        danger: '#f74a00',
        success: '#95c11f',
        contrast: '#ffffff',
        inputLabel: '#434343',
      },
      action: {
        disabled: paletteColor.grey[400],
      },
      divider: paletteColor.grey[400],
      background: {
        paper: paletteColor.grey[0],
        default: '#fafafb',
        overlay: 'rgba(0, 0, 0, 0.6)',
        backdrop: 'rgba(0, 0, 0, 0.7)',
      },
    },
  })
}

export default Palette
