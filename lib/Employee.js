// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return `Employee`;
    }
}

// const jason = new Employee("Jason", "1", "jhgnuyen99@gmail.com");
// console.log(jason);
// console.log(jason.getName());
// console.log(jason.getId());
// console.log(jason.getEmail());
// console.log(jason.getRole());
module.exports = Employee;
