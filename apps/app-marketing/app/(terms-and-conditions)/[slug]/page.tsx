import React from 'react';
import { MdxContent } from '@/components/mdx-content';
import { posts } from '@/.velite'



function getPostBySlug(slug: string) {
    return posts.find(post => post.slug === slug)
}

export function generateMetadata({ params }: PostProps) {
    const post = getPostBySlug('terms')
    if (post == null) return {}
    return {  description: post.description }
}

export function generateStaticParams() {
    return posts.map(({ slug }) => ({ slug }))
}
const TermsAndConditionPage = () => {
    const post = getPostBySlug('terms')
    return (
        <div>
            <MdxContent code={post?.content} />
        </div>
    );
};

export default TermsAndConditionPage;