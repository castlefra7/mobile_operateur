export interface Unit {
    id?: number,
    name?: string
}

export interface Application {
    id?: number,
    name?: string,
    units?: Unit[],
    amount?: number
}