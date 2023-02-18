import TodoType from "@/types/TodoType"
import { atom } from "recoil"

export const todoListState = atom<TodoType[]>({
    key: "todoliststatekey",
    default: [],
})
