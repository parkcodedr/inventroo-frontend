import React,{useEffect,useState} from 'react';
import { useForm } from 'react-hook-form';
import {ErrorMessage} from 'components/Message';
import { useHistory,useParams} from 'react-router-dom';
import {notify} from 'components/Toast';
import { useTitle } from 'components/hooks/useTitle';
import LoadingButton from 'components/LoadingButton';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'components/Loader';
import {getCustomers} from 'store/actions/customers';
import {getProducts} from 'store/actions/product';
import {updateSalesOrder,updateSalesOrderComplete,getSalesOrderDetail} from 'store/actions/salesOrder';
import {getTaxes} from 'store/actions/tax';

const EditSalesOrder = ()=>{
  useTitle("Inventroo | Edit Sales Order");
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const [customerName,setCustomerName]= useState("");
    const salesOrderId=params.salesOrderId;

    const { success:updateSuccess, error:updateError, loading:updateLoading} = useSelector((state) => state.updateSalesOrder);
    const { salesOrder, error, loading} = useSelector((state) => state.salesOrderDetail);
    const { products,} = useSelector((state) => state.products);
    const { customers,} = useSelector((state) => state.customers);
    const { taxes,} = useSelector((state) => state.taxes);
    const {register,reset,formState: { errors },handleSubmit} = useForm();

    const [product,setProduct] = useState([
        {
            product_id:"",
            quantity:1.0,
            rate:0,
            discount:0,
            tax:0,
            amount:0,
           
        }
    ])

    if(updateSuccess){
        dispatch(updateSalesOrderComplete());
        history.push('/dashboard/sales-order/all');
        notify("success","Sales Order Updated Successfully");
      }

    const updateAmount = (index)=>{
        let data = [...product];
        const discount = ((data[index].discount * data[index].rate )/100)*data[index].quantity;
        data[index].amount = (data[index].rate*data[index].quantity)- discount;
        setProduct(data);
    }


      const handleProductChange = (index,event)=>{
        event.preventDefault();
        event.persist();
       if(event.target.name=="product_id"){
         const productName = products.find(item=>item.productID==event.target.value);
         product[index].product_name=productName.name;
       }
       
        setProduct((prev)=>{
            return prev.map((item,i)=>{
                if(i!==index){
                    return item;
                }
             
                return {
                    ...item,
                    [event.target.name]:event.target.value,
                }
            })
        })
        
      }

      const handleRemove = (e,index)=>{
        e.preventDefault();
        setProduct(prev=>prev.filter((item)=>item!==prev[index]));
      }

      const handleAddMore = (e)=>{
        e.preventDefault();
        const inputState = {
            product_id:"",
            quantity:"",
            rate:0,
            discount:0,
            tax:0,
            amount:0,
      }
  
            setProduct(prev=>[...prev,inputState]);
    }
    const subTotal = product.reduce((accumulator, current) => accumulator + current.amount, 0);
    const tax = product.reduce((accumulator, current) => (accumulator +(current.tax * current.amount)/100), 0);
    const total = subTotal+tax;

    const submit = (data)=>{
      const productData = new FormData();
      productData.append("salesOrderID",salesOrderId);
      productData.append("customer_name",customerName?customerName.name:salesOrder.customer_name);
      productData.append("customer_id",data.customer_id);
      productData.append("sales_order",data.sales_order);
      productData.append("reference",data.reference);
      productData.append("sales_date",data.sales_date);
      productData.append("expected_shipment_date",data.expected_shipment_date);
      productData.append("payment_term",data.payment_term);
      productData.append("customer_note",data.customer_note);
      productData.append("payment_term",data.payment_term);
      productData.append("delivery_method",data.delivery_method);
      productData.append("sales_person",data.sales_person);
      productData.append("items",JSON.stringify(product));
      
        dispatch(updateSalesOrder(productData));
    }


    console.log({customerName});

    useEffect(()=>{
     if(!salesOrder || salesOrder.salesOrderID!=salesOrderId){
        dispatch(getCustomers());
        dispatch(getProducts());
        dispatch(getTaxes());
        dispatch(getSalesOrderDetail(salesOrderId));
        
        
     }else{
         reset(salesOrder);
         setProduct(salesOrder.items);
         setCustomerName(customers.find(customer=>customer.customerID==salesOrder.customer_name))
     }
      
    },[salesOrder,salesOrderId])

    if(loading) return <Loader/>
    return(
        <div className="content-body">
            <h4 className="font-weight-bold">Edit Sales Order</h4>
            <div className="row mt-3">
              
            <form onSubmit={handleSubmit(submit)}>
            <div className="col-md-10">
                {updateError && <ErrorMessage message={updateError}/>}
                

    <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
       Customer's Name</label>
    <div className="col-sm-9">
    <div className="input-group">
  <select className="custom-select" name="customer_id"
  {...register("customer_id",  { required: "Customer's Name is required" })} onChange={(e)=>setCustomerName(customers.find(customer=>customer.customerID==e.target.value))}>
    <option value="">Select Customer</option>
    {
      customers && customers.map(customer=>(
        <option value={customer.customerID} key={customer.customerID}>{customer.name}</option>
      ))
    }
    
  </select>
  <div className="input-group-append">
  <label className="input-group-text bg-main text-white" >
  <i className="feather icon-search"></i>
  </label>
    
  </div>
</div>
   
        <span className="text-danger text-center">{errors.customer_name?.message}</span>
    </div>
  </div>

  <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
        Sales Order</label>
    <div className="col-sm-5">
      <input type="text" className="form-control" name="sales_order" disabled
      {...register("sales_order", { required: "Sales Order is required" })}
       />
        <span className="text-danger text-center">{errors.sales_order?.message}</span>
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-3 col-form-label">
        Reference</label>
    <div className="col-sm-5">
      <input type="text" className="form-control" name="reference"
      {...register("reference")}
       />
        <span className="text-danger text-center">{errors.reference?.message}</span>
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-3 col-form-label text-danger">
        Sales Order Date</label>
    <div className="col-sm-5">
      <input type="date" className="form-control" name="sales_date"
      {...register("sales_date", { required: "Sales Order Date is required" })}
       />
        <span className="text-danger text-center">{errors.sales_date?.message}</span>
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Expected Shipment Date </label>
    <div className="col-sm-4">
    <input type="date" className="form-control" name="expected_shipment_date"
      {...register("expected_shipment_date")}
       />
       
    </div>
    <label className="col-sm-1 col-form-label">
        Payment Term</label>
    <div className="col-sm-4">
    <select  className="custom-select" name="payment_term"
      {...register("payment_term")}
       >
         <option value="Due on Receipt">Due on Receipt</option>
         <option value="Due end of month">Due end of month</option>
         <option value="Due end of next month">Due end of next month</option>
       </select>
       
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Delivery Method </label>
    <div className="col-sm-4">
    <select className="custom-select" name="delivery_method" {...register("delivery_method")}>
       <option value="">Select Delivery Method</option>
       <option value="Pickup">Pickup</option>
       <option value="Home Deliver">Home Deliver</option>
     </select>
    </div>
    </div>

    <div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Sales Person </label>
    <div className="col-sm-4">
    <select className="custom-select" name="sales_person" {...register("sales_person")}>
       <option selected>Select Sales Person</option>
       <option value="John Joe">John Joe</option>
       <option value="Jude Wellington">Jude Wellington</option>
     </select>
    </div>
    </div>
    </div>
    <div className="row m-1">
    <table className="table table-responsive group-table mt-5 mr-1">
  <thead>
    <tr className="bg-main text-white">
      <th scope="col">Item Detail</th>
      <th scope="col">Quantity</th>
      <th scope="col">Rate</th>
      <th scope="col">Discount</th>
      <th scope="col">Tax</th>
      <th scope="col">Amount</th>
    </tr>

  </thead>

  <tbody>
  {product.map((item,index)=>
    <tr key={`${item}-${index}`}>
      <td className="col-md-3">
        <select className="custom-select" name="product_id" rows={1}
        onChange={(e)=>handleProductChange(index,e)} 
        value={item.product_id}>
            <option>Select Item</option>
            {products && products.map(product=>(
              <option value={product.productID} key={product.productID}>{product.name}</option>
            ))}
        </select>
      </td>
      <td scope="col"><input type="text" value={item.quantity} className="form-control" name="quantity" onChange={(e)=>handleProductChange(index,e)} onBlur={(e)=>updateAmount(index)} /></td>
      <td scope="col"><input type="text" value={item.rate} className="form-control" name="rate" onChange={(e)=>handleProductChange(index,e)} onBlur={(e)=>updateAmount(index)}/></td>
      <td scope="col"><input type="text" value={item.discount} className="form-control" name="discount"  onChange={(e)=>handleProductChange(index,e)} onBlur={(e)=>updateAmount(index)} /></td>
      <td scope="col" className="col-md-2">
        <select className="custom-select" value={item.tax} name="tax" onChange={(e)=>handleProductChange(index,e)} >
          <option value="">Select Tax</option>
          {taxes && taxes.map(tax=>(
            <option value={tax.percentage} key={tax.id}>{`${tax.name} [${tax.percentage} %]`}</option>
          ))}
          </select></td>
      <td scope="col"><input type="text" className="form-control" value={item.amount} name="amount" onChange={(e)=>handleProductChange(index,e)}  /></td>
      <td ><i className="feather icon-trash btn btn-danger" onClick={(e)=>handleRemove(e,index)}></i></td>
    </tr>

  )}
  </tbody>
  </table>
  <button className="btn btn-outline-main dotted" onClick={handleAddMore}>
  <span className="feather icon-plus color-main"></span> Add another line
  </button>
    </div>
  
  
  <section className="row m-1">
      <div className="col-md-5  align-self-end">
      <label >Customer Notes </label>
    <textarea className="form-control"  cols="5" name="customer_note"
    {...register("customer_note")}
      rows="3"></textarea>
      <p>Will be displayed on the invoice</p>
      </div>
      <div className="col-md-7 mt-2 bg-light-50 p-2">
          <div className="d-flex justify-content-between sub-total-container pr-1">
              <h5 className="sub-total">Subtotal</h5>
              <h5>{subTotal}</h5>
          </div>
          <div className="d-flex justify-content-between shipping-charges pr-1">
            <p className="col-md-4">Shipping Charges <br/><a href="#">Apply Tax on Shipping Charges</a></p>
            <input type="text" className="form-control col-md-4" name="shipping_charge"/>
            <p >0.00</p>
          </div>

          <div className="d-flex justify-content-between adjustment pr-1">
            <p className="col-md-4">Adjustment</p>
            <input type="text" className="form-control col-md-4" name="adjustment"/>
            <p >{tax}</p>
          </div>
          <div className="d-flex justify-content-between total  pr-1 mt-2">
            <h4 className="font-weight-bold">Total (NGN)</h4>
            <h4 className="font-weight-bold">{total}</h4>
          </div>
      </div>
  </section>
 
  <div className="float-right mb-5 mt-2">

            {updateLoading? (
              <LoadingButton message={"Save and Continue"}/>
            ):(
      <button type="submit" className="btn btn-main mr-1">
      <i className="fa fa-check-square-o"></i> Save and Continue
      </button>
            )}	
                                <button type="reset" className="btn btn-warning ">
									<i className="feather icon-x"></i> Cancel
								</button>
							</div>
                            
                </form>
                
         </div>

        </div>
    )
}

export default EditSalesOrder;
