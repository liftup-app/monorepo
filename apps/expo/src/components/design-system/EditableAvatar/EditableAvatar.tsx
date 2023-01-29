import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { names } from '@liftup/utils';
import clsx from 'clsx';
import { Avatar, IAvatarProps } from 'native-base';
import { styled } from 'nativewind';
import React from 'react';
import { Pressable, View } from 'react-native';

const Icon = styled(FontAwesomeIcon);

export interface EditableAvatarProps extends IAvatarProps {
    fullName?: string;
    onPress?: () => void;
    disabled?: boolean;
}
export default function EditableAvatar({
    fullName,
    onPress,
    disabled,
    size,
    ...props
}: EditableAvatarProps) {
    return (
        <Pressable
            className={clsx('transition-opacity', disabled ? 'opacity-75' : 'opacity-100')}
            disabled={disabled}
            onPress={onPress}
        >
            <Avatar bg='gray.300' size='2xl' {...props}>
                {!!fullName && names.getInitialsFromFullName(fullName)}
                <Avatar.Badge bg='gray.50' borderWidth={1} borderColor='gray.900'>
                    <View className='flex h-full w-full flex-1 items-center justify-center'>
                        <Icon icon={faCamera} />
                    </View>
                </Avatar.Badge>
            </Avatar>
        </Pressable>
    );
}
