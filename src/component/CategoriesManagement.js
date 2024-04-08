import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import ListCategories from './ListCategories'
import Form_Categories from './Form_Categories'
import axios from '../api/apixm'
function CategoriesManagement() {
  const [listCategories, setListCategories] = useState([])
  const getAllCategory = async () => {
    let response = await axios.get("categories")
    setListCategories(response.data)
  }
  useEffect(() => {
    getAllCategory()
  }, [])
  // console.log("Danh sach danh muc:",listCategories)
  const [isToggle, setToggle] = useState(false)
  const [action, setAction] = useState("")
  const [category, setCategory] = useState({})
  const handleView = (toggle, action, item) => {
    setToggle(toggle)
    setAction(action)
    setCategory(item)
  }
  const handleEdit = (toggle, action, item) => {
    setToggle(toggle)
    setAction(action)
    setCategory(item)
  }
  const handleDelete = async( action, item) => {
    setAction(action)
    let itemDelete = {
      id:item.id,
      ctitle:item.ctitle,
      cimage:item.cimage,
      cstatus:false
    }
    await axios.put( `/categories/${item.id}`,itemDelete)
    window.alert("OK")
    getAllCategory()
  }
  const handleAdd = () => {
    setToggle(true)
    setAction("AddNew")
  }

  const handleSubmit = async (toggle, action, item) => {
    console.log("categories:", item)
    setToggle(toggle)
    try {
      if (action === "AddNew") {
        await axios.post("/categories", item);
        window.alert("OK")
        getAllCategory()
      }
      else if (action === "Update") {
        await axios.put(`/categories/${item.id}`, item)
        window.alert("OK")
        getAllCategory()
      }
    }
    catch (error){
      console.error("Error:", error);
      window.alert("Có lỗi xảy ra khi thực hiện hành động này.");
    }
      
  }
  let elementForm = isToggle === true ? <Form_Categories renderAction={action} onSubmit={handleSubmit} renderCategory={category} /> : ""
  return (
    <div>
      <NavBar />
      <div className="row ms-5">
        <div className="col-lg-7 grid-margin stretch-card ps-5">
          <div className="card">
            <div className="card-header">

            </div>
            <div className="card-body">
              <button type="button" class="btn btn-primary" onClick={handleAdd}>Thêm mới</button>
              <h3 className="card-title">Danh sách danh mục</h3>
              <ListCategories renderListCategories={listCategories}
                onViewItem={handleView} onEditItem={handleEdit}
                onDeleteItem={handleDelete}
              />
            </div>
          </div>
        </div>
        <div className="col-5 grid-margin pe-5">
          {elementForm}
        </div>
      </div>

    </div>
  )
}

export default CategoriesManagement