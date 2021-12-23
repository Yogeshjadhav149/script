class Person {
    private name:string;
    private adhar:string;
    private mobileno:string;

    constructor(Name:string,Adhar:string,Mobile:string){
        this.name=Name;
        this.adhar=Adhar;
        this.mobileno=Mobile;

    }

    display():void{
        console.log("Name :"+ this.name);
        console.log("Adhar :"+ this.adhar);
        console.log("Mobile no :"+ this.mobileno);
    }

}

let p=new Person("yogesh","2345673456","8888888888");
p.display();