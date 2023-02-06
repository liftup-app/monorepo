import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { FontAwesomeIcon as BaseFontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Set } from '@liftup/mocks';
import { styled } from 'nativewind';
import { Text, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import Input from '../../../../../design-system/Input/Input';

const FontAwesomeIcon = styled(BaseFontAwesomeIcon);

export interface SetListProps {
    sets: Set[];
    onDeleteSet?: (set: Set) => void;
}

function LeftSwipeActions() {
    return (
        <View className='flex h-full flex-1 items-end justify-center bg-red-600'>
            <Text className='px-2 font-bold text-white'>Delete</Text>
        </View>
    );
}

export default function SetList({ sets, onDeleteSet }: SetListProps) {
    return (
        <>
            {sets.map((set, index) => {
                return (
                    <Swipeable
                        key={set.id}
                        onSwipeableOpen={(direction) => {
                            if (direction === 'right') {
                                onDeleteSet?.(set);
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
                                <FontAwesomeIcon className='text-lg text-white' icon={faCheck} />
                            </View>
                        </View>
                    </Swipeable>
                );
            })}
        </>
    );
}
