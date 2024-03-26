import { defineConfig, s } from 'velite'
export default defineConfig({
    collections: {
        posts: {
            name: 'Data',
            pattern: 'rules/**/*.mdx',
            schema: s
                .object({
                    title:s.string(),
                    slug: s.slug('data'),
                    content: s.mdx(),
                    description: s.string(),
                })

        },
    }
})