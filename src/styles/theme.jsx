import { createTheme } from "@nextui-org/react"

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: '#404eed',
      primary100:'#8b96ff',
      primary200:'#5e6cff',
      primary300:'#404eed',
      primary400:'#1a28bb',
      primary500:'#000133',

      secondary: '#3ba55d',
      secondary100:'#93e6ae',
      secondary200:'#62ca84',
      secondary300:'#3ba55d',
      secondary400:'#1e8640',
      secondary500:'#012c0f',

      tertiary: '#314044',
      tertiary100:'#d4dadc',
      tertiary200:'#818e92',
      tertiary300:'#314044',
      tertiary400:'#1b282c',
      tertiary500:'#080e10',

      neutral100:'#e9e9e9',
      neutral200:'#cccccc',
      neutral300:'#999999',
      neutral400:'#777777',
      neutral500:'#666666',
      neutral600:'#333333',

      // feedback:{
      //   informative: {
      //     100: '#8ecbff',
      //     200: '#60adf3',
      //     300: '#3f8ed6',
      //     400: '#1c69af',
      //     500: '#001d33'
      //   },
      //   negative: {
      //     100: '#f3b8b3',
      //     200: '#ec8a82',
      //     300: '#e45b50',
      //     400: '#a34139',
      //     500: '#220e0c'
      //   },
      //   warning: {
      //     100: '#f9dda8',
      //     200: '#f5c76e',
      //     300: '#f1b135',
      //     400: '#ad7f26',
      //     500: '#241b08'
      //   },
      //   positive: {
      //     100: '#bad6a4',
      //     200: '#8dbc69',
      //     300: '#22ff33',
      //     400: '#457321',
      //     500: '#0e1807'
      // },
      // },
      light: '#f9f9f9',
      dark: '#323232',
      white:'#fff',
      black:'#000'
    },
    space: {},
    fonts: {}
  }
})

export default theme;