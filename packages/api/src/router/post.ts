import { z } from 'zod';

import { publicProcedure, router } from '../trpc';

// eslint-disable-next-line import/prefer-default-export
export const postRouter = router({
    all: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.post.findMany();
    }),
    byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
        return ctx.prisma.post.findFirst({ where: { id: input } });
    }),
    create: publicProcedure
        .input(z.object({ title: z.string(), content: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.post.create({ data: input });
        }),
});
