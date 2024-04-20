import { writable } from "svelte/store";

export const gameStateStore = writable({ turn: "black", playingCol: 3 });
