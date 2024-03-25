export default function Snackbar(theme) {
  return {
    MuiSnackbar: {
      styleOverrides: {
        anchorOriginTopCenter: {
          top: theme.spacing(4),
          right: theme.spacing(4),
          left: theme.spacing(4),
        },
        anchorOriginBottomCenter: {
          bottom: theme.spacing(4),
          right: theme.spacing(4),
          left: theme.spacing(4),
        },
        anchorOriginTopRight: {
          top: theme.spacing(4),
          right: theme.spacing(4),
          left: theme.spacing(4),
        },
        anchorOriginBottomRight: {
          bottom: theme.spacing(4),
          right: theme.spacing(4),
          left: theme.spacing(4),
        },
        anchorOriginTopLeft: {
          top: theme.spacing(4),
          right: theme.spacing(4),
          left: theme.spacing(4),
        },
        anchorOriginBottomLeft: {
          bottom: theme.spacing(4),
          right: theme.spacing(4),
          left: theme.spacing(4),
        },
      },
    },
  }
}
