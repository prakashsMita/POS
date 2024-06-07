import React from "react";
import Crudoperation from "./Addtocardcrudoperation";
import Button from 'react-bootstrap/Button';
import '../Addtocard/style.css'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addtocardheader from "./Addtocardheader";
import Addtocardcrudoperation from "./Addtocardcrudoperation";
import Addtocardprodects from "./Addtocardprodects";
function Addtocard() {
    return (
        <>
            <div className=' demoadd '>
                <div className='container p-0'>
                    {/* header */}
                    <Addtocardheader />
                    {/* section crud-pro */}
                    <div className="row h-auto mt-3 pb-2 mb-0 pb-0 ">
                        {/* crudoperation-left */}
                        <div className="col-6 float-start ps-0 h-auto">
                            <Addtocardcrudoperation />
                        </div>
                        {/* prodects-right */}
                        <div className="col-6 float-end p-0 h-auto ">
                            <Addtocardprodects />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default Addtocard;