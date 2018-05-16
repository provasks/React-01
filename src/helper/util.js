import faker from 'faker'

const util = {
    total: 50,
    getEmail: function (firstName, lastName) {
        return faker.internet.email(firstName, lastName);
    },
    getEmployees: function () {
        const employees = [];
        for (let index = 0; index < this.total; index++) {
            var employee = {
                id: (index + 1),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                phone: faker.phone.phoneNumber(),
                avatar: faker.internet.avatar(),
                description: faker.lorem.paragraph()
            }
            employee.email = this.getEmail(employee.firstName, employee.lastName);
            employees.push(employee);
        }
        return employees;
    },
    jerk: function(){
        window.scrollTo(0, 1)
        window.scrollTo(0,0);
    }
}

export default util;