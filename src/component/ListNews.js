import React from 'react'
import News from './News'

function ListNews({renderListNews,onViewItem,onEditItem,onDeleteItem}) {
  const handleView = (toggle,action,item) =>{
    onViewItem(toggle,action,item)
  }
  const handleEdit = (toggle,action,item) =>{
    onEditItem(toggle,action,item)
  }
  const handleDelete = (action,item) =>{
    onDeleteItem(action,item)
  }
  let elementNews = renderListNews.map((item,index)=>{
      return <News renderNews={item} renderSTT={index+1} onView={handleView} 
                    onEdit={handleEdit} onDelete={handleDelete}/>
  })
  return (
    <>
      <div className="table-responsive pt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Mã tin tức</th>
              <th>Tiêu đề</th>
              <th>Hình ảnh</th>
              <th>Nội dung</th>
              <th>Ngày cập nhật</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {elementNews}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListNews