import {fileURLToPath} from "node:url";
import createJiti from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./configs/env.ts");


/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@breeze/ui'],
    experimental: {
        optimizePackageImports: ['@breeze/ui'],
        staleTimes: {
            dynamic: 30,
            static: 180,
        },
    },
};

export default nextConfig;
