export default {
    repository: 'https://github.com/jaisharx/next-zero-intl', // project repo
    docsRepository: 'https://github.com/jaisharx/next-zero-intl/tree/main/docs', // docs repo
    branch: 'main', // branch of docs
    path: '/', // path of docs
    titleSuffix: ' – Zero Config Internationalization',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: 'MIT 2021 © Jai Sharma',
    footerEditOnGitHubLink: true, // will link to the docs repo
    logo: (
        <>
            <svg>...</svg>
            <span>Next Zero Intl - Zero Hassle Internationalization</span>
        </>
    ),
    head: (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="description" content="Zero hassle internationalization for your next.js apps." />
            <meta name="og:title" content="Next Zero Intl – Zero Config Internationalization" />
        </>
    ),
};
