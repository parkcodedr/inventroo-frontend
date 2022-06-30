

const ServiceCard = ({service})=>{
    return(
        <div className={`row mx-auto justify-content-center mt-2 ${service.right===true? 'background-right service-card-right':'background-left service-card-left'} `}>
            {service.right===true?(
                <>
                <div className="col-md-4 pt-5 pb-5">
                 <img src={`/app-assets/images/backgrounds/${service.image}`} className="image-responsive" />
                 </div>

                <section className="col-md-8 mt-5 ">
                <img src={`/app-assets/images/backgrounds/${service.logo}`} className="col-md-3 mt-2 ml-lg-5"  />
                <h4 className="color-main mt-1 mb-1 ml-lg-5">{service.title}</h4>
                <div className="col-md-8">
               <section>

                   
                <ul className="hero-text">
                    {service.items.map((item,index)=>(
                        <li className="mb-1" key={index}>
                            {item}
                    </li>
                    ))}
                    
                </ul>
                <button className="btn col-md-5 btn-main pr-lg-2 pl-lg-2 mt-2 ml-lg-5">Learn more</button>
               </section>
            
                </div>
                </section>
                 
                </>
            ):(
                <>
         
         <section className="col-md-8 mt-5">
                <img src={`/app-assets/images/backgrounds/${service.logo}`} className="col-md-3 mt-2 ml-lg-5"  />
                <h4 className="color-main mt-1 mb-1 ml-lg-5">{service.title}</h4>
                <div className="col-md-8">
               <section>

                   
                <ul className="hero-text">
                    {service.items.map((item,index)=>(
                        <li className="mb-1" key={index}>
                            {item}
                    </li>
                    ))}
                    
                </ul>
                <button className="btn col-md-5 btn-main pr-lg-2 pl-lg-2 mt-2 ml-lg-5">Learn more</button>
               </section>
            
                </div>
                </section>
                <div className="col-md-4 pt-5 pb-5">
                 <img src={`/app-assets/images/backgrounds/${service.image}`} className="image-responsive" />
                 </div>
                </>
            )}
           


        </div>
    )
}
export default ServiceCard;