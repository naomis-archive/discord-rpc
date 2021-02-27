import { Presence } from "discord-rpc";

export interface ExtendedActivity extends Presence {
    buttons: {
        label: string;
        url: string;
    }[]
}