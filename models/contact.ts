export class Contact {
    id: number;
    firstName: string;
    lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    isSame(contact: Contact): boolean {
        return this.id === contact.id &&
                this.firstName === contact.firstName &&
                this.lastName === contact.lastName;
    }

    toString(): string {
        return `${this.firstName} ${this.lastName} - ${this.id}`;
    }
}