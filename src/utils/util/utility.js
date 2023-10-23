/**
 * Maps an array of objects to a specific class.
 *
 * @param {Array} objsValues
 * @param {Class} target
 * @returns {*}
 */
export function mapAll(objsValues, target) {
    return objsValues.map((obj) => mapTo(obj, target));
}

/**
 * Maps an object to a class.
 *
 * @param {Object} obj
 * @param {Class} target
 * @returns {*}
 */
export function mapTo(obj, target) {
    const t = new target();

    for (const [key, value] of Object.entries(obj)) {
        t[key] = value;
    }

    return t;
}


