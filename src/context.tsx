import React, { createContext, useContext, useEffect, useState } from 'react';
import { getHashedString } from './lib/getHashedString';
import { getTranslatedText } from './lib/getTranslatedText';

const TranslationContext = createContext();

let originalArrayCopy = []; // storing default locale textArray
function TranslationProvider({ defaultLocale = 'en', children }) {
    const [locale, setLocale] = useState(defaultLocale);
    let [textArray, setTextArray] = useState([]);

    const t = (str) => {
        const id = getHashedString(str);

        let hasId = false;
        textArray.forEach((textObj) => {
            if (textObj.id === id) hasId = true;
        });

        if (!hasId) {
            textArray.push({ id: id, str: str });
        }

        let text = '';
        textArray.forEach((textObj) => {
            if (textObj.id === id) text = textObj.str;
        });

        return text;
    };

    useEffect(() => {
        // locale is default
        if (locale === defaultLocale) {
            if (originalArrayCopy.length === 0) {
                originalArrayCopy = JSON.parse(JSON.stringify(textArray));
                return;
            } else {
                setTextArray(originalArrayCopy);
                return;
            }
        }

        // locale is not default
        let AllText = '';
        originalArrayCopy.map((textObj) => {
            AllText += `${textObj.str}\n`;
        });

        getTranslatedText(AllText, locale).then((translatedText) => {
            const translatedtTextArray = translatedText.split('\n');

            const newTextArray = JSON.parse(JSON.stringify(textArray));
            translatedtTextArray.map((eachLine, idx) => {
                newTextArray[idx].str = eachLine;
            });
            setTextArray(newTextArray);
        });
    }, [locale]);

    return (
        <TranslationContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </TranslationContext.Provider>
    );
}

const useLocale = () => {
    const { locale, setLocale } = useContext(TranslationContext);

    return [
        locale,
        setLocale,
    ];
};

const useTranslation = () => {
    const { t } = useContext(TranslationContext);

    return {
        t,
    };
};

export { TranslationProvider, useLocale, useTranslation };
