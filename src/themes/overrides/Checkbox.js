import { getColors } from '@utils/StylesHelper'
import { CheckSquareFilledIcon, MinusSquareFilledIcon } from '@icons'
import { Box } from '@mui-components'

// ==============================|| RADIO - COLORS ||============================== //

function getColorStyle({ color, theme }) {
  const colors = getColors(theme, color)
  const { main, dark } = colors

  return {
    '&:hover': {
      '& .icon': {
        borderColor: main,
      },
    },
    '&.Mui-focusVisible': {
      outline: `2px solid ${dark}`,
      outlineOffset: -4,
    },
  }
}

// ==============================|| CHECKBOX - SIZE STYLE ||============================== //

function getSizeStyle(size) {
  switch (size) {
    case 'small':
      return { size: 16, fontSize: 1, position: 1 }
    case 'large':
      return { size: 24, fontSize: 1.6, position: 2 }
    case 'medium':
    default:
      return { size: 20, fontSize: 1.35, position: 2 }
  }
}

// ==============================|| CHECKBOX - STYLE ||============================== //

function checkboxStyle(size, theme) {
  const sizes = getSizeStyle(size)

  return {
    '& .icon': {
      width: sizes.size,
      height: sizes.size,
      backgroundColor: theme.palette.background.paper,
      '& .filled': {
        fontSize: `${sizes.fontSize}rem`,
        top: -sizes.position,
        left: -sizes.position,
      },
    },
  }
}

// ==============================|| OVERRIDES - CHECKBOX ||============================== //

export default function Checkbox(theme) {
  const { palette } = theme

  return {
    MuiCheckbox: {
      defaultProps: {
        className: 'size-small',
        icon: <Box className="icon" sx={{ width: 16, height: 16, border: '1px solid', borderColor: 'inherit', borderRadius: 0.25 }} />,
        checkedIcon: (
          <Box
            className="icon"
            sx={{
              width: 16,
              height: 16,
              border: '1px solid',
              borderColor: 'inherit',
              borderRadius: 0.25,
              position: 'relative',
            }}
          >
            <CheckSquareFilledIcon className="filled" style={{ position: 'absolute' }} />
          </Box>
        ),
        indeterminateIcon: (
          <Box
            className="icon"
            sx={{
              width: 16,
              height: 16,
              border: '1px solid',
              borderColor: 'inherit',
              borderRadius: 0.25,
              position: 'relative',
            }}
          >
            <MinusSquareFilledIcon className="filled" style={{ position: 'absolute' }} />
          </Box>
        ),
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          color: palette.secondary[300],
          '&.size-small': checkboxStyle('small', theme),
          '&.size-medium': checkboxStyle('medium', theme),
          '&.size-large': checkboxStyle('large', theme),
        },
        colorPrimary: getColorStyle({ color: 'primary', theme }),
        colorSecondary: getColorStyle({ color: 'secondary', theme }),
        colorSuccess: getColorStyle({ color: 'success', theme }),
        colorWarning: getColorStyle({ color: 'warning', theme }),
        colorInfo: getColorStyle({ color: 'info', theme }),
        colorError: getColorStyle({ color: 'error', theme }),
      },
    },
  }
}
