import {UserCircleIcon} from '@heroicons/react/24/solid'
import { getHost } from '../services/service'
import {useState, useEffect} from 'react'

export function Login(){
   
    const style = {color :'grey',  
    className: 'size-6', width: '30px', height: '30px'}
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')  
    const [password, setPassword] = useState('')
    const[items, setItems] = useState([])
    
    
    const fetchOrders = async()=>{
        try{
            const host = getHost()
            const request = await fetch(`${host}orders?email=${localStorage.getItem('email')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token').trim()}`
                }
            });
            if(request.ok){
                const data = await request.json()
                console.log(data)
                setItems(data)
            }else{
                alert('Problems fetching orders from server!')
            }
        }catch(err){
            console.error(err)
            alert("Something went wrong! ")
        }

    }

    const handleFetch = async ()=>{
        await fetchOrders()
    }
   
    
        
        
  
        
       
        
 


    const verificationHandler = async (id) => {
        localStorage.setItem('email', email)
        console.log(id, email, password);
        let customer = { email, password };
        let request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customer)
        };
    
        try {
            let response = await fetch(getHost() + id, request);
            
            if (response.ok) {
                if(id == 'login')
                {alert('Login successful!');
                localStorage.setItem('token',await response.text());
                window.location.reload()
                
                console.log()}
                else{
                    alert('Signup successful !')

                }
            } else {
                if (response.status === 409) {
                    alert('This email is already in use!');
                } else {
                    alert('We ran into an error, please check your credentials and try again!');
                }
                localStorage.removeItem('token');
            }
        } catch (e) {
            console.error(e);
            alert('Something went wrong!');
        }

        
    };

   
    const handleSignup = (event) => {
        event.preventDefault();
        verificationHandler('signup');
    };

    const handleLogin = (event) => {
        event.preventDefault();
        verificationHandler('login');

    };


   
    /**this should work based on some logic that checks the state of the user's authorization, initially show something regarding whether to signup or login   */
    if (!localStorage.getItem('token')){
        return (
            <>
                
                <UserCircleIcon style={style} className='me-3' data-bs-toggle="modal" data-bs-target="#selectionQuery" />
               

            <div className='modal fade' id='selectionQuery' tabIndex='-1' aria-labelledby="selectionModalLabel" aria-hidden="true">
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='selectionModalLabel'>Please Select</h5>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-dark me-2' data-bs-toggle="modal" data-bs-target="#loginModal" >Login</button>
                                <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target="#signUpModal">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='modal fade' id='loginModal' tabIndex='-1' aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='loginModalLabel'>Login</h5>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <form onSubmit={handleLogin}>
                                <div className='mb-3'>
                                    <label htmlFor='email' className='form-label'>Email address</label>
                                    <input type='email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} id='email' required />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='password' className='form-label'>Password</label>
                                    <input type='password' className='form-control'value={password} onChange={(e)=>setPassword(e.target.value)} id='password' required />
                                </div>
                                <button type='submit' className='btn btn-primary w-100' >Login</button>
                            </form>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='modal fade' id='signUpModal' tabIndex='-1' aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='loginModalLabel'>Signup</h5>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <form onSubmit={handleSignup}>
                                <div className='mb-3'>
                                    <label htmlFor='email' className='form-label'>Email address</label>
                                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' id='email' required />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='password' className='form-label'>Password</label>
                                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' id='password' required />
                                </div>
                                <button type='submit' className='btn btn-primary w-100'>Sign Up</button>
                            </form>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            
            </>
        )
    }
    else{
        return(
            <>
            <UserCircleIcon style={style} className='me-3'  data-bs-toggle="modal" data-bs-target="#logoutHandle"/>

            <div className='modal fade' id='logoutHandle' tabIndex='-1' aria-labelledby="selectionModalLabel" aria-hidden="true">
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='selectionModalLabel'>Please Select</h5>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-dark me-2' data-bs-toggle="modal" data-bs-target="#ordersModal" onClick={fetchOrders} >Orders</button>
                                <button className='btn btn-dark' type='button' onClick={logout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='modal fade' id='ordersModal' tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='modal-title fs-5' id='CartModalLabel'>Your Orders</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className='modal-body'>
                            <div className='list-group'>
                                {items.map(
                                    (i, key)=>(
                                        
                                            <div className='list-group ' key={key}>
                                                {i.items.map(
                                                    (item, k)=>(
                                                        
                                                        <div className='list-group-item d-flex' key={k}>
                                            <img src= {item.imageUrl} alt={item.description} width='30px' height='30px'/>
                                            
                                            <div className='ms-3'>
                                                <span style={{fontWeight:'700'}}>{item.name}</span> <br />
                                                <span className=''>${item.price}</span>
                                            </div></div>

                                                    )
                                                )}


                                            <button type='button' style={{right: 0}} className='btn-close'  ></button>
                                            </div>
                                        
                                    )
                                )}

                            </div> 

                          
                        </div>
                        
                    </div> </div> </div>
            </>

            


        )
    }

    
}

export function logout(){

    localStorage.removeItem('token')
    localStorage.removeItem('email')
    alert('Logged Out!')
    window.location.reload()
    

}

{/* <>  
        <UserCircleIcon style={style} className='me-3' data-bs-target="" data-bs-toggle="modal" ></UserCircleIcon>
        <div className='modal'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <form action="">
                        <div className='mb-3'>
                            <label htmlFor="login" ></label>
                            <input type="text" />
                        </div>
                    </form>

                </div>

            </div>
        </div>


        </> */}