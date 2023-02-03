import { AlertDialog as BaseAlertDialog } from 'native-base';
import { IAlertDialogProps } from 'native-base/lib/typescript/components/composites';
import { Text, View } from 'react-native';

import Button from '../Button/Button';

export interface AlertDialogProps extends IAlertDialogProps {
    title?: string;
    description?: string;
    proceedButtonText?: string;
    onCancel?: () => void;
    onProceed?: () => void;
}

export default function AlertDialog({
    leastDestructiveRef,
    isOpen,
    proceedButtonText = 'continue',
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
                    {title}
                </BaseAlertDialog.Header>
                <BaseAlertDialog.Body className='bg-slate-800'>
                    <View className='flex w-full items-start justify-center space-y-4 text-start'>
                        <Text className='text-white '>{description}</Text>
                        <View className='flex w-full flex-row items-center justify-end space-x-4'>
                            <Button onPress={onCancel} ref={leastDestructiveRef}>
                                Cancel
                            </Button>
                            <Button colorScheme='danger' onPress={onProceed}>
                                Delete
                            </Button>
                        </View>
                    </View>
                </BaseAlertDialog.Body>
            </BaseAlertDialog.Content>
        </BaseAlertDialog>
    );
}
