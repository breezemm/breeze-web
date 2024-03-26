import { defineConfig, s } from 'velite'
export default defineConfig({
    collections: {
        posts: {
            name: 'Data', // collection type name
            pattern: 'rules/**/*.mdx', // content files glob pattern
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