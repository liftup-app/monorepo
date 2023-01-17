import { StatusBar } from 'expo-status-bar';
import { ReactNode } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export interface ScreenProps {
    children?: ReactNode;
}

export default function Screen({ children }: ScreenProps) {
    return (
        <SafeAreaProvider>
            <StatusBar style='light' />
            <SafeAreaView className='flex h-full w-full flex-1 items-center space-y-4 bg-slate-800 p-8'>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
