import { ContentResponse, LanguagesEnum } from "./ContentContext";

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
