import React from "react";
import '../Addtocard/style.css'
import img1 from "../img/AI.jpg"
import All from '../img/all.png'
import Burger from '../img/Burger/burger.png'
import Colddrinks from '../img/colddrinks/cold.png'
import Hotdrinks from '../img/Hotdrinks/hot.png'
import Pizza from '../img/Pizza/pizza.png'
import Chicken from '../img/chicken/chicken.png'
import Dessert from '../img/dessert/dessert.png'
import Icecream from '../img/icecream/icecream.png'
import Biryani from '../img/Briyani/briyani.png'
import Biryani1 from '../img/Briyani/br-1.png'
import Biryani2 from '../img/Briyani/br-2.png'
import Biryani3 from '../img/Briyani/br-3.png'
import Biryani4 from '../img/Briyani/br-4.png'
import Biryani5 from '../img/Briyani/br-5.png'
import Biryani6 from '../img/Briyani/br-6.png'
import Icecream1 from '../img/icecream/ic-1.png'
import Icecream2 from '../img/icecream/ic-2.png'
import Icecream3 from '../img/icecream/ic-3.png'
import Icecream4 from '../img/icecream/ic-4.png'
import Icecream5 from '../img/icecream/ic-5.png'
import Icecream6 from '../img/icecream/ic-6.png'
import Pizza1 from '../img/Pizza/piz-1.png'
import Pizza2 from '../img/Pizza/piz-2.png'
import Pizza3 from '../img/Pizza/piz-3.png'
import Pizza4 from '../img/Pizza/piz-4.png'
import Pizza5 from '../img/Pizza/piz-5.png'
import Hotdrinks1 from '../img/Hotdrinks/ho-1.png'
import Hotdrinks2 from '../img/Hotdrinks/ho-2.png'
import Hotdrinks3 from '../img/Hotdrinks/ho-3.png'
import Hotdrinks4 from '../img/Hotdrinks/ho-4.png'
import Hotdrinks5 from '../img/Hotdrinks/ho-5.png'
import Dessert1 from '../img/dessert/de-1.png'
import Dessert2 from '../img/dessert/de-2.png'
import Dessert3 from '../img/dessert/de-3.png'
import Dessert4 from '../img/dessert/de-4.png'
import Dessert5 from '../img/dessert/de-5.png'
import Colddrinks1 from '../img/colddrinks/co-1.png'
import Colddrinks2 from '../img/colddrinks/co-2.png'
import Colddrinks3 from '../img/colddrinks/co-3.png'
import Colddrinks4 from '../img/colddrinks/co-4.png'
import Colddrinks5 from '../img/colddrinks/co-5.png'
import Colddrinks6 from '../img/colddrinks/co-6.png'
import Colddrinks7 from '../img/colddrinks/co-7.png'
import Chicken1 from '../img/chicken/ch-1.png'
import Chicken2 from '../img/chicken/ch-2.png'
import Chicken3 from '../img/chicken/ch-3.png'
import Chicken4 from '../img/chicken/ch-4.png'
import Chicken5 from '../img/chicken/ch-5.png'
import Burger1 from '../img/Burger/bur-1.png'
import Burger2 from '../img/Burger/bur-2.png'
import Burger3 from '../img/Burger/bur-3.png'
import Burger4 from '../img/Burger/bur-4.png'
import Burger5 from '../img/Burger/bur-5.png'
import Burger6 from '../img/Burger/bur-6.png'
import Burger7 from '../img/Burger/bur-7.png'
import Price from '../img/price.png'


function Addtocardprodects() {
    return (
        <>
            <div className=" p-1 pb-1 prodect-main-h border-4 border border-secondary bg-white" id=" prodect-crud-div">
                {/* prodect-input-row-1 */}
                <div className="row mx-auto">
                    {/* col-1 */}
                    <div className="col-6 p-1">
                        <div class="input-group mb-2  border rounded-2 border-secondary">
                            <div class="input-group-prepend ">
                                <span class="input-group-text py-1" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg></span>
                            </div>
                            <input type="email" class="form-control py-0 " id="prodect-search" placeholder="Name or Code or Category" aria-label="Name or Code or Category" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    {/* col-2 */}
                    <div className="col-6 p-1">
                        <div class="input-group mb-3 border rounded-2 border-secondary">
                            <div class="input-group-prepend ">
                                <span class="input-group-text py-1 " id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-upc" viewBox="0 0 16 16">
                                    <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z" />
                                </svg></span>
                            </div>
                            <input type="text" class="form-control py-0" id="prodect-search" placeholder="Barcode" aria-label="Barcode" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>



                {/* prodect - itemname and grid */}
                <div className="row m-0 pb-2 pe-1">
                    {/* prodect all-item-name-left */}
                    <div className="col-3 p-0 prodect-img-text pe-1 prodect-div-h prodect-scroll rounded-3">
                        {/* Category */}
                        <div className="border border-2 p-0 m-0 py-1 mb-2 text-center rounded-3 bg-dark text-light fw-bold">
                            <p className="m-0 p-1 fs-6">Category</p>
                        </div>

                        {/* Category-list */}
                        {/* list-1 */}
                        <div className="border border-4 p-0 m-0 py-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">All</p>
                        </div>
                        {/* list-2 */}
                        <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">Burger</p>
                        </div>
                        {/* list-3 */}
                        <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">Cold Drinks</p>
                        </div>
                        {/* list-4 */}
                        <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">Hot Drinks</p>
                        </div>
                        {/* list-5 */}
                        <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">Pizza</p>
                        </div>
                        {/* list-6 */}
                        <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">Chicken</p>
                        </div>
                        {/* list-7 */}
                        <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">Dessert</p>
                        </div>
                        {/* list-8*/}
                        <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">Ice Cream</p>
                        </div>
                        {/* list-9*/}
                        <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">Biryani</p>
                        </div>
                        {/* list-10 */}
                        <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">etc...</p>
                        </div>
                         {/* list-11 */}
                         <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">etc...</p>
                        </div>
                         {/* list-12 */}
                         <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">etc...</p>
                        </div>
                         {/* list-13 */}
                         <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">etc...</p>
                        </div>
                         {/* list-14 */}
                         <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">etc...</p>
                        </div>
                         {/* list-15 */}
                         <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">etc...</p>
                        </div>
                         {/* list-16 */}
                         <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">etc...</p>
                        </div>
                         {/* list-17 */}
                         <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">etc...</p>
                        </div>
                         {/* list-18 */}
                         <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">etc...</p>
                        </div>
                        {/* list-19 */}
                        <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">etc...</p>
                        </div>
                        {/* list-20 */}
                        <div className="border border-4 p-0 m-0 py-1 mt-1 text-center rounded-3 bg-white text-dark fw-bold border-secondary">
                        <p className="p-0 m-0">etc...</p>
                        </div>


                    </div>

                    {/* prodect all-item-img right*/} 

                    <div className="col-9 p-0  prodect-scroll rounded-3" id="prodect-div-h">
                        {/* row-1 */}
                        <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text ">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                        <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Biryani} class=" prodectimg" alt="br-1" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Icecream1} class=" prodectimg" alt="ic-1" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Dessert1} class=" prodectimg" alt="des-1" />
                                    <div class="card-footer p-1" id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* row-2 */}

                        <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text mt-1">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Colddrinks5} class=" prodectimg" alt="col-1" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Chicken1} class=" prodectimg" alt="ch-1" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Pizza1} class=" prodectimg" alt="piz-1" />
                                    <div class="card-footer p-1" id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* row-3 */}

                        <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text mt-1">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Hotdrinks1} class=" prodectimg" alt="hot-1" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Burger1} class=" prodectimg" alt="bur-1" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Biryani6} class=" prodectimg" alt="br-2" />
                                    <div class="card-footer p-1" id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* row-4 */}

                        <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text mt-1">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Icecream2} class=" prodectimg" alt="ic-2" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Dessert2} class=" prodectimg" alt="de-2" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Chicken2} class=" prodectimg" alt="ch-2" />
                                    <div class="card-footer p-1" id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* row-5 */}

                        <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text mt-1">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Colddrinks3} class="w-50 mx-auto prodectimg" alt="col-2" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Burger2} class=" prodectimg" alt="bur-2" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Biryani3} class=" prodectimg" alt="br-3" />
                                    <div class="card-footer p-1" id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* row-6 */}

                        <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text mt-1">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Icecream3} class=" prodectimg" alt="ic-3" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Dessert3} class=" prodectimg" alt="des-3" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Chicken3} class=" prodectimg" alt="ch-3" />
                                    <div class="card-footer p-1" id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row-7 */}
                        <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text mt-1">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Colddrinks4} class=" prodectimg" alt="co-3" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Pizza3} class=" prodectimg" alt="piz-3" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Hotdrinks3} class=" prodectimg" alt="hot-3" />
                                    <div class="card-footer p-1" id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row-8 */}
                        <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text mt-1">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Burger3} class=" prodectimg" alt="br-3" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Biryani4} class=" prodectimg" alt="br-4" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Icecream4} class=" prodectimg" alt="ic-4" />
                                    <div class="card-footer p-1" id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row-9 */}
                        <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text mt-1">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Dessert4} class=" prodectimg" alt="des-4" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Chicken4} class=" prodectimg" alt="ch-4" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Colddrinks1} class=" prodectimg w-75 mx-auto" alt="co-4" />
                                    <div class="card-footer p-1" id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row-10 */}
                        <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text mt-1">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Burger4} class=" prodectimg" alt="br-4" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Biryani5} class=" prodectimg " alt="br-5" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Icecream5} class=" prodectimg" alt="ic-5" />
                                    <div class="card-footer p-1" id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row-11 */}
                        <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text mt-1">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Dessert5} class=" prodectimg" alt="des-5" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Chicken5} class=" prodectimg" alt="ch-5" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Colddrinks6} class=" prodectimg w-75 mx-auto" alt="co-5" />
                                    <div class="card-footer p-1" id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row-12 */}
                        <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text mt-1">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Pizza2} class=" prodectimg" alt="piz-5" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Hotdrinks5} class=" prodectimg" alt="hot-5" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Colddrinks7} class=" prodectimg w-50 mx-auto py-1" alt="co-5" />
                                    <div class="card-footer p-1" id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row-13 */}
                        <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text mt-1">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                        <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Biryani1} class=" prodectimg " alt="br-6" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Icecream6} class=" prodectimg" alt="ic-6" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1" id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Pizza4} class=" prodectimg " alt="piz-6" />
                                    <div class="card-footer p-1" id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                {/* row-14 */}
                                                <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text mt-1">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1 " id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Biryani2} class=" prodectimg" alt="br-6" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1 " id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Pizza5} class=" prodectimg" alt="piz-6" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1 " id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Burger5} class=" prodectimg" alt="br-6" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                {/* row-15 */}
                                                <div class="row row-cols-1 row-cols-md-3 g-1 prodect-img-text mt-1">
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1 " id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Hotdrinks2} class=" prodectimg w-75 mx-auto" alt="hot-7" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Prueba(010)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1 " id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Burger6} class=" prodectimg" alt="bur-7" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Pj(011)</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 text-center border border-3">
                                    <div class="card-header p-1 " id="card-h-f">
                                    <span className="p-0 m-0"><img src={Price} alt="price" className="w-25 m-0 p-0 me-2"/></span><small class="text-body-secondary">00089</small>
                                    </div>
                                    <img src={Hotdrinks4} class=" prodectimg" alt="hot-7" />
                                    <div class="card-footer p-1 " id="card-h-f">
                                        <small class="text-body-secondary fw-bold ">Rice(00889)</small>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>


            </div>
        </>
    )
}
export default Addtocardprodects;