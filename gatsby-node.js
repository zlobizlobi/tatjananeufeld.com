const path = require('path');

const fs = require('fs-extra');

const formatLocale = locale => {
    switch (locale) {
        case 'en':
            return 'en-us';
        case 'de':
            return 'de-de';
        default:
            return 'ru';
    }
};

exports.onPostBuild = () => {
    console.log('Copying locales');
    fs.copySync(
        path.join(__dirname, '/src/locales'),
        path.join(__dirname, '/public/locales')
    );
};

const locales = ['en-us', 'de-de', 'ru'];

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    await deletePage(page);

    locales.forEach(locale => {
        const originalPath = page.path;

        createPage({
            ...page,
            context: {
                ...page.context,
                originalPath,
                locale: formatLocale(locale),
            },
        });
    });
};
