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
                50: '#f8fafc',
                100: '#f1f5f9',
                200: '#e2e8f0',
                300: '#cbd5e1',
                400: '#94a3b8',
                500: '#64748b',
                600: '#475569',
                700: '#334155',
                800: '#1e293b',
                900: '#0f172a',
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
