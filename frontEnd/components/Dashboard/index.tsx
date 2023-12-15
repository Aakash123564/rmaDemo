import React, { useState } from 'react'
import axios from 'axios';

const Dashboard = () => {

    const [details, setDetails] = useState({title:"",clientName:"", invoiceNumber:"", clientAddress:"", city:"", province:"",postalCode:"", contactPerson:"", email:"", phone:"", productType:"", partNumber:"", item:"", faultDescription:"", serialNumber:"", supplier:"", RMAtype:"", reason:""})

    const [tableData, setTableData] = useState({ productType:"", partNumber:"", item:"", faultDescription:"", serialNumber:"", supplier:"", RMAtype:"", reason:""})

    const [showData, setShowData] = useState<boolean>(false)

    const [extraInfo, setExtraInfo] = useState({password:"", comments:""})

    const setDetailInfo = (value:string, type:string) => {
        setDetails((prevDetails) => ({
          ...prevDetails,
          [type]: value,
        }));
      };
    
      const setExtraDetailInfo = (value:string, type:string) => {
        setExtraInfo((prevExtraInfo) => ({
          ...prevExtraInfo,
          [type]: value,
        }));
      };

      const addData = () => {
        setShowData(true)
        setTableData({ productType:details?.productType, partNumber:details?.partNumber, item:details?.item, faultDescription:details?.faultDescription, serialNumber:details?.serialNumber, supplier:details?.supplier, RMAtype:details?.RMAtype, reason:details?.reason})
      }

      const submitData =()=>{
        let data = {
            title : details?.title,
            client_name : details?.clientName,
            invoice_order_no :  details?.invoiceNumber,
            client_address :  details?.clientAddress,
            city :  details?.city,
            province :  details?.province,
            postal_code :  details?.postalCode,
            contact_person :  details?.contactPerson,
            email :  details?.email,
            phone :  details?.phone,
            product_type :  details?.productType,
            part_no :  details?.partNumber,
            item :  details?.item,
            fault_description :  details?.faultDescription,
            serial_no :  details?.serialNumber,
            supplier :  details?.supplier,
            rma_type :  details?.RMAtype,
            reason :  details?.reason,
            password :  extraInfo?.password,
            comments :  extraInfo?.comments
        }
console.log(data)
        axios.post('http://localhost:4200/api/v1/createRMA', data)
          .then(function (response:any) {
            console.log(response);
            alert(response?.data?.message)
            setDetails({title:"",clientName:"", invoiceNumber:"", clientAddress:"", city:"", province:"",postalCode:"", contactPerson:"", email:"", phone:"", productType:"", partNumber:"", item:"", faultDescription:"", serialNumber:"", supplier:"", RMAtype:"", reason:""})
            setExtraInfo({password:"", comments:""})
            setTableData({ productType:"", partNumber:"", item:"", faultDescription:"", serialNumber:"", supplier:"", RMAtype:"", reason:""})
            setShowData(false)
          })
          .catch(function (error) {
            console.log(error?.response?.data?.error[0]);
            alert(error?.response?.data?.error[0])
          });
      }

    return (
        <>
            <div className='full-box'>
                <label>Title: *</label>
                <input type="text" value={details?.title} onChange={(e:any)=>{setDetailInfo(e.target.value, "title")}}></input>
            </div>

            <div className='full-box'>
                <div className='main-inner-box-form'>
                    <div className='helf-box'>
                        <label>Client Name: *</label>
                        <input type="text" value={details?.clientName} onChange={(e:any)=>{setDetailInfo(e.target.value, "clientName")}}></input>
                    </div>
                    <div className='helf-box'>
                        <label>Invoice or Order No: *</label>
                        <input type="text" value={details?.invoiceNumber} onChange={(e:any)=>{setDetailInfo(e.target.value, "invoiceNumber")}}></input>
                    </div>
                </div>
            </div>

            <div className='full-box'>
                <label>Client Address (Product Collection Address): *</label>
                <input type="text" value={details?.clientAddress} onChange={(e:any)=>{setDetailInfo(e.target.value, "clientAddress")}}></input>
            </div>

            <div className='full-box'>
                <div className='main-inner-box-form'>
                    <div className='one-third-box'>
                        <label>City: *</label>
                        <input type="text" value={details?.city} onChange={(e:any)=>{setDetailInfo(e.target.value, "city")}}></input>
                    </div>
                    <div  className='one-third-box'>
                        <label>Province: *</label>
                        <input type="text" value={details?.province} onChange={(e:any)=>{setDetailInfo(e.target.value, "province")}}></input>
                    </div>
                    <div  className='one-third-box'>
                        <label>PostalCode: *</label>
                        <input type="text" value={details?.postalCode} onChange={(e:any)=>{setDetailInfo(e.target.value, "postalCode")}}></input>
                    </div>
                </div>
                <div className='main-inner-box-form'>
                    <div className='one-third-box'>
                        <label>Contact Person: *</label>
                        <input type="text" value={details?.contactPerson} onChange={(e:any)=>{setDetailInfo(e.target.value, "contactPerson")}}></input>
                    </div>
                    <div className='one-third-box'>
                        <label>Email: *</label>
                        <input type="text" value={details?.email} onChange={(e:any)=>{setDetailInfo(e.target.value, "email")}}></input>
                    </div>
                    <div className='one-third-box'>
                        <label>Phone: *</label>
                        <input type="text" value={details?.phone} onChange={(e:any)=>{setDetailInfo(e.target.value, "phone")}}></input>
                    </div>
                </div>
            </div>

            <h4 className='full-box'><span>Customer Provide Info</span></h4>

            <div className='full-box'>
                <div className='main-inner-box-form'>
                    <div className='one-fourth-box'>
                        <label>Product Type: *</label>
                        <input type="text" value={details?.productType} onChange={(e:any)=>{setDetailInfo(e.target.value, "productType")}}></input>
                    </div>
                    <div  className='one-fourth-box'>
                        <label>Part Number: *</label>
                        <input type="text" value={details?.partNumber} onChange={(e:any)=>{setDetailInfo(e.target.value, "partNumber")}}></input>
                    </div>
                    <div className='helf-box'>
                        <label>Item: *</label>
                        <input type="text" value={details?.item} onChange={(e:any)=>{setDetailInfo(e.target.value, "item")}}></input>
                    </div>
                </div>

                <div className='main-inner-box-form'>
                    <div className='helf-box'>
                        <label>Full Description: *</label>
                        <textarea value={details?.faultDescription} onChange={(e:any)=>{setDetailInfo(e.target.value, "faultDescription")}}></textarea>
                    </div>
                    <div className='helf-box'>
                        <div className='main-inner-box-form'>
                            <div className='helf-box'>
                                <label>Serial Number: *</label>
                                <input type="text" value={details?.serialNumber} onChange={(e:any)=>{setDetailInfo(e.target.value, "serialNumber")}}></input>
                            </div>
                            <div className='helf-box'>
                                <label>Supplier: *</label>
                                <input type="text" value={details?.supplier} onChange={(e:any)=>{setDetailInfo(e.target.value, "supplier")}}></input>
                            </div>
                            <div className='main-inner-box-form fixed-width-box full-box'>
                                <div className='helf-box with-btn-box'>
                                    <label>RMA Type: *</label>
                                    <input type="text" value={details?.RMAtype} onChange={(e:any)=>{setDetailInfo(e.target.value, "RMAtype")}}></input>
                                </div>
                                <div className='helf-box with-btn-box'>
                                    <label>Reason: *</label>
                                    <input type="text" value={details?.reason} onChange={(e:any)=>{setDetailInfo(e.target.value, "reason")}}></input>
                                </div>
                                <button onClick={addData}>Add</button>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>

            <div className='full-box scroll-fixed-sec'>
                <div className='table-heading-box'>
                    <span>#</span>
                    <span>Item</span>
                    <span>Fault Description</span>
                    <span>Serial Number</span>
                    <span>Supplier</span>
                    <span>Reason</span>
                    <span>RMA Type</span>
                    <span>Part Number</span>
                    <span>Product Type</span>
                </div>
                {showData && <div className='table-btm-box'>
                    <span>1</span>
                    <span>{tableData?.item}</span>
                    <span>{tableData?.faultDescription}</span>
                    <span>{tableData?.serialNumber}</span>
                    <span>{tableData?.supplier}</span>
                    <span>{tableData?.reason}</span>
                    <span>{tableData?.RMAtype}</span>
                    <span>{tableData?.partNumber}</span>
                    <span>{tableData?.productType}</span>
                </div>}
            </div>

            <h4 className='full-box'><span>Extra Info</span></h4>

            <div className='full-box'>
                <div className='main-inner-box-form'>
                    <div className='helf-box'>
                        <label>Password / PIN: *</label>
                        <input type="text" value={extraInfo?.password} onChange={(e:any)=>{setExtraDetailInfo(e.target.value, "password")}}></input>
                    </div>
                    <div className='helf-box'>
                        <label>Comments / Special Instructions *</label>
                        <textarea value={extraInfo?.comments} onChange={(e:any)=>{setExtraDetailInfo(e.target.value, "comments")}}></textarea>
                    </div>
                </div>
                <button className='submit-form' onClick={submitData}>Submit</button>
            </div>
        </>
    )
}

export default Dashboard