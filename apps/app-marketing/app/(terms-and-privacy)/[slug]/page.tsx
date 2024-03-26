import React from 'react';
import { MdxContent } from '@/components/MdxContent';
import { posts as rules } from '@/.velite'
import {TermsAndPrivacyProps} from "@/interfaces/TermsAndConditionsProps";

function getRuleBySlug(slug: string) {
    return rules.find(rule => rule.slug === slug)
}
export function generateMetadata({ params }: TermsAndPrivacyProps) {
    const rule = getRuleBySlug(params.slug)
    if (rule == null) return {}
    return { title: rule.title , description:rule.description}
}

export function generateStaticParams() {
    return rules.map(({ slug }) => ({ slug }))
}


const TermsConditionAndPrivacyPage = ({ params}:TermsAndPrivacyProps ) => {
    const rule = rules.find(i => i.slug === params.slug)
    return (
        <div className="md:ps-36 md:pe-36 md:pt-20 pt-5 md:pb-[16.3rem] px-6 pb-40">
            {
                rule &&
                    <MdxContent code={rule.content} />
            }
        </div>
    );
};

export default TermsConditionAndPrivacyPage;