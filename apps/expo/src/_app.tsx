import 'react-native-url-polyfill/auto';

import { LinearGradient } from 'expo-linear-gradient';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';

import AuthProvider from './components/AuthProvider';
import Main from './screens/Main/Main';
import TRPCProvider from './utils/trpc';

const config = {
    dependencies: {
        'linear-gradient': LinearGradient,
    },
};

export default function App() {
    const theme = extendTheme({
        colors: {
            // Add new color
            primary: {
                50: '#fafafa',
                100: '#f5f5f5',
                200: '#e5e5e5',
                300: '#d4d4d4',
                400: '#a3a3a3',
                500: '#737373',
                600: '#525252',
                700: '#404040',
                800: '#262626',
                900: '#171717',
            },
        },
        config: {
            initialColorMode: 'dark',
        },
    });

    return (
        <TRPCProvider>
            <NativeBaseProvider theme={theme} config={config}>
                <AuthProvider>
                    <Main />
                </AuthProvider>
            </NativeBaseProvider>
        </TRPCProvider>
    );
}
