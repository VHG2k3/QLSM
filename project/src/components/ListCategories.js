import React, { useState,useEffect } from 'react'
import axios from '../api/apixm'

function ListCategories({onAdd}) {
    const [listCategories, setListCategories] = useState([]);

    const getAllUsers = async () => {
        let response = await axios.get("Categories")
        console.log("Object api categories:", response);
        console.log("Data api categories:", response.data);
        setListCategories(response.data)
    }
    // Cập nhật dữ liệu khi component đc mount
    useEffect(() => {
        getAllUsers();
    }, [])

    const handelAddNew=()=>{
        onAdd(true)
    }

    let categorie = listCategories.map((item,index)=>{
        return  <tr>
                <td scope="row">{index+1}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>
                                {item.updatedDate}
                            </td>
                            <td>{item.orders}</td>
                            <td>{item.status}</td>  
                <td>
                    <button type="button" class="btn btn-primary me-1" onClick={handelAddNew}>Thêm</button>
                    <button type="button" class="btn btn-warning me-1">Sửa</button>
                    <button type="button" class="btn btn-danger me-1">Xóa</button>
                </td>
                
             </tr>
          
    })
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">ID</th>
                        <th scope="col">Tên danh mục</th>
                        <th scope="col">Ngày sửa</th>
                        <th scope="col">Thứ tự</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {categorie}
                </tbody>
            </table>

        </>
    )
}

export default ListCategories