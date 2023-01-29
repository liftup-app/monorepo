import 'react-native-url-polyfill/auto';

import { ReactNode, useEffect } from 'react';

import supabase from '../lib/supabase';
import useGlobalStore from '../hooks/useGlobalStore';
import Login from '../screens/Login/Login';

export interface AuthWrapperProps {
    children?: ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
    const { user, setUser } = useGlobalStore((state) => ({
        user: state.user,
        setUser: state.setUser,
    }));

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user || null);
        });

        const listener = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });

        return () => {
            listener.data.subscription.unsubscribe();
        };
    }, [setUser]);

    if (!user) {
        return <Login />;
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
}
