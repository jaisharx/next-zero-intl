import { useLocale } from 'next-zero-intl';
import { useState } from 'react';

export default function ChangeLocale() {
    const { locale, setLocale } = useLocale();
    const [selected, setSelected] = useState(locale);

    const onSelectHandler = (e) => {
        setSelected(e.target.value);
        setLocale(e.target.value);
    };

    return (
        <select onChange={onSelectHandler} value={selected}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="bn">Bengali</option>
            <option value="gl">Galician</option>
            <option value="is">Icelandic</option>
            <option value="ru">Russian</option>
        </select>
    );
}
