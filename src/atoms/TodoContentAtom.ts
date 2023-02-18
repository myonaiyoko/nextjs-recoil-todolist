import { atom } from "recoil"

export const todoContentState = atom<string>({
    key: "todocontentstatekey",
    default: ""
})
