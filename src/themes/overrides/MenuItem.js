export default function MenuItem(theme) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary[100],
            '&:hover': {
              backgroundColor: theme.palette.primary[200],
            },
          },
        },
      },
    },
  }
}
