import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { FontAwesomeIcon as BaseFontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Set } from '@liftup/mocks';
import { Exercise } from '@liftup/mocks/src/mockExercises';
import { Menu } from 'native-base';
import { styled } from 'nativewind';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from 'tailwindcss/colors';
import { v4 as uuid } from 'uuid';

import Button from '../../../design-system/Button/Button';
import Input from '../../../design-system/Input/Input';

const FontAwesomeIcon = styled(BaseFontAwesomeIcon);

interface WorkoutExercisesProps {
    exercises: Exercise[];
    onDeleteExercise?: (exercise: Exercise) => void;
}

function LeftSwipeActions() {
    return (
        <View className='flex h-full flex-1 items-end justify-center bg-red-600'>
            <Text className='px-2 font-bold text-white'>Delete</Text>
        </View>
    );
}

export default function WorkoutExercises({ exercises, onDeleteExercise }: WorkoutExercisesProps) {
    const [sets, setSets] = useState<Set[]>([{ id: uuid() }]);

    return (
        <>
            {exercises.map((exercise) => {
                return (
                    <View
                        className='my-2 flex w-full items-start justify-center border-t border-slate-700 pt-2'
                        key={exercise.name}
                    >
                        <View className='flex w-full flex-row items-center justify-between py-2'>
                            <Text className='pl-2 text-lg font-semibold text-white'>
                                {exercise.name}
                            </Text>
                            <Menu
                                backgroundColor={colors.slate['800']}
                                className='w-40'
                                offset={4}
                                placement='bottom right'
                                // eslint-disable-next-line react/no-unstable-nested-components
                                trigger={(triggerProps) => {
                                    return (
                                        <Pressable
                                            {...triggerProps}
                                            accessibilityLabel='Open Exercise Options'
                                            className='flex items-center justify-center rounded-full bg-white/10 p-1'
                                        >
                                            <FontAwesomeIcon
                                                className='text-lg text-white'
                                                icon={faEllipsis}
                                            />
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

                        <View className='flex w-full flex-row items-center justify-center'>
                            <Text className='w-[10%] text-center text-lg text-white'>Set</Text>
                            <Text className='w-[30%] text-center text-lg text-white'>Previous</Text>
                            <Text className='w-[25%] text-center text-lg text-white'>lbs</Text>
                            <Text className='w-[25%] text-center text-lg text-white'>Reps</Text>

                            <View className='w-[10%] items-center justify-center'>
                                <FontAwesomeIcon className='text-lg text-white' icon={faCheck} />
                            </View>
                        </View>
                        {sets.map((set, index) => {
                            return (
                                <Swipeable
                                    key={set.id}
                                    onSwipeableOpen={(direction) => {
                                        if (direction === 'right') {
                                            setSets(
                                                sets.filter(
                                                    (currentSet) => currentSet.id !== set.id,
                                                ),
                                            );
                                        }
                                    }}
                                    renderRightActions={LeftSwipeActions}
                                >
                                    <View className='flex w-full flex-row items-center justify-center bg-slate-900 py-2'>
                                        <Text className='w-[10%] text-center text-lg font-semibold text-slate-100'>
                                            {index + 1}
                                        </Text>
                                        <Text className='w-[30%] text-center font-semibold text-slate-100 '>
                                            42.5 lb x 12
                                        </Text>
                                        <Text>{set.reps}</Text>
                                        <View className='w-[25%] items-center justify-center'>
                                            <Input
                                                className='py-1 text-center'
                                                size='lg'
                                                width='70%'
                                                keyboardType='decimal-pad'
                                                // onChangeText={(text) => setSearchText(text)}
                                                // value={searchText}
                                            />
                                        </View>
                                        <View className='w-[25%] items-center justify-center'>
                                            <Input
                                                size='lg'
                                                className='py-1 text-center'
                                                width='70%'
                                                keyboardType='decimal-pad'
                                                // onChangeText={(text) => setSearchText(text)}
                                                // value={searchText}
                                            />
                                        </View>
                                        <View className='w-[10%] items-center justify-center'>
                                            <FontAwesomeIcon
                                                className='text-lg text-white'
                                                icon={faCheck}
                                            />
                                        </View>
                                    </View>
                                </Swipeable>
                            );
                        })}
                        <Button
                            onPress={() => setSets([...sets, { id: uuid() }])}
                            size='xs'
                            className='my-2 w-full bg-slate-800'
                            icon={faPlus}
                        >
                            Add Set
                        </Button>
                    </View>
                );
            })}
        </>
    );
}
