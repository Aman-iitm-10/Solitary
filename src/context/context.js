import { createContext } from "react";

export const showEventDetailsContext = createContext(false);
export const selectedEventContext = createContext(null);
export const categoryContext = createContext({
    eventType: "All",
    organization: "All",
    date: "All",
});