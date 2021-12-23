var Car = /** @class */ (function () {
    /* constructor(Name:string,Model:string,Prize:string){
        this.name=Name;
        this.model=Model;
        this.prize=Prize;
    } */
    function Car() {
        this.name = "0";
        this.model = "0";
        this.prize = "0";
    }
    Car.prototype.set = function (Name, Model, Prize) {
        this.name = Name;
        this.model = Model;
        this.prize = Prize;
    };
    Car.prototype.display = function () {
        console.log("car is :" + this.name);
        console.log("model is :" + this.model);
        console.log("prize is :" + this.prize);
    };
    return Car;
}());
var car1 = new Car();
console.log(car1);
car1.set("Renault", "Duster", "1200000");
car1.display();
