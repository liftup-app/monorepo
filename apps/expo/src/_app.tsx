import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';

import { LinearGradient } from 'expo-linear-gradient';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import colors from 'tailwindcss/colors';

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
        colors: { ...colors, primary: colors.slate },
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
