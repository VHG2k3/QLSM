import React from 'react'
import '../css/sidebar.css'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <>
            <nav className="main-menu">
                <div className="" style={{ marginBottom: 30, display: "flex" }}>
                    <div className="icon-user">
                        <i className="fa-solid fa-user fa fa-2x" style={{ color: "#c2c4c7" }} />
                    </div>
                    <div className="profile" style={{ color: "white" }}>
                        <span>Xin Chào,</span>
                        <h5>admin</h5>
                    </div>
                </div>
                <ul>
                    <li className='mt-5'>
                        <Link to={'/product'}>
                            <i class="fa-solid fa-couch fa fa-2x"></i>
                            <span className="nav-text">Quản lý sản phẩm</span>
                        </Link>
                    </li>
                    <li className="has-subnav mt-4">
                        <Link to={'/categories'}>
                            <i className="fa fa-2x fa-solid fa-layer-group" />
                            <span className="nav-text">Quản lý danh mục</span>
                        </Link>
                    </li>
                    <li className="has-subnav mt-4">
                        <Link to={'/news'}>
                            <i className="fa-regular fa-envelope fa fa-2x" />
                            <span className="nav-text">Quản lý tin tức</span>
                        </Link>
                    </li>
                </ul>
                <ul className="logout">
                    <li>
                        <a
                            onclick="return confirm('Bạn có chắc muốn đăng xuất hay không?')"
                            href="logout.php"
                        >
                            <i className="fa fa-power-off fa-2x" />
                            <span className="nav-text">Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default NavBar