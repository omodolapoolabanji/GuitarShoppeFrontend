import {ShoppingCartIcon} from '@heroicons/react/24/solid'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromcart } from '../services/cartSlice'
import { getHost } from '../services/service'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Cart(){
    
    const count = useSelector((state)=>state.cart.items)
    const items = useSelector((state)=> state.cart.values)
    const total =  Intl.NumberFormat('en-US', { style: 'decimal' }).format(useSelector((state)=> state.cart.total) )
    const navigateCheckout = useNavigate()
    

    const style = {
        color :'grey',  
        className: 'size-6', width: '30px', height: '30px'
    }
    const dispatch = useDispatch()
    const remove = (item)=> dispatch(removeFromcart(item))

    
    useEffect(() => {
        
        const modalBackdrop = document.querySelector('.modal-backdrop');
        if (modalBackdrop) {
          modalBackdrop.remove();
        }
    
        document.body.classList.remove('modal-open');
        document.body.style.overflow = 'auto';
      }, []);


   async function checkout(){
    if(!localStorage.getItem('token')){
        alert('You need to be signed in to checkout any orders!')
        navigateCheckout('/')
        return
    }
    if (count < 1){
        alert('Cannot checkout an empty cart!')
        return 
    }
    
    const load = items.map((element)=>({...element, imageUrl: element.img}))
    load.forEach((element)=>
        {delete element['img']}
    )
    const data = {items: load}
    const host =getHost()
    const email = localStorage.getItem('email')
    const token = localStorage.getItem('token')
    let body = {
        method: 'POST',
        headers: {'Content-Type':'application/json', 
       'Authorization':`Bearer ${token.trim()}`},
        body: JSON.stringify(data), 
    }
    try
    {let request = await fetch(`${host}orders?email=${email}`, body)
    if(request.ok){
        alert("Item Checked out successfully")
        console.log(items)
        items.forEach((item)=>{
        const action = {items: 1, values: {name: item.name, description: item.description,
            price: item.price,
            img: item.imageUrl}

        }
            remove(action)}
        )

    }else{
        console.log(request.status)
        alert("We might have run into an error!")
    }
} 
    catch(err){
        console.error(err)
        alert('Problem checking out items!')
    }
    alert('You can view your orders by navigating to your profile and clicking on "Orders".')
    navigateCheckout('/')

   }
   

        return (
            <>
            <div className="position-relative" style={{ display: 'inline-block' }}  data-bs-toggle="modal" data-bs-target="#shopping-cart" >  
                <ShoppingCartIcon style={style} /> 
               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {count}
    <span className="visually-hidden">unread messages</span></span>
                

            </div>

            <div className='modal fade' id='shopping-cart' tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='modal-title fs-5' id='CartModalLabel'>Your Cart</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <div className='list-group'>
                                {items.map(
                                    (i, key)=>{console.log(i.img)
                                        const payload = {items: 1, values: {
                                            name: i.name,
                                            description: i.description,
                                            price: i.price,
                                            img: i.img
                                          }}
                                        return (<div className='list-group-item d-flex' key={key}>
                                            <img src= {i.img} alt={i.description} width='30px' height='30px'/>
                                            
                                            <div className='ms-3'>
                                                <span style={{fontWeight:'700'}}>{i.name}</span> <br />
                                                <span className=''>${i.price}</span>
                                            </div>
                                            <button type='button' style={{right: 0}} className='btn-close' onClick={()=>{remove(payload)}} ></button>
                                        </div>)
                                    }
                                )}

                            </div>

                            {/**this is where all the items in the cart would be displayed */}
                        </div>
                        <div className='modal-footer'>
                            <div style={{}}>Your Total: ${total}</div>
                            <button className='btn btn-dark' onClick={checkout}>Checkout items</button>
                            <button className='btn btn-secondary' data-bs-dismiss="modal">Close Cart</button>
                            
                        </div>
                    </div>

                </div>

            </div>
            </>
        )
}