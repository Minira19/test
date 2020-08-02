import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import {createMuiTheme} from '@material-ui/core/styles'

const breakpoints = createBreakpoints({})
// Create a theme instance.
const Magenta = '#E8216A'
const MagentaHover = '#e34f86'

const Grey = '#6E6E6E'
const White = '#fff'
const Blue = '#21252D'

const theme = createMuiTheme({
  palette: {
    common: {
      magenta: Magenta,
      magentaHover: MagentaHover,
      white: White,
      blue: Blue,
      grey: Grey,
      Cards: {
        border: '1px solid red',
        width: '100%'
      },
      Card: {
        width: '100%',
        border: '1px solid #EBEBEB'
      }
    },
    primary: {
      main: White
    }
    // secondary: {
    //   main: acrOrange
    // },
  },
  typography: {
    tab: {
      
      textTransform: 'none',
      fontWeight: '400',
      fontSize: '14px',
      color: Blue
    },
    estimate: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: 600,
      textTransform: 'none',
      lineHeight: '16px',
      color: White
    },
    footerHeadings: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: 600,
      textTransform: 'none',
      lineHeight: '24px',
      color: White,
      letterSpacing: '0.1px'
    },
    footerLinks: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: 500,
      textTransform: 'none',
      lineHeight: '20px',
      color: White,
      letterSpacing: '0.25px'
    },
    h1: {
      fontFamily: 'Inter',
      fontWeight: '700',
      fontSize: '42px',
      color: '#000000',
      [breakpoints.down('md')]: {
        fontSize: '36px'
      },
      [breakpoints.down('sm')]: {
        fontSize: '30px'
      }
    },
    h5: {
      fontFamily: 'Inter',
      fontWeight: '700',
      letterSpacing: '0.1px',
      color: White
    },

    h6: {
      fontFamily: 'Inter',
      fontWeight: '700',
      letterSpacing: '0.1px',
      color: White,
      lineHeight: '24px'
    },
    subtitle1: {
      color: White,
      fontWeight: '400',
      lineHeight: '16px'
    },
    subtitle2: {
      color: Blue,
      fontSize: '13px',
      fontWeight: '600'
    },
    body1: {
      fontFamily: 'Inter',
      color: White,
      fontSize: '15px',
      fontWeight: '600',
      lineHeight: '20px',
      letterSpacing: '0.1px'
    },
    caption: {
      fontFamily: 'Inter',
      color: White,
      fontWeight: '400',
      lineHeight: '16px'
    }
  },
  overrides: {
    MuiContainer: {
      root: {
        paddingLeft: '137px !important',
        paddingRight: '156px !important',
        [breakpoints.down('md')]: {
          paddingLeft: '117px !important',
          paddingRight: '136px !important'
        },
        [breakpoints.down('sm')]: {
          paddingLeft: '60px !important',
          background: 'Red',
          paddingRight: '79px !important'
        }
      }
    },
    MuiTab: {
      root: {
        padding: 0,
        minHeight: 'auto !important',
        minWidth: 'auto !important'
      },
      textColorInherit: {
        opacity: 1
      }
    },
    MuiTabs: {
      root: {
        alignItems: 'flex-end',
        maxWidth: `calc(100% - 240px)`
      },
      fixed: {
        paddingBottom: '5px'
      }
    },
    PrivateTabIndicator: {
      root: {
        height: 0
      }
    },
    MuiLink: {
      underlineHover: {
        '&:hover': {
          textDecoration: 'none'
        }
      }
    },
    MuiListItem: {
      root: {
        '&.Mui-selected': {
          background: Magenta,
          color: White,
          opacity: 1,
          '&:hover': {
            background: Magenta,
            color: White,
            cursor: 'default'
          }
        }
      }
    }
  }
})

export default theme
