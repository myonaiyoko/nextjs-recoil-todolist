import { useRecoilValue } from "recoil"
import { todoListState } from "@/atoms/TodoListAtom"
import { todoListCountSelector } from "@/selectors/TodoListCountSelector"


export const TodoList = () => {
    const todoList = useRecoilValue(todoListState)
    const todoListCount = useRecoilValue(todoListCountSelector)
    
    return (
        <>
        <main>
            <div>
                {todoListCount}
                <table border={1}>
                    <tr>
                        <td width={50} align="center">ID</td>
                        <td width={200} align="center">NAME</td>
                        <td width={500} align="center">CONTENT</td>
                    </tr>
                    {todoList.map((item) => (
                        <tr>
                            <td>{ item.id }</td>
                            <td>{ item.name }</td>
                            <td>{ item.content }</td>
                        </tr>
                    ))}
                </table>
            </div>
        </main>
      </>
    )
}