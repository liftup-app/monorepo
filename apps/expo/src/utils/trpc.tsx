import type { AppRouter } from '@liftup/api';
/**
 * A wrapper for your app that provides the TRPC context.
 * Use only in _app.tsx
 */
import { transformer } from '@liftup/api/transformer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
/**
 * Extend this function when going to production by
 * setting the baseUrl to your production API URL.
 */
import Constants from 'expo-constants';
import { ReactNode, useState } from 'react';
/**
 * A set of typesafe hooks for consuming your API.
 */
export const trpc = createTRPCReact<AppRouter>();

const getBaseUrl = () => {
    /**
     * Gets the IP address of your host-machine. If it cannot automatically find it,
     * you'll have to manually set it. NOTE: Port 3000 should work for most but confirm
     * you don't have anything else running on it, or you'd have to change it.
     */
    const localhost = Constants.manifest?.debuggerHost?.split(':')[0];

    if (!localhost) throw new Error('failed to get localhost, configure it manually');
    return `http://${localhost}:3000`;
};

export default function TRPCProvider({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            transformer,
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                }),
            ],
        }),
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </trpc.Provider>
    );
}
