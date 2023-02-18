import { atom } from "recoil"

export const todoIdState = atom<string>({
    key: "todoidstate",
    default: ""
})
