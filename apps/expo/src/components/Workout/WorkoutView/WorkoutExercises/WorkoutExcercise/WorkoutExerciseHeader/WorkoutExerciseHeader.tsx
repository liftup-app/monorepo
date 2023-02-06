import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { FontAwesomeIcon as BaseFontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Exercise } from '@liftup/mocks/src/mockExercises';
import { Menu } from 'native-base';
import { styled } from 'nativewind';
import { Pressable, Text, View } from 'react-native';
import { slate } from 'tailwindcss/colors';

const FontAwesomeIcon = styled(BaseFontAwesomeIcon);

export interface WorkoutExerciseHeaderProps {
    exercise: Exercise;
    onDeleteExercise?: (exercise: Exercise) => void;
}

export default function WorkoutExerciseHeader({
    exercise,
    onDeleteExercise,
}: WorkoutExerciseHeaderProps) {
    return (
        <View className='flex w-full flex-row items-center justify-between py-2'>
            <Text className='pl-2 text-lg font-semibold text-white'>{exercise.name}</Text>
            <Menu
                backgroundColor={slate['800']}
                className='w-40'
                offset={4}
                placement='bottom right'
                // eslint-disable-next-line react/no-unstable-nested-components
                trigger={(triggerProps) => {
                    return (
                        <Pressable
                            {...triggerProps}
                            accessibilityLabel='Open Exercise Options'
                            className='flex items-center justify-center rounded-full bg-white/10 p-2'
                        >
                            <FontAwesomeIcon className='text-lg text-white' icon={faEllipsis} />
                        </Pressable>
                    );
                }}
            >
                <Menu.Item
                    onPress={() => onDeleteExercise?.(exercise)}
                    className='flex w-full flex-row items-center justify-start px-0 text-start'
                >
                    <FontAwesomeIcon icon={faXmark} className='text-red-600' />
                    <Text className='text-white'>Delete Exercise</Text>
                </Menu.Item>
            </Menu>
        </View>
    );
}
