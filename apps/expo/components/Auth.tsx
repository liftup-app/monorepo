import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

import { signUpWithGoogle, useSignInWithPassword } from '../lib/auth';

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 12,
    },
    verticallySpaced: {
        flexDirection: 'column',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    },
    mt20: {
        marginTop: 20,
    },
});

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signInWithPassword, loading } = useSignInWithPassword();

    return (
        <View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Input
                    label='Email'
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder='email@address.com'
                    autoCapitalize='none'
                />
            </View>
            <View style={styles.verticallySpaced}>
                <Input
                    label='Password'
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry
                    placeholder='Password'
                    autoCapitalize='none'
                />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button
                    title='Sign in'
                    disabled={loading}
                    onPress={() => signInWithPassword(email, password)}
                />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button
                    title='Sign up with google'
                    disabled={loading}
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onPress={() => signUpWithGoogle()}
                />
            </View>
        </View>
    );
}
