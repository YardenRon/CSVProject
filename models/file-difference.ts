import { Contact } from "./contact";

export class FileDifference {
    removed: Contact[];
    added: Contact[];
    changed: Contact[];

    constructor() {
        this.removed = [];
        this.added = [];
        this.changed = [];
    }
}