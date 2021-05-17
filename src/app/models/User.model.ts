export class User {
    name: string;
    lastName: string;
    identification: string;
    amountCollected: string;
    referals: string;

    static create(name: string, lastName: string, identification: string): User {
        let user = new User();
        user.name = name;
        user.lastName = lastName;
        user.identification = identification;
        return user;
    }
}
