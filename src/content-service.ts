import { ContentResponse, ContentResponseCollection, LanguagesEnum } from "./ContentContext";

export function getContentEntry(id: string, locale: LanguagesEnum): Promise<ContentResponse> {
    let name = 'Simon';
    switch (locale) {
        case LanguagesEnum.SpanishMX:
        case LanguagesEnum.SpanishSpain:
            name = "Francisco";
            break;
        case LanguagesEnum.EnglishGB:
            name = "Nigel";
            break;
        case LanguagesEnum.FrenchFrance:
            name = "Kylian";
            break;
        default:
            break;
    }

    return Promise.resolve({
        Item: {
            Name: name
        }
    });
};
export function getEntriesByType(entryType: string, locale: LanguagesEnum): Promise<ContentResponseCollection> {
    return fetch(`${process.env.CONTENT_SERVICE}/content/entries?spaceId=${process.env.SPACE_ID}&environmentId=${process.env.ENV_ID}&contentfulApiKey=${process.env.CONTENTFUL_API_KEY}&api-version=1.0&content_type=${entryType}&locale=${locale}`, {
        headers: {
            "ApiKey": process.env.CONTENT_SERVICE_API_KEY
        }
    })
    .then(res => res.json())
    .catch(err => {
        console.error(`Ope! No translation found for ${locale}`);
        console.error(err);
    });
}
