import React, { useEffect, useState } from 'react'
import From_Product from './From_Product'
import ListProducts from './ListProducts'
import NavBar from './NavBar'
import axios from '../api/apixm'

function Product_Management() {
    const [listProduct,setListProduct] = useState([]);
    const getAllProduct = async () => {
        let response = await axios.get("products")
        setListProduct(response.data)
    }
    useEffect(() => {
        getAllProduct();
    }, [])
    const [isToggle, setToggle] = useState(false)
    const [actionName, setActionName] = useState("")
    const [product, setProduct] = useState({})
    const handleAdd = (event) =>{
        setToggle(true)
        setActionName("AddNew")
    }

    const handleView = (toggle,action,product) =>{
        setToggle(toggle)
        setActionName(action)
        setProduct(product)
    }

    const handleEdit = (toggle,action,product) =>{
        setToggle(toggle)
        setActionName(action)
        setProduct(product)
    }

    const handleSubmit = async (toggle, action, item) => {
        console.log(item);
        setToggle(toggle);
        try {
            if (action === "AddNew") {
                await axios.post("/products", item);
                window.alert("OK");
                getAllProduct();
            } else if (action === "Update") {
                console.log("id:",item.id)
                await axios.put(`/products/${item.id}`, item);
                window.alert("OK");
                getAllProduct();
            }
        } catch (error) {
            // Xử lý lỗi ở đây
            console.error("Error:", error);
            window.alert("Có lỗi xảy ra khi thực hiện hành động này.");
        }
    };
    
    const handleDelete = async (action,item) => {
        let edititem = {
            id:item.id,
            ptitle:item.ptitle,
            pimage:item.pimage,
            pdesc:item.pdesc,
            pprice:item.pprice,
            psellprice:item.psellprice,
            material:item.material,
            size:item.size,
            categorieID:item.categorieID,
            pstatus:false
        }
        try {
            if (action === "Delete") {
                await axios.put(`/products/${item.id}`,edititem)
                window.alert("OK");
                getAllProduct();
            }
        } catch (error) {
            // Xử lý lỗi ở đây
            console.error("Error:", error);
            window.alert("Có lỗi xảy ra khi thực hiện hành động này.");
        }
  
    }

    let elementForm = isToggle===true?<From_Product renderActionName={actionName} 
                                                    renderProduct={product}
                                                    onSubmit={handleSubmit}
                                                    />:""

   
    return (
        <>
            <NavBar/>
            <div className="row ms-5">
                <div className="col-lg-8 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-header">

                        </div>
                        <div className="card-body">
                            <button type="button" class="btn btn-primary" onClick={handleAdd}>Thêm mới</button>
                            <h3 className="card-title">Danh sách sản phẩm</h3>
                            <ListProducts renderListProduct={listProduct} onViewProduct={handleView}
                                onEditProduct={handleEdit} onDeleteProduct={handleDelete}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-4 grid-margin pe-2">
                    {elementForm}
                </div>
            </div>
        </>

    )
}

export default Product_Management