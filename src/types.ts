export type CalendarDate = {
    year: number;
    month: number;
    day?: number;
};

export type DayEvent = {
    date: CalendarDate;
    description: string;
    is_holiday: boolean;
};
