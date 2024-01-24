import { Employee } from "src/app/login/Models/employees.interface";
import { Client } from "./clients.interface";

export interface Ticket{
    status: boolean,
    employee: Employee,
    client: Client
}