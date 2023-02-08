import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { FontAwesomeIcon as BaseFontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Set } from '@liftup/mocks';
import { styled } from 'nativewind';
import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';
import { Dimensions, LayoutAnimation, Text, View } from 'react-native';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';
import Animated, { FadeIn, SlideInDown, StretchInY } from 'react-native-reanimated';
import SwipeableItem from 'react-native-swipeable-item';

import Input from '../../../../../design-system/Input/Input';

const FontAwesomeIcon = styled(BaseFontAwesomeIcon);

const OVERSWIPE_DIST = Dimensions.get('window').width * 0.7;

export interface SetListProps {
    sets: Set[];
    setSets: Dispatch<SetStateAction<Set[]>>;
    onDeleteSet?: (set: Set) => void;
}

function UnderlayLeft() {
    return (
        <Animated.View className='flex h-4/5 w-full flex-row items-center justify-center bg-red-500'>
            <Text className='text-lg text-white'>DELETE</Text>
        </Animated.View>
    );
}

export default function SetList({ sets, onDeleteSet }: SetListProps) {
    const itemRefs = useRef(new Map());

    const renderItem = useCallback(
        (params: RenderItemParams<Set>) => {
            const onDelete = () => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                onDeleteSet?.(params.item);
            };

            return (
                <SetItem
                    {...params}
                    set={params.item}
                    index={(params.getIndex() || 0) + 1}
                    itemRefs={itemRefs}
                    onDelete={onDelete}
                />
            );
        },
        [onDeleteSet],
    );

    return (
        <View className='flex w-full'>
            <DraggableFlatList
                scrollEnabled={false}
                data={sets}
                renderItem={renderItem}
                activationDistance={20}
                keyExtractor={(item) => item.id!}
            />
        </View>
    );
}

interface SetItemProps {
    set: Set;
    index?: number;
    onDelete?: () => void;
    itemRefs: React.MutableRefObject<Map<any, any>>;
}

function SetItem({ set, index, onDelete, itemRefs }: SetItemProps) {
    const [snapPointsLeft] = useState<number[]>([Dimensions.get('window').width]);

    return (
        <SwipeableItem
            item={set}
            ref={(ref) => {
                if (ref && !itemRefs.current.get(set.id)) {
                    itemRefs.current.set(set.id, ref);
                }
            }}
            onChange={({ openDirection }) => {
                if (openDirection === 'left') {
                    onDelete?.();
                }
            }}
            overSwipe={OVERSWIPE_DIST}
            renderUnderlayLeft={UnderlayLeft}
            snapPointsLeft={snapPointsLeft}
            key={set.id}
        >
            <Animated.View
                entering={FadeIn}
                className='flex w-full flex-row items-center justify-center bg-slate-900 py-2'
            >
                <Text className='w-[10%] text-center text-lg font-semibold text-slate-100'>
                    {index}
                </Text>
                <Text className='w-[30%] text-center font-semibold text-slate-100 '>
                    42.5 lbs x 12
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
            </Animated.View>
        </SwipeableItem>
    );
}
