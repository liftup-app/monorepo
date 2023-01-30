import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon as BaseFontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import clsx from 'clsx';
import { Button as BaseButton, IButtonProps } from 'native-base';
import { styled } from 'nativewind';
import React, { forwardRef, isValidElement, memo, ReactNode } from 'react';

const FontAwesomeIcon = styled(BaseFontAwesomeIcon);
const StyledButton = styled(BaseButton);

export const BUTTON_ICON_POSITION_OPTIONS = ['left', 'right'];
export type ButtonIconPosition = typeof BUTTON_ICON_POSITION_OPTIONS[number];

export interface ButtonProps extends IButtonProps {
    icon?: IconDefinition | ReactNode;
    iconPosition?: ButtonIconPosition;
}

function ButtonIcon({ icon }: { icon?: IconDefinition | ReactNode }) {
    if (!icon) {
        return null;
    }

    if (!isValidElement(icon)) {
        return <FontAwesomeIcon className='text-white' icon={icon as IconDefinition} />;
    }

    return icon;
}

function Button(
    { className, icon, iconPosition = 'left', children, ...props }: ButtonProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any,
) {
    const buttonIcon = <ButtonIcon icon={icon} />;

    return (
        <StyledButton
            {...props}
            leftIcon={iconPosition === 'left' ? buttonIcon : undefined}
            rightIcon={iconPosition === 'left' ? undefined : buttonIcon}
            className={clsx(className, 'border font-semibold shadow-sm')}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            ref={ref}
        >
            {children}
        </StyledButton>
    );
}

export default memo(forwardRef(Button));
