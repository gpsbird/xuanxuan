import PinYin from 'pinyin';

/**
 * Convert str to pin str
 * @param  {string} str
 * @param  {array|string} styles
 * @param  {string} separator
 * @return {string}
 */
export default (str, styles, separator) => {
    if (!styles) {
        styles = [PinYin.STYLE_NORMAL, PinYin.STYLE_FIRST_LETTER, PinYin.STYLE_INITIALS];
    }
    if (!Array.isArray(styles)) {
        styles = [styles];
    }
    if (separator === undefined) {
        separator = ' ';
    }
    return styles.map(style => {
        if (typeof style === 'string') {
            switch (style) {
            case 'normal':
            case 'STYLE_NORMAL':
                style = PinYin.STYLE_NORMAL;
                break;
            case 'first-letter':
            case 'STYLE_FIRST_LETTER':
                style = PinYin.STYLE_FIRST_LETTER;
                break;
            case 'initials':
            case 'STYLE_INITIALS':
                style = PinYin.STYLE_INITIALS;
                break;
            }
        }
        return PinYin(str, {style}).map(x => x[0]).join('');
    }).join(separator);
};
