import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { FontAwesomeIcon as BaseFontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Set } from '@liftup/mocks';
import { Exercise } from '@liftup/mocks/src/mockExercises';
import { Input } from 'native-base';
import { styled } from 'nativewind';
import { useState } from 'react';
import { Text, View } from 'react-native';
import colors from 'tailwindcss/colors';

import Button from '../../../design-system/Button/Button';

const FontAwesomeIcon = styled(BaseFontAwesomeIcon);

interface WorkoutExercisesProps {
    exercises: Exercise[];
}

export default function WorkoutExercises({ exercises }: WorkoutExercisesProps) {
    const [sets, setSets] = useState<Set[]>([{}]);

    return (
        <>
            {exercises.map((exercise) => {
                return (
                    <View
                        className='my-2 flex w-full items-start justify-center border-t border-slate-700 pt-2'
                        key={exercise.name}
                    >
                        <Text className='pb-2 pl-2 text-lg font-semibold text-white'>
                            {exercise.name}
                        </Text>
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
                                <View className='my-1 flex w-full flex-row items-center justify-center'>
                                    <Text className='w-[10%] text-center text-lg font-semibold text-slate-100'>
                                        {index + 1}
                                    </Text>
                                    <Text className='w-[30%] text-center font-semibold text-slate-100 '>
                                        42.5 lb x 12
                                    </Text>
                                    <Text>{set.reps}</Text>
                                    <View className='w-[25%] items-center justify-center'>
                                        <Input
                                            width='4/5'
                                            keyboardType='decimal-pad'
                                            // onChangeText={(text) => setSearchText(text)}
                                            // value={searchText}
                                            _focus={{
                                                borderColor: colors.slate['100'],
                                                selectionColor: colors.slate['100'],
                                            }}
                                            borderColor={colors.slate['500']}
                                            selectionColor={colors.slate['500']}
                                            placeholderTextColor={colors.slate['400']}
                                        />
                                    </View>
                                    <View className='w-[25%] items-center justify-center'>
                                        <Input
                                            width='4/5'
                                            keyboardType='decimal-pad'
                                            // onChangeText={(text) => setSearchText(text)}
                                            // value={searchText}
                                            _focus={{
                                                borderColor: colors.slate['100'],
                                                selectionColor: colors.slate['100'],
                                            }}
                                            borderColor={colors.slate['500']}
                                            selectionColor={colors.slate['500']}
                                            placeholderTextColor={colors.slate['400']}
                                        />
                                    </View>
                                    <View className='w-[10%] items-center justify-center'>
                                        <FontAwesomeIcon
                                            className='text-lg text-white'
                                            icon={faCheck}
                                        />
                                    </View>
                                </View>
                            );
                        })}
                        <Button
                            onPress={() => setSets([...sets, {}])}
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
