import { decode } from 'base64-arraybuffer';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { Alert, Button, Image, StyleSheet, View } from 'react-native';

import supabase from '../lib/supabase';

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 5,
        overflow: 'hidden',
        maxWidth: '100%',
    },
    image: {
        objectFit: 'cover',
        paddingTop: 0,
    },
    noImage: {
        backgroundColor: '#333',
        border: '1px solid rgb(200, 200, 200)',
        borderRadius: 5,
    },
});

interface Props {
    size: number;
    url: string | null;
    onUpload: (filePath: string) => void;
}

export default function Avatar({ url, size = 150, onUpload }: Props) {
    const [uploading, setUploading] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    const avatarSize = { height: size, width: size };

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
            return;
        }

        const photo = result.assets[0];

        if (!photo.base64) {
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
        <View>
            {avatarUrl ? (
                <Image
                    source={{ uri: avatarUrl }}
                    accessibilityLabel='Avatar'
                    style={[avatarSize, styles.avatar, styles.image]}
                />
            ) : (
                <View style={[avatarSize, styles.avatar, styles.noImage]} />
            )}
            <View>
                <Button
                    title={uploading ? 'Uploading ...' : 'Upload'}
                    onPress={uploadAvatar}
                    disabled={uploading}
                />
            </View>
        </View>
    );
}
