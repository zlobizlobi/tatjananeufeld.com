export const jsonParse = string => {
    const jsonStringifiedString = JSON.stringify(string);

    return JSON.parse(JSON.parse(jsonStringifiedString));
};
