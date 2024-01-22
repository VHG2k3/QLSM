import React from 'react'
import ListNews from './ListNews'

function News() {
    return (
        <div>

            <h1 className='mt-5'>
                QUẢN LÝ TIN TỨC
            </h1>
            <div className='mt-3'>
                <input type="text" placeholder='Nhập tiêu đề tìm kiếm -> Nhấn Enter' />
                <button type="button">Tìm kiếm</button>
            </div>
            <div className='mt-3 container d-flex'>
                <ListNews/>
            </div>

        </div>
    )
}

export default News