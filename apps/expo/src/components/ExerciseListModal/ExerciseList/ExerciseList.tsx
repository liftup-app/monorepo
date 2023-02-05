import { Exercise, OrganizedExercises } from '@liftup/mocks/src/mockExercises';
import { SectionList } from 'native-base';
import { Image, Pressable, Text, View } from 'react-native';

export interface ExerciseModalProps {
    onClickExercise?: (exercise: Exercise) => void;
    exercises: OrganizedExercises;
}

export default function ExerciseList({ exercises, onClickExercise }: ExerciseModalProps) {
    return (
        <SectionList
            className='flex w-full pb-4'
            sections={exercises}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => onClickExercise?.(item)}
                    className='flex h-16 w-full items-start justify-center border-b border-slate-800'
                >
                    <Text className='text-lg text-white'>{item.name}</Text>
                    <Text className='text-slate-400'>{item.category}</Text>
                </Pressable>
            )}
            renderSectionHeader={({ section: { title } }) => (
                <View className='flex w-full items-start justify-end border-b border-slate-800 px-1 pt-4 pb-2'>
                    <Text className='text-xl font-semibold text-white'>{title}</Text>
                </View>
            )}
        />
    );
}
