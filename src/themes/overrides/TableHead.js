// ==============================|| OVERRIDES - TABLE HEAD ||============================== //

export default function TableHead(theme) {
  return {
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: `2px solid ${theme.palette.divider}`,
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
  }
}
