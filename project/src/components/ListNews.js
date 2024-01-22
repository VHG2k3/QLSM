import React, { useState, useEffect } from 'react'
import axios from '../api/apixm'

function ListNews() {
    
    const [listNews,setListNews] = useState([])

    const getAllUsers = async () => {
        let response = await axios.get("News")
        console.log("Object api news:", response);
        console.log("Data api news:", response.data);
        setListNews(response.data)
    }
    // Cập nhật dữ liệu khi component đc mount
    useEffect(() => {
        getAllUsers();
    }, [])

    let news = listNews.map((item,index)=>{
        return (    
                    <tr>
                    <th scope="row">{index+1}</th>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                        {item.updatedDate}
                    </td>
                    <td>{item.views}</td>
                    <td>{item.status}</td>
                    <td>
                        <button type="button" class="btn btn-primary me-1">Thêm</button>
                        <button type="button" class="btn btn-warning me-1">Sửa</button>
                        <button type="button" class="btn btn-danger me-1">Xóa</button>
                    </td>
                    
                </tr>
    )
    })

  return (
    <>
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">.No</th>
                <th scope="col">Mã</th>
                <th scope="col">Tiêu đề bài viết</th>
                <th scope="col">Ngày cập nhật</th>
                <th scope="col">Lượt xem</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Tác vụ</th>
            </tr>
        </thead>
        <tbody>
            {news}
        </tbody>
    </table>

</>
  )
}

export default ListNews