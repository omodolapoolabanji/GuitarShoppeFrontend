import {ShoppingCartIcon} from '@heroicons/react/24/solid'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromcart } from '../services/cartSlice'


export default function Cart(){
    
    const count = useSelector((state)=>state.cart.items)
    const items = useSelector((state)=> state.cart.values)
    const style = {
        color :'grey',  
        className: 'size-6', width: '30px', height: '30px'
    }
    const dispatch = useDispatch()
    const remove = (item)=> dispatch(removeFromcart(item))



    function viewCart(){
        alert(count)
    }


        return (
            <>
            <div className=''   data-bs-toggle="modal" data-bs-target="#shopping-cart" >  
                <ShoppingCartIcon style={style} />   
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
                            <div style={{}}>Your Total: </div>
                            <button className='btn btn-dark'>Checkout items</button>
                            <button className='btn btn-secondary' data-bs-dismiss="modal">Close Cart</button>
                            
                        </div>
                    </div>

                </div>

            </div>
            </>
        )
}