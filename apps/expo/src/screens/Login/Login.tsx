import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
import { FontAwesomeIcon as BaseFontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button, Spacer } from 'native-base';
import { styled } from 'nativewind';
import { ReactNode } from 'react';
import { PressableProps, Text, View } from 'react-native';

import FacebookIcon from '../../../assets/social/facebook.svg';
import GoogleIcon from '../../../assets/social/google.svg';
import Screen from '../../components/Screen';
import { signUpWithGoogle } from '../../lib/auth';

const FontAwesomeIcon = styled(BaseFontAwesomeIcon);

interface LoginButtonProps extends PressableProps {
    text: string;
    icon: ReactNode;
}

function LoginButton({ onPress, text, icon }: LoginButtonProps) {
    return (
        <Button
            onPress={onPress}
            size='lg'
            className='w-full rounded-full text-white'
            variant='outline'
        >
            <View className='flex flex-row items-center justify-center space-x-2'>
                {icon}
                <Text className='text-white'>{text}</Text>
            </View>
        </Button>
    );
}

export default function Login() {
    return (
        <Screen>
            <View className='flex w-full items-center justify-center space-y-4'>
                <Text className='text-center text-3xl font-extrabold text-white'>
                    Welcome to Liftup
                </Text>
                <Text className='text-center text-xl font-light text-slate-200'>
                    Create an account to start lifting with our community.
                </Text>
            </View>
            <View className='flex w-full items-center justify-center py-4'>
                <LoginButton
                    text='Continue with Apple'
                    icon={<FontAwesomeIcon className='text-white' size={24} icon={faApple} />}
                />
                <Spacer size={4} />
                <LoginButton
                    onPress={() => signUpWithGoogle()}
                    text='Continue with Google'
                    icon={<GoogleIcon width={24} height={24} />}
                />
                <Spacer size={4} />
                <LoginButton
                    text='Continue with Facebook'
                    icon={<FacebookIcon width={24} height={24} />}
                />
            </View>
        </Screen>
    );
}
