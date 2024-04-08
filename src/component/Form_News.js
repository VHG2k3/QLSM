import React from 'react'

function Form_News({renderAction,renderNews}) {
    
  return (
    <>
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">Thông tin sản phẩm</h3>
            <form className="form-sample">
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label ">Mã tin tức</label>
                    <div className="col-sm-8 ">
                        <input type="text" className="form-control" name='id' value={""} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Tiêu đề</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" name='ntitle' value={''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Hình ảnh</label>
                    <div className="col-sm-8">
                        <input type="file" className="form-control"  />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Nội dung</label>
                    <div className="col-sm-8">
                        <textarea className="form-control" name="ndesc" value={''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Ngày cập nhật</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" name='ndate' value={''} />
                    </div>
                </div>
                
                <button type="submit" className="btn btn-primary me-2" >
                    {renderAction}
                </button>
            </form>
        </div>
    </div>
</>
  )
}

export default Form_News