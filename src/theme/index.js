import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.700',
                fontFamily: `'Roboto', sans-serif`,
                fontSize: 'md',
                fontWeight: '300'
            },
        },
    },
    colors: {
        gray: {
            150: '#e9eef5'
        },
        lightPurple: {
            50: '#f4f1f4',
            100: '#dad6da',
            200: '#c0bac1',
            300: '#a89eab',
            400: '#8f8393',
            500: '#74697a',
            600: '#59515f',
            700: '#3f3b43',
            800: '#252328',
            900: '#0c0b0e'
        }
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
      },
    initialColorMode: 'light',
    useSystemColorMode: false,
})

export default theme;