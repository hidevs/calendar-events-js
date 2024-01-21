import { HTMLElement, parse } from "node-html-parser";
import { Date, Event } from "./types";

export class Calendar {
    private date: Date;

    constructor(date: Date) {
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
}
