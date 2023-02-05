import { AlertDialog as BaseAlertDialog } from 'native-base';
import { IAlertDialogProps } from 'native-base/lib/typescript/components/composites';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';

import Button from '../Button/Button';

export interface AlertDialogProps extends IAlertDialogProps {
    title?: string;
    icon?: ReactNode;
    description?: string;
    proceedButtonText?: string;
    onCancel?: () => void;
    onProceed?: () => void;
}

export default function AlertDialog({
    leastDestructiveRef,
    isOpen,
    icon,
    proceedButtonText = 'Continue',
    title,
    description,
    onCancel,
    onProceed,
}: AlertDialogProps) {
    return (
        <BaseAlertDialog
            leastDestructiveRef={leastDestructiveRef}
            isOpen={isOpen}
            onClose={onCancel}
        >
            <BaseAlertDialog.Content className='w-[85%]'>
                <BaseAlertDialog.Header className='border-b-0 bg-slate-800'>
                    <View className='flex w-full flex-row items-center justify-start space-x-2'>
                        {!!icon && icon}
                        <Text className='text-lg text-white'>{title}</Text>
                    </View>
                </BaseAlertDialog.Header>
                <BaseAlertDialog.Body className='bg-slate-800'>
                    <View className='flex w-full items-start justify-center space-y-6 text-start'>
                        <Text className='text-white '>{description}</Text>
                        <View className='flex w-full flex-row items-center justify-end space-x-2'>
                            <Button onPress={onCancel} ref={leastDestructiveRef}>
                                Cancel
                            </Button>
                            <Button colorScheme='danger' onPress={onProceed}>
                                {proceedButtonText}
                            </Button>
                        </View>
                    </View>
                </BaseAlertDialog.Body>
            </BaseAlertDialog.Content>
        </BaseAlertDialog>
    );
}
