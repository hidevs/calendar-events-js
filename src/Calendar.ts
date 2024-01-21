import { HTMLElement, parse } from "node-html-parser";
import { CalendarDate, DayEvent } from "./types";

export class Calendar {
    private date: CalendarDate;

    constructor(date: CalendarDate) {
        this.date = date;
    }

    private get makeUrl(): string {
        return `https://www.time.ir/fa/event/list/0/${this.date.year}/${this.date.month}/${this.date.day || ""}`;
    }

    private async fetch(): Promise<HTMLElement> {
        return parse(await fetch(this.makeUrl).then((res) => res.text()));
    }

    async isHoliday(): Promise<boolean> {
        if (this.date.day === undefined) {
            throw new Error("The day in the date must be specified.");
        }

        const body = await this.fetch();

        return body.querySelectorAll("ul[class=list-unstyled] > li").some((el) => el.getAttribute("class")?.trim() === "eventHoliday");
    }

    private p2e(str: string): string {
        return str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
    }

    async events(): Promise<DayEvent[]> {
        const body = await this.fetch();

        return body.querySelectorAll("ul[class=list-unstyled] > li").map((el) => {
            const date = { ...this.date, day: this.date.day || +this.p2e(el.querySelector("span")?.text || "").replace(/\D/g, "") };
            const description = el.childNodes[2].text.trim();
            const is_holiday = el.getAttribute("class")?.trim() === "eventHoliday";

            return {
                date,
                description,
                is_holiday,
            };
        });
    }
}
