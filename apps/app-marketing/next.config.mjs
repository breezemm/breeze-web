/** @type {import('next').NextConfig} */
import {withContentlayer} from 'next-contentlayer'

const nextConfig = {
  transpilePackages: ['@breeze/ui'],
};

export default withContentlayer(nextConfig);
