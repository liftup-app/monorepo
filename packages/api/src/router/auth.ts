import { protectedProcedure, publicProcedure, router } from '../trpc';

// eslint-disable-next-line import/prefer-default-export
export const authRouter = router({
    getSession: publicProcedure.query(({ ctx }) => {
        return ctx.session;
    }),
    getSecretMessage: protectedProcedure.query(() => {
        // testing type validation of overridden next-auth Session in @liftup/auth package
        return 'you can see this secret message!';
    }),
});
