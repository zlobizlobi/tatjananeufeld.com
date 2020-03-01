const path = require('path');

const fs = require('fs-extra');

const { formatLocale } = require('./src/helpers/formatLocale');

exports.onPostBuild = () => {
    console.log('Copying locales');
    fs.copySync(
        path.join(__dirname, '/src/locales'),
        path.join(__dirname, '/public/locales')
    );
};

const locales = ['en-us', 'de-de', 'ru'];

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    deletePage(page);

    locales.forEach(locale => {
        createPage({
            ...page,
            context: {
                ...page.context,
                locale: formatLocale(page.context.intl.language),
            },
        });
    });
};
