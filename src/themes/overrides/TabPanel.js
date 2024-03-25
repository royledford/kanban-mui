// ==============================|| OVERRIDES - TAB PANEL ||============================== //

export default function TabPanel(theme) {
  return {
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: theme.spacing(2),
        },
      },
    },
  }
}
