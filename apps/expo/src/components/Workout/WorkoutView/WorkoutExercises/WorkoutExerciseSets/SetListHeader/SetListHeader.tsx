import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { FontAwesomeIcon as BaseFontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { styled } from 'nativewind';
import { Text, View } from 'react-native';

const FontAwesomeIcon = styled(BaseFontAwesomeIcon);

export default function SetListHeader() {
    return (
        <View className='flex w-full flex-row items-center justify-center'>
            <Text className='w-[10%] text-center text-lg text-white'>Set</Text>
            <Text className='w-[30%] text-center text-lg text-white'>Previous</Text>
            <Text className='w-[25%] text-center text-lg text-white'>lbs</Text>
            <Text className='w-[25%] text-center text-lg text-white'>Reps</Text>

            <View className='w-[10%] items-center justify-center'>
                <FontAwesomeIcon className='text-lg text-white' icon={faCheck} />
            </View>
        </View>
    );
}
