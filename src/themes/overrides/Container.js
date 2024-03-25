export default function Container(theme) {
  return {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        root: {
          flexGrow: 1,
          padding: 0,
          [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3),
          },
        },
      },
    },
  }
}
