import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {notify} from '../components/Toast';
import {ErrorMessage} from '../components/Message';
import Loader from '../components/Loader';
import {getInventoryAdjustments,deleteInventoryAdjustment,deleteInventoryAdjustmentComplete} from '../store/actions/inventoryAdjustment';


const InventoryAdjustmentList = ()=>{
  const dispatch = useDispatch();
  const {loading,error,inventoryAdjustments} = useSelector((state) => state.inventoryAdjustment);
  const deleteState = useSelector((state) => state.deleteInventoryAdjustment);
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;






  useEffect(()=>{
    if(deleteSuccess){
        notify("success","Inventory Adjustment Deleted Successfully");
        dispatch(deleteInventoryAdjustmentComplete())
    }
    dispatch(getInventoryAdjustments());
},[dispatch,deleteSuccess])

const deleteHandler =(inventoryAdjustment)=>{
  if(window.confirm('Are You Sure to Delete?')){
    dispatch(deleteInventoryAdjustment(Number(inventoryAdjustment.iventoryAdjustmentID)));
  }
}

  return(
<div className="content-body">
  {
loading? (
  <Loader/>
):error?(
  error && <ErrorMessage message={error} />
):(

<>
  <div className="row d-flex justify-content-between ml-2 mr-5 ">
<div className="">
  <h3 className="font-weight-bold">
  Inventory Adjustment
  </h3>

</div>
<Link to={'/dashboard/inventory-adjustment/new'}>
<button className="btn btn-success">
        <i className="feather icon-plus"></i>
        New
        </button>
</Link>
    
    </div>

    <div className="filter">
        <div className="row">
   <div className="col-md-1">
   <p>Filter By:</p>
   </div>
   <div className="col-md-3 mr-1 d-flex align-items-center">
   <div className="input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text">Type</label>
  </div>
  <select className="custom-select" id="inputGroupSelect01">
    <option selected>All</option>
    <option value="1">By Quality</option>
    <option value="2">By Value</option>
  </select>
</div>
   </div>
       
        <div className=" col-md-3 d-flex">
        <div className="input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text">Period</label>
  </div>
  <select className="custom-select">
    <option selected>All</option>
    <option value="1">Today</option>
    <option value="2">This Week</option>
    <option value="3">This Month</option>
    <option value="3">This Quarter</option>
    <option value="3">This Year</option>
  </select>
</div>
        </div>
        
        </div>
    </div>
    

    <div className="mx-auto">
    <table className="table ">
  <thead className="btn-main p-1">
    <tr>
      <th>Date</th>
      <th >Reason</th>
      <th >Description</th>
      <th >Status</th>
      <th >Reference</th>
      <th >Type</th>
      <th >Created By</th>
      <th >Action</th>
    </tr>
  </thead>
  <tbody>
  {inventoryAdjustments && inventoryAdjustments.map(inventoryAdjustment=>(
   <tr key={inventoryAdjustment.inventoryAdjustmentID}>
                  <td>{inventoryAdjustment.date_created}</td>
                  <td>{inventoryAdjustment.reason}</td>
                  <td>{inventoryAdjustment.description}</td>
                  <td>{inventoryAdjustment.status}</td>
                  <td>{inventoryAdjustment.reference_no}</td>
                  <td>{inventoryAdjustment.adjustment_type}</td>
                  
                  <td>{inventoryAdjustment.created_by?.name}</td>
                  

                  <td>
                    <Link to={`/dashboard/inventory-adjustment/${inventoryAdjustment.iventoryAdjustmentID}/edit`}>
                    <button className="btn btn-warning mr-1">
                <i className="feather icon-edit"></i>
                </button>
                    </Link>
  
                <button className="btn btn-danger" onClick={()=>deleteHandler(inventoryAdjustment)}>
                <i className="feather icon-trash-2"></i>
                </button>
                </td>
                  </tr>
        ))}
    
  </tbody>
  </table>
    </div>
    </>
)
  }

        

</div>

  
    )
}
export default InventoryAdjustmentList;
