export type Date = {
    year: number;
    month: number;
    day?: number;
};

export type Event = {
    date: Date;
    description: string;
    is_holiday: boolean;
};
