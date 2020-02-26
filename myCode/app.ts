interface Person{
    Name: string;
    Age: string;
}
class Student implements Person{
    Name:string;
    Age:string;
    Studentclass:string;
    Favsubject:string;
    constructor(pname:string, age: string, stuclass:string, favsub:string){
        this.Name=pname;
        this.Age=age;
        this.Studentclass=stuclass;
        this.Favsubject=favsub;
    }
    
}

class School{
    schoolname: string;
     sarray:Student[]=new Array();
    constructor( sname: string, stuarray: Student[]){
        this.schoolname=sname;
        this.sarray=stuarray;
    }
}

function submit(){
  
    let name=(<HTMLInputElement><unknown>document.getElementById("sname")).value;
    let age=(<HTMLInputElement>document.getElementById("age")).value;
    let sclass=(<HTMLInputElement>document.getElementById("sclass")).value;
    let fsub=(<HTMLInputElement>document.getElementById("fsub")).value;
    let schoolname=(<HTMLInputElement>document.getElementById("schoolname")).value;
    let s1:Student=new Student(name[0], age[0], sclass[0], fsub[0]);
}

function search(){
    
}




