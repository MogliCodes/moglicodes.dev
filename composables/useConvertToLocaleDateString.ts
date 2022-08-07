export const useConvertToLocaleDateString = (
    _date,
    _locale = 'en-GB',
    _options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
) => {
    const date = new Date(_date)
    return date.toLocaleDateString(_locale, _options)
}