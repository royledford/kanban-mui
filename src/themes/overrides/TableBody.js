// ==============================|| OVERRIDES - TABLE ROW ||============================== //

export default function TableBody(theme) {
  return {
    MuiTableBody: {
      styleOverrides: {
        root: {
          '&.striped .MuiTableRow-root': {
            '&:nth-of-type(even)': {
              backgroundColor: theme.palette.grey[50],
            },
          },
        },
      },
    },
  }
}
