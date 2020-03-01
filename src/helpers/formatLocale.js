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

exports.formatLocale = formatLocale;
