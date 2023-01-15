import 'react-native-url-polyfill/auto';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthProvider from '../components/AuthProvider';
import NavigationContainer from '../components/Navigation/NavigationContainer';
import TRPCProvider from './utils/trpc';

export default function App() {
    return (
        <TRPCProvider>
            <AuthProvider>
                <SafeAreaProvider>
                    <NavigationContainer />
                </SafeAreaProvider>
            </AuthProvider>
        </TRPCProvider>
    );
}
