import React from 'react'
import Product from './Product'

function ListProducts({ renderListProduct,onViewProduct,onEditProduct,onDeleteProduct }) {
  // console.log("Danh sách sản phẩm gửi xuống:", renderListProduct)
  const handleView = (toggle, action, product) => {
    onViewProduct(toggle, action, product)
  }
  const handleEdit = (toggle, action, product) => {
    onEditProduct(toggle, action, product)
  }
  const handleDelete = ( action, product) => {
    onDeleteProduct( action, product)
  }

  let elementProduct = renderListProduct.map((item, index) => {
    if(item.pstatus===true){
      return (
      <Product
        renderProduct={item}
        renderSTT={index + 1}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    )
    }
  })
  return (
    <>
      <div className="table-responsive pt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá</th>
              <th>Giá bán</th>
              <th>Chất liệu</th>
              <th>Size</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {elementProduct}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListProducts