
export const formatDate = (date) => {
    if (!date) {
        return;
    }

    const indexOfTime = date && date.indexOf('T')
    return date.substring(0, indexOfTime)
}