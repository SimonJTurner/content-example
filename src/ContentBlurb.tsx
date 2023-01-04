import { useContext, useEffect, useState } from "react";
import { ContentContext } from "./ContentContext";

type PromoItem = {
    title: string;
    description: string;
}

export const ContentBlurb = () => {
    const { getContent, getContentCollectionByType } = useContext(ContentContext);
    const [engineer, setEngineer] = useState('');
    const [promoItems, setPromoItems] = useState<[PromoItem]>();
    useEffect(() => {
        getContent("engineer").then(
            data => setEngineer(data.Item.Name)
        );
    }, [getContent]);

    useEffect(() => {
        getContentCollectionByType("promotionItem").then(
            data => setPromoItems(data.items)
        );
    }, [getContent]);

    return (
        <div>
            <p> {engineer} is a great Engineer</p>
            <p> {promoItems?.length > 0 ? promoItems[0].title : ''} is a promo Title</p>
            <p> {promoItems?.length > 0 ? promoItems[0]?.description : ''} is a promo description</p>
        </div>
    )
};