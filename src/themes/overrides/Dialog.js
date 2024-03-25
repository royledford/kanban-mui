export default function Dialog(theme) {
  return {
    MuiDialog: {
      styleOverrides: {
        root: {
          '& .MuiBackdrop-root': {
            backgroundColor: theme.palette.background.backdrop,
          },
          '& .MuiDialogContent-root': {
            padding: 24,
          },
          '& .MuiDialogActions-root.MuiDialogActions-spacing': {
            padding: 16,
          },
        },
      },
    },
  }
}
