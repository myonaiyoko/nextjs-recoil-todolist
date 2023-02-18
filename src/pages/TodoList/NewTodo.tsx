import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useRecoilState } from "recoil"
import { TodoIdState } from '@/atoms/TodoIdAtom'
import { TodoNameState } from "@/atoms/TodoNameAtom"
import { TodoContentState } from '@/atoms/TodoContentAtom'
import { TodoListState } from '@/atoms/TodoListAtom'
import TodoType from '@/types/TodoType'

export const NewTodo = () => {
    const [todoId, setTodoId] = useRecoilState(TodoIdState)
    const [todoName, setTodoName] = useRecoilState(TodoNameState)
    const [todoContent, setTodoContent] = useRecoilState(TodoContentState)
    const [todoList, setTodoList] = useRecoilState(TodoListState)

    const todoIdOnChage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodoId(event.target.value)
    }
    const todoNameOnChage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodoName(event.target.value)
    }
    const todoContentOnChage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodoContent(event.target.value)
    }

    const addTodoList = () => {
      const addcontent: TodoType = {id: todoId, name: todoName, content: todoContent}
      setTodoList([...todoList, addcontent])

      clearTodo()
    }
    const clearTodo = () => {
      setTodoId("")
      setTodoName("")
      setTodoContent("")
    }
    const clearTodoList = () => {
      setTodoList([])
    }

    return (
        <>
        <main>
          <div>
            <br/>
            <table>
              <tr>
                <td>ID</td>
                <td><input type="text" value={ todoId } onChange={ todoIdOnChage } /></td>
              </tr>
              <tr>
                <td>NAME</td>
                <td><input type="text" value={ todoName } onChange={ todoNameOnChage } /></td>
              </tr>
              <tr>
                <td>CONTENT</td>
                <td><input type="text" value={ todoContent } onChange={ todoContentOnChage } /></td>
              </tr>
            </table>
          </div>
          <div>
            <table>
              <tr>
                <td>
                  <input type="button" value="TODOを追加" onClick={ addTodoList } />
                  &nbsp;&nbsp;&nbsp;
                  <input type="button" value="TODOをクリア" onClick={ clearTodoList } />
                </td>
              </tr>
            </table>
            <br/>
          </div>
        </main>
      </>
      )
}