import { decode } from 'base64-arraybuffer';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import supabase from '../lib/supabase';
import EditableAvatar from './design-system/EditableAvatar';

interface Props {
    url: string | null;
    onUpload: (filePath: string) => void;
}

export default function AvatarEditor({ url, onUpload }: Props) {
    const [uploading, setUploading] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    async function downloadImage(path: string) {
        try {
            const { data, error } = await supabase.storage.from('avatars').download(path);

            if (error) {
                throw error;
            }

            const fr = new FileReader();

            fr.readAsDataURL(data);
            fr.onload = () => {
                setAvatarUrl(fr.result as string);
            };
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert('Error downloading image: ', error.message);
            }
        }
    }

    useEffect(() => {
        if (url) downloadImage(url);
    }, [url]);

    async function uploadAvatar() {
        setUploading(true);

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
            selectionLimit: 1,
            base64: true,
        });

        if (result.canceled || result.assets?.length !== 1) {
            setUploading(false);
            return;
        }

        const photo = result.assets[0];

        if (!photo?.base64) {
            return;
        }

        const fileExtension = photo.uri.split('.').pop();
        const uploadedFilePath = `${Math.random()}.${fileExtension}`;

        // TODO: tie this to a user's uuid so we don't risk random collisions
        const { error } = await supabase.storage
            .from('avatars')
            .upload(uploadedFilePath, decode(photo.base64), {
                upsert: false,
                contentType: `image/${fileExtension}`,
            });

        if (error) {
            Alert.alert(error.message);
        }

        onUpload(uploadedFilePath);

        setUploading(false);
    }

    return (
        <EditableAvatar
            fullName='Satya Patel'
            onPress={uploadAvatar}
            disabled={uploading}
            source={{ uri: avatarUrl || undefined }}
            accessibilityLabel='Avatar'
        />
    );
}
