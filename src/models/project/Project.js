/**
 * Represents a project
 *
 * @class
 *
 * @param {int} id
 * @param {string} name
 * @param {string} key
 */
export class Project {
    getName() {
        return this.name;
    }

    getIssueData() {
        return this.issueAggregate
    }
}
