// ==============================|| OVERRIDES - AUTOCOMPLETE ||============================== //

export default function Autocomplete() {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            padding: '0px 8px',
          },
        },
        popupIndicator: {
          width: 'auto',
          height: 'auto',
        },
        clearIndicator: {
          width: 'auto',
          height: 'auto',
        },
      },
    },
  }
}
