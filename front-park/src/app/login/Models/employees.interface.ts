import { RolEmployee } from "./rolEmployee.interface";

export interface Employee {
    name: string,
    email: string,
    schedule: string,
    age: number,
    password: string,
    rol: RolEmployee
}