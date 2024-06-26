export class User{
    firstname: string;
    lastname: string;
    birthDate: number;
    street: string;
    zipCode: string;
    city: string;
    email: string;

    constructor(obj?: any) {
        this.firstname = obj ? obj.firstname : '';
        this.lastname = obj ? obj.lastname : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.email =  obj ? obj.email : '';
    }
}