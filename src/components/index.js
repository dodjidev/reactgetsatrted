class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}

class Student extends Person {
    constructor(name, age, school) {
        // this.name = name;
        // this.age = age;
        this.school = school
        super(name, age)
    }
}

// class Student {
//     constructor(name, age, school) {
//         this.name = name;
//         this.age = age;
//         this.school = school
//     }
// }



let person = new Person('Joh Doe', 45)
let student = new Student('Joh Doe', 45, '3WA')