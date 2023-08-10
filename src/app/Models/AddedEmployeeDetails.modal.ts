export class Employees {
    public Name: string;
    public Id:number;
    public Email:string;
    public DOB:Date;
    public Gender:string;
    constructor(Name:string, Id:number, Email:string,DOB:Date,Gender:string) {
        this.Name= Name;
        this.Id= Id;
        this.Email=Email;
        this.DOB = DOB;
        this.Gender = Gender;
    }
}