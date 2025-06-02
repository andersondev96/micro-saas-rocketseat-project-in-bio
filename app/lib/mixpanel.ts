import Mixpanel from "mixpanel";

const mixpanelEvent = Mixpanel.init("ebd5448f5c0cd940e84f3b9404b0b5d3");

export function trackServerEvent(eventName: string, properties: any) {
  if (process.env.NODE_ENV === "development") return;
  mixpanelEvent.track(eventName, properties);
}