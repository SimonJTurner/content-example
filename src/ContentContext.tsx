import { createContext, useCallback, useState } from "react";
import { getContentEntry, getEntriesByType } from "./content-service";

export enum LanguagesEnum {
    EnglishUS = 'en-US',
    EnglishGB = 'en-gb',
    SpanishMX = 'es',
    FrenchFrance = 'fr-fr',
    SpanishSpain = 'es-es'
}

export type ContentResponse = {
    Item: any;
}

export type ContentResponseCollection = {
    skip: number;
    limit: number;
    totalCount: number;
    items: [any];
    includedEntries: [any]
    includedAssets: [any]
}

export type ContentContextState = {
    selectedLanguage: LanguagesEnum;
    setLanguage: (language: LanguagesEnum) => void;
    getContent: (id: string) => Promise<ContentResponse>;
    getContentCollectionByType: (contentType: string) => Promise<ContentResponseCollection>;
}

const ContentContext = createContext({} as ContentContextState);

const ContentContextProvider = ({ children }) => {
    const [_language, _setLanguage] = useState<LanguagesEnum>(LanguagesEnum.EnglishUS);
    return (
        <ContentContext.Provider
            value={{
                selectedLanguage: _language,
                setLanguage: _setLanguage,
                getContent: useCallback((id: string) => getContentEntry(id, _language), [_language]),
                getContentCollectionByType: useCallback((contentType: string) => getEntriesByType(contentType, _language), [_language])
            }}>
            {children}
        </ContentContext.Provider >
    );
};

export { ContentContext, ContentContextProvider };
