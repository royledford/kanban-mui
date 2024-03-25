// ==============================|| OVERRIDES - TABLE CELL ||============================== //

export default function TableCell(theme) {
  const commonCell = {
    '&:not(:last-of-type)': {
      position: 'relative',
      '&:after': {
        position: 'absolute',
        content: '""',
        backgroundColor: theme.palette.divider,
        width: 1,
        height: 'calc(100% - 20px)',
        right: 0,
        top: 10,
      },
    },
  }

  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          padding: 12,
          borderColor: theme.palette.divider,
        },
        sizeSmall: {
          padding: 8,
        },
        head: {
          fontSize: '0.875rem',
          fontWeight: theme.typography.fontWeightBold,
          letterSpacing: '1px', // Add extra room as the smaller font size makes it hard to read
          ...commonCell,
        },
        footer: {
          fontSize: '0.75rem',
          ...commonCell,
        },
      },
    },
  }
}
