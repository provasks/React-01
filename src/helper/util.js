import faker from 'faker'

const util = {
    total: 10,
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
    }
}

export default util;