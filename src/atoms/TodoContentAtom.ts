import { atom } from "recoil"

export const TodoContentState = atom<string>({
    key: "todocontentstatekey",
    default: ""
})
