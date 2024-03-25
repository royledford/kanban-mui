// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function ButtonBase(theme) {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&.MuiTableSortLabel-root.Mui-active .MuiTableSortLabel-icon': {
            color: theme.palette.primary.main,
          },
        },
      },
    },
  }
}
