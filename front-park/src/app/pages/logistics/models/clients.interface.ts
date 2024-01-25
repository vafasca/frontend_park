import { Promotion } from "./promotion.interface";

export interface Client {
    name: string,
    ci: string,
    email: string,
    phone: string,
    age: number,
    height: number,
    promotion: Promotion,
    id: number
}