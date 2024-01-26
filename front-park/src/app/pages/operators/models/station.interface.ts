import { Atraction } from "./atraction.interface";

export interface Station {
    id: number,
    status: boolean,
    name: string,
    attractions: Atraction[],
}
