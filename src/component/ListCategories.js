import React from 'react'
import Categories from './Categories'

function ListCategories({renderListCategories,onViewItem,onEditItem,onDeleteItem}) {
    const handleView = (toggle,action,item)=>{
        onViewItem(toggle,action,item)
    }
    const handleEdit = (toggle,action,item)=>{
        onEditItem(toggle,action,item)
    }
    const handleDelete = (action,item)=>{
        onDeleteItem(action,item)
    }
    let elementCategory = renderListCategories.map((item,index)=>{
        if(item.cstatus===true){
          return <Categories renderCategory={item} renderSTT={index+1}
                onView={handleView} onEdit={handleEdit} onDelete={handleDelete}
          />
        }
    })
  return (
    <>
    <div className="table-responsive pt-3">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã danh mục</th>
            <th>Tên danh mục</th>
            <th>Hình ảnh</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
            {elementCategory}
        </tbody>
      </table>
    </div>
  </>
  )
}

export default ListCategories