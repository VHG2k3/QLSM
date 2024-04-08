import React from 'react'
import banner_product_2 from "../images/products/banner-product-2.png"
import icon_cau_thang from '../images/categories/icon_cau_thang.png'
import icon_do_trang_tri from '../images/categories/icon_do_trang_tri.png'
import icon_phong_bep from '../images/categories/icon_phong_bep.png'
import icon_phong_khach from '../images/categories/icon_phong_khach.png'
import icon_phong_ngu from '../images/categories/icon_phong_ngu.png'
import icon_phong_tam from '../images/categories/icon_phong_tam.png'
import icon_tre_em from '../images/categories/icon_tre_em.png'
import icon_van_phong from '../images/categories/icon_van_phong.png'
function Categories({ renderCategory, renderSTT,onView,onEdit,onDelete }) {
    let category = renderCategory
    const handleView = () =>{
        onView(true,"Close",category)
    }
    const handleEdit = () =>{
        onEdit(true,"Update",category)
    }
    const handleDelete = () =>{
        if(window.confirm("Bạn có chắc muốn xóa không?")){
            onDelete("Delete",category)
        }  
    }
    let elementimg = ""
    if (category.cimage == "icon_cau_thang"){
        elementimg = (<img className='w-50' src={icon_cau_thang} />)
    }
    else if (category.cimage == "icon_phong_khach"){
      elementimg = (<img className='w-50' src={icon_phong_khach}/>)
    }
    else if (category.cimage == "icon_do_trang_tri"){
      elementimg = (<img className='w-50' src={icon_do_trang_tri}/>)
    }
    else if (category.cimage == "icon_phong_bep"){
      elementimg = (<img className='w-50' src={icon_phong_bep}/>)
    }
    else if (category.cimage == "icon_phong_ngu"){
      elementimg = (<img className='w-50' src={icon_phong_ngu}/>)
    }
    else if (category.cimage == "icon_phong_tam"){
      elementimg = (<img className='w-50' src={icon_phong_tam}/>)
    }
    else if (category.cimage == "icon_tre_em"){
      elementimg = (<img className='w-50' src={icon_tre_em}/>)
    }
    else if (category.cimage == "icon_van_phong"){
      elementimg = (<img className='w-50' src={icon_van_phong}/>)
    }
    return (
        <>
            <tr>
                <td className="text-center">{renderSTT}</td>
                <td>
                    {category.id}
                </td>
                <td className="text-center">
                    {category.ctitle}
                </td>
                <td className="text-center">
                    {elementimg}
                </td>
                <td>
                    <button type="button" class="btn btn-info" 
                            onClick={handleView}
                            >
                        Xem
                    </button>
                    <button type="button" className="btn btn-warning ms-2"
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                    <button type="button" className="btn btn-danger ms-2"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </td>
            </tr>

        </>
    )
}

export default Categories