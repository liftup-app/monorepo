import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { Text, View } from 'native-base';

import Button from '../../design-system/Button/Button';

export default function Templates() {
    return (
        <View className='flex w-full items-start justify-center space-y-2'>
            <View>
                <Text>Templates</Text>
                <Button icon={faPlus}>asdf</Button>
            </View>
        </View>
    );
}
