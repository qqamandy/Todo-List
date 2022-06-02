import React, { useState } from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {
     AiFillPlusCircle,
     AiFillEdit,
     AiFillDelete,
} from "react-icons/ai";
import TodoRow from '../component/TodoRow';

const initRows = []
//12
const Main = () => {
     const [rows, setRows] = useState(initRows)
     const [todo, setTodo] = useState("")
     const [date, setDate] = useState("")
     useEffect(() => {
          const dataKey = localStorage.getItem("dataKey") || JSON.stringify(initRows)
          const lacalRows = JSON.parse(dataKey)
          setRows(lacalRows)
     }, [])

     useEffect(() => {
          //把資料轉換成JSON = 字串
          const rowsStr = JSON.stringify(rows)
          //儲存local 副本
          localStorage.setItem("dataKey", rowsStr)
     }, [rows])

     return (
          <div>
               <div className='px-3 py-1'>
                    <div className='flex '>
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
                         <AiFillPlusCircle className='w-8 h-8 ml-auto hover:text-slate-500'

                              onClick={() => {
                                   if (!todo || !date) return alert("請完整輸入")
                                   //宣告一個新的todo
                                   const newRow = {
                                        id: uuidv4(),
                                        content: todo,
                                        //抓const 後todo的
                                        date: date,
                                   }
                                   //複製rows
                                   const newRows = [...rows]
                                   //rows新增一個新todo
                                   newRows.push(newRow)
                                   // console.log(newRows)

                                   //新的rows覆蓋舊的rows
                                   setRows(newRows)

                                   //把資料轉換成 JSON + 字串
                                   const newRowStr = JSON.stringify(newRows)
                                   //儲存副本+
                                   localStorage.setItem("data", newRowStr)

                                   //把input清空
                                   setTodo("")
                                   setDate("")
                              }}
                         />
                    </div>
               </div>
               {rows.map((row) => {
                    return <TodoRow key={row.content} row={row} rows={rows} setRows={setRows} />
               })}

          </div>

     )
}

export default Main