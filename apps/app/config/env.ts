import {createEnv} from "@t3-oss/env-nextjs";
import {z} from "zod";

export const env = createEnv({

    server: {},

    client: {
        NEXT_PUBLIC_BREEZE_API_URL: z.string().url(),
    },

    runtimeEnv: {
        NEXT_PUBLIC_BREEZE_API_URL:
        process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
});
