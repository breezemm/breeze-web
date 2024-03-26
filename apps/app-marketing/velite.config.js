import { defineConfig, s } from 'velite'
export default defineConfig({
    collections: {
        posts: {
            name: 'Data', // collection type name
            pattern: 'data/**/*.mdx', // content files glob pattern
            schema: s
                .object({
                    slug: s.slug('data'),
                    content: s.mdx()
                })

        },
    }
})