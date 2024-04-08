import React, { useEffect, useState } from 'react'
import axios from '../api/apixm'
function From_Product({renderActionName,renderProduct,onSubmit}) {
    
    const [category,setCategory] = useState([])
    const getAllCategory = async() =>{
        let response = await axios.get("categories")
        setCategory(response.data)
    }
    useEffect(()=>{
        getAllCategory();
    },[])
    // console.log("categories",category)
    const product = {
        id:"",
        ptitle:"",
        pimage:"",
        pdesc:"",
        pprice:"",
        psellprice:"",
        material:"",
        size:"",
        categorieID:"C001",
        pstatus:true
    }
    const [product1,setProduct] = useState(product) 
    
    useEffect(()=>{
        if( renderActionName==="Update" || renderActionName==="Close"){
          setProduct({
            id:renderProduct.id,
            ptitle:renderProduct.ptitle,
            pimage:renderProduct.pimage,
            pdesc:renderProduct.pdesc,
            pprice:renderProduct.pprice,
            psellprice:renderProduct.psellprice,
            material:renderProduct.material,
            size:renderProduct.size,
            categorieID:renderProduct.categorieID,
            pstatus:renderProduct.pstatus
          })
        }
        else{
            setProduct({
                id:"",
                ptitle:"",
                pimage:"",
                pdesc:"",
                pprice:"",
                psellprice:"",
                material:"",
                size:"",
                categorieID:"C001",
                pstatus:true
            })
          }
      },[renderActionName,renderProduct])
    const handleChange = (ev) =>{
        let name = ev.target.name
        let value = ev.target.value
        setProduct(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    const handleFileChange = (event) => {
        // Lấy ra tệp đã chọn
        const file = event.target.files[0];
        const leftPart = file.name.split('.')[0];
        console.log("ten file:",leftPart)
        setProduct(prev=>{
            return{
                ...prev,
                pimage:leftPart
            }
        });
      };
   
    let elementCategory = category.map((item,index)=>{
        return <option value={item.id}>{item.ctitle}</option>
    })
    console.log("Product muon cap nhat:",product1)
    console.log("categorie",product1.categorieID)
    const handleSubmit = (ev,action) =>{
        ev.preventDefault();
        onSubmit(false,action,product1)

    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sản phẩm</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label ">Mã sản phẩm</label>
                            <div className="col-sm-8 ">
                                <input type="text" className="form-control" name='id' value={product1.id} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Tên sản phẩm</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name='ptitle' value={product1.ptitle} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Hình ảnh</label>
                            <div className="col-sm-8">
                                <input type="file" className="form-control"  onChange={handleFileChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Mô tả</label>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="pdesc" value={product1.pdesc} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Giá</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name='pprice' value={product1.pprice} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Giá bán</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name='psellprice' value={product1.psellprice} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Chất liệu</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name='material' value={product1.material} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Size</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name='size' value={product1.size} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Nhóm</label>
                            <div className="col-sm-8">
                            <select
                            name='categorieID'
                            id="inputDs"
                            className="form-control"
                            value={product1.categorieID}
                            onChange={handleChange}
                            >
                            {elementCategory}
                            </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary me-2" onClick={(event)=>handleSubmit(event,renderActionName)}>
                            {renderActionName}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default From_Product