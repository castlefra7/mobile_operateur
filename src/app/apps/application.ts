export interface Unit {
    id?: number,
    name?: string
}

export interface Application {
    id?: number;
    name?: string;
    internet_application_id?: number;
    t_type?: string;
    unit?: Unit[];
}