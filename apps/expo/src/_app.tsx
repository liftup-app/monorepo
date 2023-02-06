import 'react-native-url-polyfill/auto';

import { LinearGradient } from 'expo-linear-gradient';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import { slate } from 'tailwindcss/colors';

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
        colors: { primary: slate },
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
