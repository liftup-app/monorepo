import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as BaseFontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import clsx from 'clsx';
import { styled } from 'nativewind';
import { Pressable, PressableProps, Text } from 'react-native';

const FontAwesomeIcon = styled(BaseFontAwesomeIcon);

export interface BottomBarButtonProps extends PressableProps {
    focused: boolean;
    icon?: IconDefinition;
    screenName: string;
}
export default function BottomTabBarButton({
    focused,
    icon,
    screenName,
    ...props
}: BottomBarButtonProps) {
    return (
        <Pressable
            {...props}
            disabled={focused}
            className='h-full w-24 items-center justify-center space-y-2 text-slate-400'
        >
            {icon && (
                <FontAwesomeIcon
                    size={20}
                    className={focused ? 'text-slate-50' : 'text-slate-400'}
                    icon={icon}
                />
            )}
            <Text className={clsx('text-xs', focused ? 'text-slate-50' : 'text-slate-400')}>
                {screenName}
            </Text>
        </Pressable>
    );
}
