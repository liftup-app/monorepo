import { IInputProps, Input as BaseInput } from 'native-base';
import { ColorSchemeType } from 'native-base/lib/typescript/components/types';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import colors from 'tailwindcss/colors';

export type InputProps = IInputProps;

export default function Input({ ...props }: InputProps) {
    return (
        <BaseInput
            _focus={{
                borderColor: colors.slate['100'],
                selectionColor: colors.slate['100'],
            }}
            borderColor={colors.slate['500']}
            selectionColor={colors.slate['500']}
            placeholderTextColor={colors.slate['400']}
            {...props}
        />
    );
}
