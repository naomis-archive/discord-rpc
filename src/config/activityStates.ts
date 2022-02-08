import { ActivityChoice } from "../interfaces/ActivityChoice";

/**
 * Used to map the choices from the prompt to the states for the presence.
 */
export const activityStates: { [Property in ActivityChoice]: string } = {
  "Client Work": "Focusing on work",
  Meeting: "In a meeting!",
  "Personal Work": "Working on side projects",
  Gaming: "Lost in a game",
  AFK: "Not at her computer",
  Nothing: "Taking a break",
  "Signing Off": "Signing off. Good night!",
};