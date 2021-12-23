class Car{
    private name:string;
    private model:string;
    private prize:string;

    /* constructor(Name:string,Model:string,Prize:string){
        this.name=Name;
        this.model=Model;
        this.prize=Prize;
    } */

    constructor(){
        this.name="0";
        this.model="0";
        this.prize="0";
    }

    set(Name:string,Model:string,Prize:string):void{
        this.name=Name;
        this.model=Model;
        this.prize=Prize;
     }
   

    display():void{
        console.log("car is :"+this.name);
        console.log("model is :"+this.model);
        console.log("prize is :"+this.prize);
    }

}

let car1=new Car();
console.log (car1);
car1.set("Renault","Duster","1200000");
car1.display();