import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';
import { FontAwesomeIcon as BaseFontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { styled } from 'nativewind';
import { useRef } from 'react';
import {
    NativeSyntheticEvent,
    Pressable,
    Text,
    TextInput as BaseTextInput,
    TextInputChangeEventData,
    View,
} from 'react-native';
import { slate, white } from 'tailwindcss/colors';

interface WorkoutInfoProps {
    time: string;
    name: string;
    onNameChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

const TextInput = styled(BaseTextInput);
const FontAwesomeIcon = styled(BaseFontAwesomeIcon);

export default function WorkoutInfo({ time, name, onNameChange }: WorkoutInfoProps) {
    const textInputRef = useRef<BaseTextInput>(null);

    return (
        <View className='flex w-full items-start justify-center px-4 pt-12'>
            <Pressable
                onPress={() => textInputRef?.current?.focus()}
                className='flex flex-row items-center justify-start space-x-2'
            >
                <TextInput
                    ref={textInputRef}
                    onChange={onNameChange}
                    selectionColor={white}
                    placeholder='Workout Name'
                    placeholderTextColor={slate[500]}
                    className='p-2 text-xl font-semibold text-white focus:border focus:border-slate-300'
                >
                    {name}
                </TextInput>
                <FontAwesomeIcon className='mt-1 text-white' icon={faPencil} />
            </Pressable>

            <Text className='px-2 text-sm font-semibold text-slate-300'>{time}</Text>
        </View>
    );
}
