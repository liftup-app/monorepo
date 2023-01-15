import { Session, User } from '@supabase/supabase-js';
import { Buffer } from 'buffer';
import { makeRedirectUri, startAsync } from 'expo-auth-session';
import { useState } from 'react';

import supabase from './supabase';

// TOOD(LIF-33): Remove this after adding in rn-nodify
global.Buffer = Buffer;

export const useSignInWithPassword = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<{
        user: User | null;
        session: Session | null;
    }>();

    const signInWithPassword = (email: string, password: string) => {
        setLoading(true);
        supabase.auth.signInWithPassword({ email, password }).then((response) => {
            setLoading(false);
            setError(response.error?.message || null);
            setData(response.data);
        });
    };

    return { signInWithPassword, loading, error, data };
};

export const useSignUpWithPassword = async () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<{
        user: User | null;
        session: Session | null;
    }>();

    const signUpWithPassword = (email: string, password: string) => {
        setLoading(true);
        supabase.auth.signUp({ email, password }).then((response) => {
            setLoading(false);
            setError(response.error?.message || null);
            setData(response.data);
        });
    };

    return { signUpWithPassword, loading, error, data };
};

export const signUpWithGoogle = async () => {
    const redirectUrl = makeRedirectUri({
        path: '/auth/callback',
    });

    const authResponse = await startAsync({
        authUrl: `${process.env.LIFTUP_SUPABASE_URL}/auth/v1/authorize?provider=google&redirect_to=${redirectUrl}`,
        returnUrl: redirectUrl,
    });

    if (authResponse.type === 'success') {
        await supabase.auth.setSession({
            access_token: authResponse.params.access_token,
            refresh_token: authResponse.params.refresh_token,
        });
        supabase.auth.refreshSession();
    }
};
