export class Employee {
    id: number=0;
    name:string='';
    lastName: string='';
    email: string='';
    age!: number;
    doj: any;
    gender: string='male';
    isMarried!: number;
    isActive!: number;
    designationID:number=0;
    designation: string='';
}


export class Designation {

    id: number=0;
    designation: string='';
}