import React, { useState } from 'react'
import ListCategories from './ListCategories'
import Form from './Form'


export default function Categories() {
    const [Toggle, setToggle] = useState(false)

    const handelAddNew=()=>{
        setToggle(true)
    }

    let objForm = Toggle===true?<Form/>:""

  return (
    <div>

        <h1 className='mt-5'>
            QUẢN LÝ DANH MỤC
        </h1>
        <div className='mt-3'>
                <input type="text" placeholder='Nhập tiêu đề tìm kiếm -> Nhấn Enter'/>
                <button type="button">Tìm kiếm</button>
        </div>
        <div className='mt-3 container d-flex'>
            <div className='col-8 border'>
                <ListCategories onAdd={handelAddNew}/>
            </div>
            <div className='col-4 ms-5 border'>
                {objForm}
            </div> 
        </div>
       
    </div>
  )
}
