import PropTypes from 'prop-types'

// ==============================|| PRESET THEME - DEFAULT ||============================== //

const Default = (colors, mode) => {
  const contrastText = '#fff'

  let primaryColors = ['#ecf8fe', '#d0ecfb', '#a0daf8', '#71c7f4', '#53b3e4', '#008ecf', '#006c9e', '#00496b', '#002638']
  let errorColors = ['#ffdbcc', '#ffb798', '#f95301', '#ac3700', '#7a2700']
  let warningColors = ['#fff7cc', '#ffd702', '#fab001', '#a9460c', '#773108']
  let infoColors = ['#cfecfc', '#acdffa', '#5dbbe7', '#025082', '#013150']
  let successColors = ['#eff8d3', '#cfdf32', '#a0ca23', '#538329', '#2d4918']

  return {
    primary: {
      100: primaryColors[0],
      200: primaryColors[1],
      300: primaryColors[2],
      400: primaryColors[3],
      500: primaryColors[4],
      600: primaryColors[5],
      700: primaryColors[6],
      800: primaryColors[7],
      900: primaryColors[8],
      lighter: primaryColors[0],
      light: primaryColors[2],
      main: primaryColors[4],
      dark: primaryColors[6],
      darker: primaryColors[8],
      contrastText,
    },
    secondary: {
      100: '#f4f6f8',
      200: '#f0f2f2',
      300: '#dcdedf',
      400: '#c5c7c6',
      500: '#636363',
      600: '#636363',
      700: '#2a2a2a',
      800: '#121212',
      900: '#000000',
      A100: '#feffff',
      A200: '#4c4c4c',
      A300: '#212121',
      lighter: '#f6f6f6',
      light: '#f6f6f6',
      main: '#979797',
      dark: '#2a2a2a',
      darker: '#010103',
      contrastText,
    },
    error: {
      lighter: errorColors[0],
      light: errorColors[1],
      main: errorColors[2],
      dark: errorColors[3],
      darker: errorColors[4],
      contrastText,
    },
    warning: {
      lighter: warningColors[0],
      light: warningColors[1],
      main: warningColors[2],
      dark: warningColors[3],
      darker: warningColors[4],
      contrastText,
    },
    info: {
      lighter: infoColors[0],
      light: infoColors[1],
      main: infoColors[2],
      dark: infoColors[3],
      darker: infoColors[4],
      contrastText,
    },
    success: {
      lighter: successColors[0],
      light: successColors[1],
      main: successColors[2],
      dark: successColors[3],
      darker: successColors[4],
      contrastText,
    },
    grey: {
      0: '#ffffff',
      50: '#fcfcfc',
      100: '#fafafa',
      200: '#f5f5f5',
      300: '#f0f0f0',
      400: '#d9d9d9',
      500: '#bfbfbf',
      600: '#8c8c8c',
      700: '#595959',
      800: '#434343',
      900: '#000000',
      A50: '#fbfbfb',
      A100: '#fbfbfb',
      A200: '#c8c6c6',
      A400: '#4c4c4c',
      A700: '#212121',
      A800: '#eaedf0',
    },
    brand: {
      blue: '#53b3e4',
      green: '#8ac541',
      purple: '#a576a7',
      yellow: '#fdd106',
      gray: '#707272',
    },
    tag: {
      secondary: {
        light: '#f5f5f6',
        dark: '#111827',
      },
      success: {
        light: '#cefcdd',
        dark: '#07a287',
      },
      warning: {
        light: '#ffefd8',
        dark: '#db8d17',
      },
      error: {
        light: '#ffeded',
        dark: '#eb5757',
      },
      errorFilled: {
        light: '#eb5757',
        dark: '#ffeded',
      },
      info: {
        light: '#dfecff',
        dark: '#4f71e7',
      },
      infoFilled: {
        light: '#6e8eac',
        dark: '#ffffff',
      },
    },
  }
}

Default.propTypes = {
  colors: PropTypes.object,
}

export default Default
