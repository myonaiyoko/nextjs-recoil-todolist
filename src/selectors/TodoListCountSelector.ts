import { todoListState } from "@/atoms/TodoListAtom"
import { selector } from "recoil"

export const todoListCountSelector = selector<string>({
    key: "todolistcountselector",
    get: ({get}) => {
        const todoList = get(todoListState)
        const count = todoList.length
        if (count === 0) {
            return "未登録"
        } else {
            return todoList.length + "件"
        }
    }
})