/**
 * 値が存在するか確認します。
 *
 * @param {*} value
 * @return {Boolean}
 */
function isDef (value) {
    return value !== undefined && value !== null;
}

/**
 * 値が存在しないか確認します。
 *
 * @param {*} value
 * @return {Boolean}
 */
function isUndef (value) {
    return value === undefined || value === null;
}

function makeMap (str, expectsLowerCase) {
    const map = Object.create(null);

    const list = Array<String> = str.split(,)
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }

    return ecpectsLowerCase 
        ? val => map[val.toLowerCase()]
        : val => map[val];
}
