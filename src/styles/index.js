import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const bgLight = 'pink';
const bgDark = 'gray.800';
const colorLight = 'gray.900';
const colorDark = '#FFF';

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    bgLight,
    bgDark,
    colorLight,
    colorDark,
    // primaryAccentDark,
    // primaryAccentLight,
    // tomato: primaryAccentDark,
    // turquoise: '#47E3FF',
    // salad: '#66cd00',
    // chakraBlue: '#1A212D',
    // chakraBlueLight: '#4e6486',
    // pandaTruthy: `hsl(179, 85%, 66%)`,
    // pandaFalsy: `hsl(314, 85%, 66%)`,
  },
  styles: {
    global: props => ({
      body: {
        // bg: mode(bgLight, bgDark)(props),
        // color: mode(colorLight, colorDark)(props),
      },
    }),
  },
});
