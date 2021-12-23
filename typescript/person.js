var Person = /** @class */ (function () {
    function Person(Name, Adhar, Mobile) {
        this.name = Name;
        this.adhar = Adhar;
        this.mobileno = Mobile;
    }
    Person.prototype.display = function () {
        console.log("Name :" + this.name);
        console.log("Adhar :" + this.adhar);
        console.log("Mobile no :" + this.mobileno);
    };
    return Person;
}());
var p = new Person("yogesh", "2345673456", "8888888888");
p.display();
