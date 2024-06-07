import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

function AddToCardCrudOperation() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            &#x25bc;
        </a>
    ));

    const CustomMenu = React.forwardRef(({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <Form.Control
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    });

    return (
        <>
            {/* main */}
            <div className="main h-auto mb-1 prodect-main-h border-4 border border-secondary bg-white">
                {/* header */}
                {/* 1st - row */}
                <div className="row p-1">
                    {/* col -1 */}
                    <div className="col-10 text-dark ">
                        <div className='w-100 border border-dark border-2 navtext text-center '>
                        <Dropdown className='navtext bg-white p-1'>
                            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className='text-dark'>
                                <span className='navtext pe-5 '>Walk-in Customer</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu as={CustomMenu}>
                                <Dropdown.Item eventKey="1">mita</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Customer</Dropdown.Item>
                                <Dropdown.Item eventKey="3" active>
                                Walk-in Customer
                                </Dropdown.Item>
                                {/* <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                    </div>
                    {/* col-2 */}
                    <div className="col-1 p-0">
                      <div className='text-secondary'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg>
                      </div>
                    </div>
                    {/* col-3 */}
                    <div className="col-1 p-0">
                        <div className='text-secondary'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"/>
</svg>
                        </div>
                    </div>
                </div>

                {/* header */}


                {/* item-price-qty/amt-discount-total (values) */}
                <div className='row'>
                    <div className='col-12 itemvalues '>
                        <div className='text-center border border-5 p-0 m-0 py-1 additem-scroll'>
                        <h5 className=''>ADD TO CARD - 1</h5>
                        <h5 className=''>ADD TO CARD - 2</h5>
                        <h5 className=''>ADD TO CARD - 3</h5>
                        <h5 className=''>ADD TO CARD - 4</h5>
                        <h5 className=''>ADD TO CARD - 5</h5>
                        <h5 className=''>ADD TO CARD - 6</h5>
                        <h5 className=''>ADD TO CARD - 7</h5>
                        <h5 className=''>ADD TO CARD - 8</h5>
                        <h5 className=''>ADD TO CARD - 9</h5>
                        <h5 className=''>ADD TO CARD - 10</h5>
                        <h5 className=''>ADD TO CARD - 11</h5>
                        <h5 className=''>ADD TO CARD - 12</h5>
                        <h5 className=''>ADD TO CARD - 13</h5>
                        <h5 className=''>ADD TO CARD - 14</h5>
                        <h5 className=''>ADD TO CARD - 15</h5>
                        <h5 className=''>ADD TO CARD - 16</h5>
                        <h5 className=''>ADD TO CARD - 17</h5>
                        </div>
                    </div>
                </div>

                {/* crudoperation-footer */}
                <div className='crudfooter py-1'>
                <div className='row p-0 m-0'>
                    {/* col-1 */}
                    <div className='col-5'>
                        <p className='navtext fs-6'>Total Item : 0</p>
                    </div>
                    {/* col-2 */}
                    <div className='col-7'>
                        {/* col*2 */} 
                        <div className='row p-0 py-1 m-0'>
                           <p className='col-6 p-0 text-end m-0 '>Sub Total</p>
                           <p className='col-6 m-0 '>Fr 0.00</p>
                        </div>
                        <div className='row p-0 py-1 m-0'>
                           <p className='col-6 text-end p-0 m-0'>Discount</p>
                           <div className='col-6 text-start m-0'>
                           <p className='px-1 border border-2 bg-light text-center m-0'>Amt or %</p>
                           </div>
                        </div>
                        <div className='row m-0 p-0 py-1'>
                           <p className='col-6 text-end p-0 m-0'>Total Discount</p>
                           <p className='col-6 text-start m-0'>Fr 0.00</p>
                        </div>
                        <div className='row m-0'>
                           <p className='col-6 text-end p-0 m-0 py-1'>Shpping/Other</p>
                           <div className='col-6 text-start m-0'>
                           <p className=' border text-center border-2 bg-light m-0'>Amt</p>
                           </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* crudoperation-footer-blueline*/}
                  <div className='row m-0 crud-bottom-blue text-center'>
                    <div className='col-5'></div>
                    <div className='col-7'>
                        <div className='row text-center '>
                            <p className='col-6 p-0 text-end py-1 m-0'>Total Payable</p>
                            <p className='col-6 text-start py-1 m-0'>Fr 0.00</p>
                        </div>
                    </div>
                    </div>

                    {/* crud-footer-buttons */}
            <div className='row my-2 mx-2 mb-2'>
            <div className='col-4 p-0'>
                <button className='px-2 bg-light bg-gradient w-75 float-start border border-2 border-primary ' id="crud-footer-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill  "  viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg><span className='px-1'>Cancel</span>
                </button>
            </div>

            <div className='col-4 p-0 text-center'>
                <button className='px-2 bg-light w-75 border border-2 border-primary' id="crud-footer-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
  <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
</svg><span className='px-1'>Hold</span>
                </button>
            </div>

            <div className='col-4  p-0 '>
                <button className='px-2 bg-warning w-75 float-end  border border-2 border-primary' id="crud-footer-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"/>
</svg><span className='px-2'>Payment</span>
                </button>
            </div>


            </div>


            </div>
        </>
    );
}

export default AddToCardCrudOperation;
