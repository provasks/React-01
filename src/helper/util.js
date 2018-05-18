import faker from 'faker'

const util = {
    total: 100,
    getEmail: function (firstName, lastName) {
        return faker.internet.email(firstName, lastName);
    },
    getEmployeesData: function () {
        const employees = [];
        for (let index = 0; index < this.total; index++) {
            var employee = {
                id: (index + 1),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                phone: faker.phone.phoneNumber(),
                avatar: faker.internet.avatar(),
                userName: faker.internet.userName(),
                jobTitle: faker.name.jobTitle(),
                company: faker.company.companyName()
            }
            employee.email = this.getEmail(employee.firstName, employee.lastName);
            employees.push(employee);
        }
        return employees;
    },
    sort: function (array, field, direction) {
        array.sort(function (a, b) {
            let x = a[field];
            let y = b[field];
            return (direction == 1) ?
                (x < y ? -1 : x > y ? 1 : 0) :
                (x < y ? 1 : x > y ? -1 : 0)
        });
        this.jerk();
    },
    filter: function (array = [], text = "") {
        let arr1 = [];
        if (Number.isInteger(Number.parseInt(text))) {
            arr1 = array.filter(item => item.id === Number.parseInt(text));
        }
        let arr2 = array.filter(item =>
            (item.firstName.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
                item.lastName.toLowerCase().indexOf(text.toLowerCase()) > -1));
        return [...arr1, ...arr2];
    },

    jerk: function () {
        window.scrollTo(0, 1)
        window.scrollTo(0, 0);
    }
}

export default util;