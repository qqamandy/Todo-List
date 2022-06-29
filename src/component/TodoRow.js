import React from 'react'
import {
     AiFillEdit,
     AiFillDelete,
     AiOutlineSend
} from "react-icons/ai";
import { useState } from "react";


const TodoRow = (props) => {
     const { row, rows, setRows } = props
     //跟main的是不一樣的，不會互相影響
     const [todo, setTodo] = useState("")
     const [date, setDate] = useState("")
     const [open, setOpen] = useState(false)
     return (
          <>
               <div className='flex items-center justify-around bg-slate-200'>
                    <div className='w-1/2 border-r'>TODO:{row.content}</div>
                    <div>TIME: {row.date}</div>
                    <div className='flex'>
                         <AiFillEdit onClick={() => {
                              setOpen(!open)

                         }}
                              className='w-5 h5 hover:text-slate-500' />
                         <AiFillDelete onClick={() => {


                              //抓取目前row id
                              const { id } = row;
                              //複製todo 清單
                              const newRows = [...rows];
                              //山選出跟目前 id 不同的項目
                              const result = newRows.filter((row) => {
                                   return row.id !== id
                              })
                              //覆蓋舊的清單
                              setRows(result)


                              // //把資料轉換成 JSON + 字串
                              // const newResultStr = JSON.stringify(result)
                              // //儲存副本+
                              // localStorage.setItem("data", newResultStr)
                         }}
                              className='w-5 h5 hover:text-slate-500' />
                    </div>
               </div>
               {open ? (<div className='flex items-center px-3 my-2'>
                    <input
                         type="text"
                         className='w-1/2 border-2 '
                         placeholder='totdo'
                         //當新增一個新todo後可以清空空格(setTodo=(""))
                         value={todo}
                         onChange={(e) => {
                              setTodo(e.target.value)
                         }}
                    />
                    <input
                         type="text"
                         className='w-1/2 mx-1 border-2'
                         placeholder='yyyy/mm/dd'
                         //當新增一個新todo後可以清空空格(setDate=(""))
                         value={date}
                         onChange={(e) => {
                              setDate(e.target.value)
                         }}
                    />
                    <AiOutlineSend  onClick={() => {
                         //抓取目前row id
                         const { id } = row;
                         //複製todo 清單
                         const newRows = [...rows];
                         //山選出跟目前 id 相同的項目
                         const targetIdx = newRows.findIndex((row) => {
                              return row.id === id
                         })
                         newRows[targetIdx] = {
                              content: todo,
                              date: date
                         }
                         setRows(newRows)


                         // //把資料轉換成 JSON + 字串
                         // const newRowsStr = JSON.stringify(newRows)
                         // //儲存副本+
                         // localStorage.setItem("data", newRowsStr)

                    }} className='w-8 h-8' />
               </div>) : (<></>)}

          </>
     )
}

export default TodoRow