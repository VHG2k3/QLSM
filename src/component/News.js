import React from 'react'
import news1 from "../images/news/news1.jpg"
import news2 from "../images/news/news2.jpg"
import news3 from "../images/news/news3.jpg"
import news4 from "../images/news/news4.jpg"

function News({renderNews,renderSTT,onView,onEdit,onDelete}) {
    let news = renderNews
    const handleView = () =>{
        onView(true,"Close",renderNews)
    }
    const handleEdit = () =>{
        onEdit(true,"Update",renderNews)
    }
    const handleDelete = () =>{
        onDelete("Delete",renderNews)
    }
    let elementimg = ""
    if (news.nimage == "news1"){
        elementimg = <img src={news1} className='w-100'/>
    }
    else if (news.nimage == "news2"){
        elementimg = <img src={news2} className='w-100'/>
    }
    else if (news.nimage == "news3"){
        elementimg = <img src={news3} className='w-100'/>
    }
    else if (news.nimage == "news4"){
        elementimg = <img src={news4} className='w-100'/>
    }
  return (
    <>
            <tr>
                <td className="text-center">{renderSTT}</td>
                <td>
                    {news.id}
                </td>
                <td className="text-center">
                    {news.ntitle}
                </td>
                <td className="text-center">
                    {elementimg}
                </td>
                <td className="text-center" style={{ width: "30px!important" }}>
                    {news.ndesc}
                </td>
                <td className="text-center">
                    {news.ndate}
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

export default News