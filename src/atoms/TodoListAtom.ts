import TodoType from "@/types/TodoType"
import { atom } from "recoil"

export const TodoListState = atom<TodoType[]>({
    key: "todoliststatekey",
    default: [],
})
