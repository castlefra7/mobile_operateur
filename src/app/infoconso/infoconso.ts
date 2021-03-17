import { Application } from "../apps/application";

export interface Forfait {
    name?: string,
    applications?: Application[],
}

export interface InfoConso {
    resteCred?: string,
    forfaits?: Forfait[]
}