import React, { useEffect, useState } from 'react'

function Form_Categories({renderAction,onSubmit,renderCategory}) {
    let Category = {
        id:"",
        ctitle:"",
        cimage:"",
        cstatus:true
    }
    const [category,setCategory] = useState(Category)
    useEffect(()=>{
        if(renderAction==="Close" || renderAction==="Update"){
            setCategory(renderCategory)
        }
    },[renderAction,renderCategory])
    const handleChange = (ev) =>{
        let name = ev.target.name;
        let value = ev.target.value;
        setCategory(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    const handleFileChange = (ev) =>{
        let file = ev.target.files[0];
        let leftPart = file.name.split(".")[0];
        setCategory(prev=>{
            return{
                ...prev,
                cimage:leftPart
            }
        })
    }
    // console.log("category:",category)
    const handleSubmit=(ev,renderAction)=>{
        ev.preventDefault();
        onSubmit(false,renderAction,category)
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin danh mục</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label ">Mã danh mục</label>
                            <div className="col-sm-8 ">
                                <input type="text" className="form-control" name='id' value={category.id}  onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Tên danh mục</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name='ctitle' value={category.ctitle}  onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label">Hình ảnh</label>
                            <div className="col-sm-8">
                                <input type="file" className="form-control"  onChange={handleFileChange}/>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary me-2" onClick={(event)=>handleSubmit(event,renderAction)}>
                            {renderAction}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form_Categories