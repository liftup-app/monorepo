import { Button, Input } from 'native-base';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import supabase from '../lib/supabase';
import useGlobalStore from '../src/hooks/useGlobalStore';
import useManageBottomTabBarHeight from '../src/hooks/useManageBottomTabBarHeight';
import AvatarEditor from './AvatarEditor';

const styles = StyleSheet.create({
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
        <View className='bg-slate-800 p-4'>
            <View className='w-full items-center justify-center'>
                <AvatarEditor
                    url={avatarUrl}
                    onUpload={(url: string) => {
                        setAvatarUrl(url);
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                        updateProfile({ username, website, avatar_url: url });
                    }}
                />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Input placeholder='Email' value={user?.email} size='md' isDisabled />
            </View>
            <View style={styles.verticallySpaced}>
                <Input
                    placeholder='Username'
                    value={username || ''}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <Input
                    placeholder='Website'
                    value={website || ''}
                    onChangeText={(text) => setWebsite(text)}
                />
            </View>

            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onPress={() => updateProfile({ username, website, avatar_url: avatarUrl })}
                    disabled={loading}
                >
                    {loading ? 'Loading ...' : 'Update'}
                </Button>
            </View>

            <View style={styles.verticallySpaced}>
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                <Button variant='outline' onPress={() => supabase.auth.signOut()}>
                    Sign Out
                </Button>
            </View>
        </View>
    );
}
