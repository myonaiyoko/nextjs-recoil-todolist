import { Head } from "next/document"
import styles from '@/styles/Home.module.css'
import { useRecoilValue } from "recoil"
import { TodoListState } from "@/atoms/TodoListAtom"

export const TodoList = () => {
    const todoList = useRecoilValue(TodoListState)
    
    return (
        <>
        <main>
            <div>
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