import {join} from "node:path";
import {readFile} from "node:fs/promises";
// @ts-ignore
import matter from "gray-matter";
export const contentsPath = join(process.cwd(), 'contents');

export const getArticleBySlug = async (slug : string) => {
    const articlePath = join(contentsPath, `${slug}.mdx`)
    const raw = await readFile(articlePath)
    const {content} = matter(raw)

    return {
        content,
    }
}