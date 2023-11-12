class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;
    }

    assignOwner(owner) {
        if (owner.age > 18) {
            this.owner = owner;
        } else {
            console.log("Владелец автомобиля должен быть старше 18 лет.");
        }
    }

    CarInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год выписки: ${this.year}, Номерной знак: ${this.licensePlate}`);
        if (this.owner) {
            console.log("Информация про владельца:");
            this.owner.displayInfo();
        } else {
            console.log("Автомобиль не имеет владельца.");
        }
    }
}


const person1 = new Person("Славик", 20);
const person2 = new Person("Маша", 17);

const car1 = new Car("Nissan", "GTR", 2022, "ВН1234АИ");
const car2 = new Car("Ferrari", "SF90", 2021, "НН5678КК");

car1.assignOwner(person1);
car2.assignOwner(person2); 

car1.displayCarInfo();
car2.displayCarInfo();