import { atom } from "recoil"

export const TodoNameState = atom<string>({
    key: "todonamestatekey",
    default: ""
})