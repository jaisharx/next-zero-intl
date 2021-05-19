# Next Zero Intl

Next Zero Intl is a next.js library built on top of google-translate-apis that you can just drop in your projects, and internationalize your app/website with zero config. Check a demo [here](https://next-zero-intl-demo.vercel.app/).

## Installation

```sh
npm install next-zero-intl
or
yarn intall next-zero-intl
```

## Adding

First, you need to configure the `<TranslateProvider/>` in your \_app.js file.

```js
// pages/_app.js
import { TranslateProvider } from 'next-zero-intl';

export default function MyApp({ Component, pageProps }) {
    return (
        <TranslateProvider>
            <Component {...pageProps} />
        </TranslateProvider>
    );
}
```

Now create a translate.js file inside next.js API directory, and add the following code.

```js
// pages/api/translate.js
import { handleTranslation } from 'next-zero-intl/api';

export default handleTranslation;
```

and that's it, you've successfully configured `next-zero-intl` in your next.js app.

## Usage

We provide you two simple hooks `useTranslations` & and `useLocale` to very simply add internationalization in your app. A simple example of how you'd use the translation hook is below.

```js
import { useTranslation } from 'next-zero-intl';

const { t } = useTranslation();

function SomeComponent() {
    render(<p>{t('Hello')}</p>);
}
```

We try to be as less opinionated as possible, in order to change the text in above component, you can write a simple select component that uses `useLocale` hook.

```js
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
        </select>
    );
}
```

## Contributing

Next Zero Intl is an open source projects that would love any community support. Check the contributing guidlines here.

### License

Next Zero Intl is [MIT licensed]('/LICENSE')
