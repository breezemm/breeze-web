import React from 'react';

const Page = () => {
    return (
        <div>
          hello word
        </div>
    );
};

export default Page;


export async function generateStaticParams() {
    const articles = await getAllArticles();

    return articles.map((article) => ({
        slug: article.meta.slug
    }));
}