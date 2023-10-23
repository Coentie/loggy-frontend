/**
 * @param {string} title
 */
export class Issue {
    getTitle() {
        return this.title;
    }

    getStacktrace() {
        return this?.occurrence?.stacktrace?.trace ??  [];
    }
}
