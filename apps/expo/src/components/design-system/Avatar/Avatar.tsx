import { names } from '@liftup/utils';
import { Avatar as BaseAvatar, IAvatarProps } from 'native-base';
import React from 'react';

export interface AvatarProps extends IAvatarProps {
    fullName?: string;
}
export default function Avatar({ fullName, ...props }: AvatarProps) {
    return (
        <BaseAvatar bg='gray.300' size='lg' {...props}>
            {!!fullName && names.getInitialsFromFullName(fullName)}
        </BaseAvatar>
    );
}
