export interface Employee{
    employeeId: number,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    city: String,
    state: String,
    status: String,
    deptId: number,
    userID: number,
    department: {
        departmentID: number,
        departmentName: string
    }
}