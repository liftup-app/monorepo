import { IInputProps, Input as BaseInput } from 'native-base';
import { slate } from 'tailwindcss/colors';

export type InputProps = IInputProps;

export default function Input({ ...props }: InputProps) {
    return (
        <BaseInput
            _focus={{
                borderColor: slate['100'],
                selectionColor: slate['100'],
            }}
            borderColor={slate['500']}
            selectionColor={slate['500']}
            placeholderTextColor={slate['400']}
            {...props}
        />
    );
}
