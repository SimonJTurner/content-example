import { useContext, useEffect, useState } from "react";
import { ContentContext } from "./ContentContext";

export const ContentBlurb = () => {
    const { getContent, } = useContext(ContentContext);
    const [engineer, setEngineer] = useState('');
    useEffect(() => {
        getContent("engineer").then(
            data => setEngineer(data.Item.Name)
        );
    }, [getContent]);

    return (
        <div>
            <p> {engineer} is a great Engineer</p>
        </div>
    )
};