import { atom } from "recoil"

export const TodoIdState = atom<string>({
    key: "todoidstate",
    default: ""
})
