import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import FormNews from './Form_News'
import ListNews from './ListNews'
import axios from '../api/apixm'
import Form_News from './Form_News'
function NewsManagement() {
    const [listNews, setListNews] = useState([])
    const getAllNews = async()=>{
        let response = await axios.get("news")
        setListNews(response.data)
    }
    useEffect(()=>{
        getAllNews();
    },[])
    const [isToggle, setToggle] = useState(false)
    const [action,setAction] = useState("")
    const [news, setNews] = useState([])
    const handleView=(toggle,action,item)=>{
        setToggle(toggle)
        setAction(action)
        setNews(item)
    }
    const handleEdit=(toggle,action,item)=>{
        setToggle(toggle)
        setAction(action)
        setNews(item)
    }
    const handleDelete=(action,item)=>{
        setAction(action)
    }
    const handleAdd=()=>{
        setToggle(true)
        setAction("AddNew")
    }
    let elementForm = isToggle===true?<Form_News renderAction={action} renderNews={news}/>:""
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
                    <h3 className="card-title">Danh sách tin tức</h3>
                    <ListNews renderListNews={listNews} 
                        onViewItem={handleView} onEditItem={handleEdit}
                        onDeleteItem={handleDelete}
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

export default NewsManagement