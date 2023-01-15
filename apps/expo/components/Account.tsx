import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

import supabase from '../lib/supabase';
import useGlobalStore from '../src/hooks/useGlobalStore';
import useManageBottomTabBarHeight from '../src/hooks/useManageBottomTabBarHeight';
import Avatar from './Avatar';

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 12,
    },
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: 'stretch',
    },
    mt20: {
        marginTop: 20,
    },
});

export default function Account() {
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState('');
    const [website, setWebsite] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    useManageBottomTabBarHeight();

    const user = useGlobalStore((state) => state.user);

    useEffect(() => {
        if (!user) return;

        async function getProfile() {
            try {
                setLoading(true);
                if (!user) throw new Error('No user on the session!');

                const { data, error, status } = await supabase
                    .from('users')
                    .select(`username, website, avatar_url`)
                    .eq('id', user.id)
                    .single();

                if (error && status !== 406) {
                    throw new Error(error.message);
                }

                if (data) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    setUsername(data.username);
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    setWebsite(data.website);
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    setAvatarUrl(data.avatar_url);
                }
            } catch (error) {
                if (error instanceof Error) {
                    Alert.alert(error.message);
                }
            } finally {
                setLoading(false);
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getProfile();
    }, [user]);

    async function updateProfile({
        // eslint-disable-next-line @typescript-eslint/no-shadow
        username,
        // eslint-disable-next-line @typescript-eslint/no-shadow
        website,
        avatar_url,
    }: {
        username: string;
        website: string;
        avatar_url: string;
    }) {
        try {
            setLoading(true);
            if (!user) throw new Error('No user on the session!');

            const updates = {
                id: user.id,
                username,
                website,
                avatar_url,
                updated_at: new Date(),
            };

            const { error } = await supabase.from('users').upsert(updates);

            if (error) {
                throw new Error(error.message);
            }
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert(error.message);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <View className='p-4'>
            <View className='w-full items-center justify-center'>
                <Avatar
                    size={200}
                    url={avatarUrl}
                    onUpload={(url: string) => {
                        setAvatarUrl(url);
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                        updateProfile({ username, website, avatar_url: url });
                    }}
                />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Input label='Email' value={user?.email} disabled />
            </View>
            <View style={styles.verticallySpaced}>
                <Input
                    label='Username'
                    value={username || ''}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <Input
                    label='Website'
                    value={website || ''}
                    onChangeText={(text) => setWebsite(text)}
                />
            </View>

            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button
                    title={loading ? 'Loading ...' : 'Update'}
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onPress={() => updateProfile({ username, website, avatar_url: avatarUrl })}
                    disabled={loading}
                />
            </View>

            <View style={styles.verticallySpaced}>
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                <Button title='Sign Out' onPress={() => supabase.auth.signOut()} />
            </View>
        </View>
    );
}
