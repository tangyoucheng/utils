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

