import faker from 'faker'

export default class Util {
    constructor(config) {
        this.config = config;
        this.allEmployees = this.getAllEmployees(this.config.total);
        this.filteredAndSortedEmployees = [];
    }
    getAllEmployees(total) {
        const employees = [];
        for (let index = 0; index < total; index++) {
            let employee = {
                id: (index + 1),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                phone: faker.phone.phoneNumber(),
                avatar: faker.internet.avatar(),
                // userName: faker.internet.userName(),
                jobTitle: faker.name.jobTitle(),
                company: faker.company.companyName()
            }
            employee.email = (function (firstName, lastName) {
                return faker.internet.email(firstName, lastName);
            }(employee.firstName, employee.lastName))
            employees.push(employee);
        }
        return employees;
    }
    getEmployeesData(state) {
        let filteredEmployees = this.filter(this.allEmployees, state.filterText);
        this.filteredAndSortedEmployees = this.sort(filteredEmployees, state.field, state.direction);
        state.pageCount = Math.ceil(this.filteredAndSortedEmployees.length / this.config.pageSize);
        return this.getMore(state);
    }
    filter(collection = [], text = "") {
        return collection.filter(item =>
            item.id.toString().toLowerCase().indexOf(text.toLowerCase()) > -1 ||
            item.firstName.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
            item.lastName.toLowerCase().indexOf(text.toLowerCase()) > -1);
    }
    sort(collection = [], field = 'id', direction = 1) {
        return collection.sort(function (a, b) {
            let x = a[field];
            let y = b[field];
            return (direction == 1) ?
                (x < y ? -1 : x > y ? 1 : 0) :
                (x < y ? 1 : x > y ? -1 : 0)
        });
    }
    getMore(state) {
        if (state.pageCount > state.currentPage) {
            state.currentPage++;
            let from = (state.currentPage - 1) * this.config.pageSize;
            let to = from + this.config.pageSize;
            return this.filteredAndSortedEmployees.slice(from, to);
        }
    }
}