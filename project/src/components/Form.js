import React, { useState } from 'react';
import axios from '../api/apixm'
export default function Form() {
    const cate = {
        id: 0,
        title: "",
        icon: "",
        mateTitle: "",
        metaKeyword: "",
        metaDescription: "",
        slug: "",
        orders: 1,
        parentid: null,
        createdDate: "",
        updatedDate: "",
        adminCreated: null,
        adminUpdated: null,
        notes: null,
        status: 1,
        isdelete: null
      }
    const [categorieAdd, setCategoriesAdd] = useState(cate)

    const handleChange=(ev)=>{
        let name = ev.target.name;
        let value = ev.target.value;
        setCategoriesAdd(prev=>{
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    const handelSubmit= async(ev)=>{
        ev.preventDefault();
        const currentDateTime = new Date();
        // Lấy ngày, tháng, năm, giờ, phút, giây
        const day = currentDateTime.getDate();
        const month = currentDateTime.getMonth() + 1; // Tháng bắt đầu từ 0
        const year = currentDateTime.getFullYear();
        const hours = currentDateTime.getHours();
        const minutes = currentDateTime.getMinutes();
        const seconds = currentDateTime.getSeconds();

        // Tạo chuỗi ngày tháng năm giờ
        const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

        //Tạo id tự động
        const min = 22;
        const max = 100;
        const randomID = Math.floor(Math.random() * (max - min + 1)) + min;

        let cateAdd = {
            id: randomID,
            title: categorieAdd.title,
            icon: categorieAdd.icon,
            mateTitle: categorieAdd.mateTitle,
            metaKeyword: categorieAdd.metaKeyword,
            metaDescription: categorieAdd.metaDescription,
            slug: categorieAdd.slug,
            orders: categorieAdd.orders,
            parentid: categorieAdd.parentid,
            createdDate: formattedDateTime,
            updatedDate: formattedDateTime,
            adminCreated: categorieAdd.adminCreated,
            adminUpdated: categorieAdd.adminUpdated,
            notes: categorieAdd.notes,
            status: categorieAdd.status,
            isdelete: categorieAdd.isdelete
        }

        console.log("cateAdd: ",cateAdd)  
        await axios.post("Categories",cateAdd)
        console.log("cateAdd sau khi them thanh cong: ",cateAdd)
        window.alert("OK")
    }


    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Tên danh mục
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        name="title"
                        value={categorieAdd.title}
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Từ khóa SEO
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        name="metaKeyword"
                        value={categorieAdd.metaKeyword}
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Mô tả SEO
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        name="metaDescription"
                        value={categorieAdd.metaDescription}
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Thứ tự
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        name="orders"
                        value={categorieAdd.orders}
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Trạng thái
                    </label>
                    <br></br>
                    <input  type="radio" name="status" value="1" checked/>Hoạt động
                    <input type="radio" name="status" value="0" />Không hoạt động
                </div>
                <div>
                <button type="button" className="btn btn-primary" onClick={handelSubmit}>
                    {/* Submit */}
                    Gửi đi
                </button>
                <button type="button" className="btn  btn-secondary">
                    Nhập lại
                </button>
                </div>
            </form>
        </>
    )
}
