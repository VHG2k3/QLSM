import React from 'react'
// phòng khách
import ke_do from '../images/products/Phong-Khach/ke_do.jpg'
import ke_tv from '../images/products/Phong-Khach/ke_tv.jpg'
import sofa from '../images/products/Phong-Khach/sofa.jpg'
import gia_do from '../images/products/Phong-Khach/gia_do.jpg'
import Ban_uong_nuoc from '../images/products/Phong-Khach/Ban_uong_nuoc.jpg'
import ban_uong_nuoc_2 from '../images/products/Phong-Khach/ban_uong_nuoc_2.jpg'
// phòng bếp
import ban_an from '../images/products/Phong-bep/ban_an.jpg'
import ban_tra from '../images/products/Phong-bep/ban_tra.jpg'
//Phòng ngủ
import giuong_chau_au from '../images/products/Phong_ngu/giuong_chau_au.jpg'
import giuong_go from '../images/products/Phong_ngu/giuong_go.jpg'
import tu_quan_ao from '../images/products/Phong_ngu/tu_quan_ao.jpg'
//Đồ trang trí
import den_chum from '../images/products/Do-trang-tri/den_chum.jpg'
//Cầu thang
import cau_thang from '../images/products/Cau-thang/cau_thang.jpg'
//Phòng tắm
import Bon_rua_2 from '../images/products/Phong-tam/Bon_rua_2.jpg'
import Bon_rua_mat from '../images/products/Phong-tam/Bon_rua_mat.jpg'
import Bon_rua_tay from '../images/products/Phong-tam/Bon_rua_tay.jpg'
import Tu_am_tuong from '../images/products/Phong-tam/Tu_am_tuong.jpg'
//Trẻ em

function Product({renderProduct,renderSTT,onView,onEdit,onDelete}) {
    let product = renderProduct
    const handleView = () =>{
        onView(true,"Close",renderProduct)
    }
    const handleEdit = () =>{
        onEdit(true,"Update",renderProduct)
    }
    const handleDelete = () =>{
        if(window.confirm("Bạn có muốn xóa không?"))
        onDelete("Delete",renderProduct)
    }
    let elementimg = ""
    if (product.pimage==="ke_do"){
         elementimg = (<img src={ke_do} />);
    }
    else if (product.pimage == "Ban_uong_nuoc"){
        elementimg = (<img className="product-image" src={Ban_uong_nuoc} />);
    }
    else if (product.pimage == "ban_uong_nuoc_2"){
        elementimg = (<img className="product-image" src={ban_uong_nuoc_2} />);
    }
    else if (product.pimage == "ke_tv"){
        elementimg = (<img className="product-image" src={ke_tv} />);
    }
    else if (product.pimage == "sofa"){
        elementimg = (<img className="product-image" src={sofa} />);
    }
    else if (product.pimage == "gia_do"){
        elementimg = (<img className="product-image" src={gia_do} />);
    }
    else if (product.pimage == "ban_an"){
        elementimg = (<img className="product-image" src={ban_an} />);
    }
    else if (product.pimage == "ban_tra"){
        elementimg = (<img className="product-image" src={ban_tra} />);
    }
    else if (product.pimage == "giuong_chau_au"){
        elementimg = (<img className="product-image" src={giuong_chau_au} />);
    }
    else if (product.pimage == "giuong_go"){
        elementimg = (<img className="product-image" src={giuong_go} />);
    }
    else if (product.pimage == "tu_quan_ao"){
        elementimg = (<img className="product-image" src={tu_quan_ao} />);
    }
    else if (product.pimage == "den_chum"){
        elementimg = (<img className="product-image" src={den_chum} />);
    }
    else if (product.pimage == "cau_thang"){
        elementimg = (<img className="product-image" src={cau_thang} />);
    }
    else if (product.pimage == "Bon_rua_mat"){
        elementimg = (<img className="product-image" src={Bon_rua_mat} />);
    }
    else if (product.pimage == "Bon_rua_2"){
        elementimg = (<img className="product-image" src={Bon_rua_2} />);
    }
    else if (product.pimage == "Bon_rua_tay"){
        elementimg = (<img className="product-image" src={Bon_rua_tay} />);
    }
    else if (product.pimage == "Tu_am_tuong"){
        elementimg = (<img className="product-image" src={Tu_am_tuong} />);
    }
    return (
        <>
            <tr>
                <td className="text-center">{renderSTT}</td>
                <td>
                    {product.id}
                </td>
                <td className="text-center">
                    {product.ptitle}
                </td>
                <td className="text-center">
                    {elementimg}
                </td>
                <td className="text-center">
                    {product.pprice}
                </td>
                <td className="text-center">
                    {product.psellprice}
                </td>
                <td className="text-center">
                    {product.material}
                </td>
                <td className="text-center">
                    {product.size}
                </td>
                <td>
                    <button type="button" class="btn btn-info" onClick={handleView}>
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

export default Product