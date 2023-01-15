import { styled } from 'nativewind';
import { Text, TouchableOpacity } from 'react-native';

// Add variant to styled() components
export const Button = styled(TouchableOpacity, 'border rounded', {
    variants: {
        intent: {
            primary: 'bg-blue-600 border-slate-900 border hover:bg-blue-600',
            secondary: 'bg-white border-gray-400 hover:bg-gray-100',
        },
        size: {
            small: 'py-1 px-2',
            medium: 'py-2 px-4',
        },
    },
    defaultProps: {
        intent: 'primary',
        size: 'medium',
    },
});

export const ButtonText = styled(Text, 'font-semibold', {
    variants: {
        intent: {
            primary: 'text-white',
            secondary: 'text-gray-800',
        },
        size: {
            small: 'text-sm',
            medium: 'text-base',
        },
    },
    defaultProps: {
        intent: 'primary',
        size: 'medium',
    },
});
