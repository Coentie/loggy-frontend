export default {
    /**
     * Generates a unique string
     *
     * @param {string} prefix
     * @returns {string}
     */
    generateUniqueId: (prefix) => {
        return (prefix ?? null) + Math.random().toString(36).substring(2);
    }
}
