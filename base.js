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

//----------------
// 乱数を生成する
//----------------

/**
 * 0 <= x < 1 の乱数を生成する。
 */
function createRandomBoolean1 () {
    return Math.random();
}

/**
 * -a から a までの乱数を生成する
 */
function createRandomNum2 (num) {
    return Math.random() * num * 2 - num;
}

/**
 * 1 / num の確率で true となる乱数を生成する
 * @example
 *  1 / 6 (約16%) の確率で true になる
 *  Math.random() * 6 > 5;
 *
 *  [参考]
 *  x = Math.random() * 6;
 *  0 <= x < 6
 *  0, 1, 2, 3, 4, 5 のうち 5 の確率は 1 / 6
 */
function createRandomBoolean1 (num) {
    return Math.random() * num > num - 1;
}

/**
 * 1 / num の確率で false となる乱数を生成する
 */
function createRandomBoolean2 (num) {
    // TODO
}
