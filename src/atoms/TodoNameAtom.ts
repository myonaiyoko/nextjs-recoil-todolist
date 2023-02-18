import { atom } from "recoil"

export const todoNameState = atom<string>({
    key: "todonamestatekey",
    default: ""
})