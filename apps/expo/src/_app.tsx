import 'react-native-url-polyfill/auto';

import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { styled } from 'nativewind';
import React from 'react';
import { SafeAreaView as BaseSafeAreaView, StyleSheet } from 'react-native';
import { SafeAreaProvider as BaseSafeAreaProvider } from 'react-native-safe-area-context';

import AuthProvider from '../components/AuthProvider';
import NavigationContainer from '../components/Navigation/NavigationContainer';
import TRPCProvider from './utils/trpc';

const config = {
    dependencies: {
        'linear-gradient': LinearGradient,
    },
};

const SafeAreaProvider = styled(BaseSafeAreaProvider);
const SafeAreaView = styled(BaseSafeAreaView);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262626',
    },
});

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
                    <SafeAreaProvider>
                        <StatusBar style='dark' />
                        <SafeAreaView className='flex h-full w-full bg-slate-800'>
                            <NavigationContainer />
                        </SafeAreaView>
                    </SafeAreaProvider>
                </AuthProvider>
            </NativeBaseProvider>
        </TRPCProvider>
    );
}
