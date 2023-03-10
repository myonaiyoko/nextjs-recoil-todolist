import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { NewTodo } from './NewTodo'
import { TodoList } from './TodoList'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const TodoTopPageContent = () => {
  return (
    <>
      <Head>
        <title>TODO LIST</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/" className={styles.linkstyle}>TOPへ</Link>
        <div>
          <NewTodo />
        </div>
        <div>
          <TodoList />
        </div>
      </main>
    </>
  )
}
export default TodoTopPageContent