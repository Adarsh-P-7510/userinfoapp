import React, { useState } from 'react'
import NavBar from './NavBar'

const AddInfo = () => {
    const [data, setdata] = useState(
        {
            "userid": "",
            "firstname": "",
            "lastname": "",
            "address": "",
            "email": ""
        }
    )
    const inputhandler = (event) => {
        setdata({ ...data,[event.target.name]:event.target.value })

    }
    const readvalue = () => {
        console.log(data)

    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form label">userid</label>
                                <input type="text" className="form-control" name='userid' value={data.userid} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form label">firstname</label>
                                <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form label">lastname</label>
                                <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form label">address</label>
                                <textarea name="address" id="" className="form-control" value={data.address} onChange={inputhandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form label">email</label>
                                <input type="email" name="email" id="" className="form-control" value={data.email} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success " onClick={readvalue}>register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddInfo