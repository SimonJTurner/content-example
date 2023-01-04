import { createContext, useCallback, useState } from "react";
import { getContentEntry } from "./content-service";

export enum LanguagesEnum {
    EnglishUS = 'en-us',
    EnglishGB = 'en-gb',
    SpanishMX = 'es-mx',
    FrenchFrance = 'fr-fr',
    SpanishSpain = 'es-es'
}

export type ContentResponse = {
    Item: any;
}

export type ContentContextState = {
    selectedLanguage: LanguagesEnum;
    setLanguage: (language: LanguagesEnum) => void;
    getContent: (id: string) => Promise<ContentResponse>;
}

const ContentContext = createContext({} as ContentContextState);

const ContentContextProvider = ({ children }) => {
    const [_language, _setLanguage] = useState<LanguagesEnum>(LanguagesEnum.EnglishUS);
    return (
        <ContentContext.Provider
            value={{
                selectedLanguage: _language,
                setLanguage: _setLanguage,
                getContent: useCallback((id: string) => getContentEntry(id, _language), [_language])
            }}>
            {children}
        </ContentContext.Provider >
    );
};

export { ContentContext, ContentContextProvider };
