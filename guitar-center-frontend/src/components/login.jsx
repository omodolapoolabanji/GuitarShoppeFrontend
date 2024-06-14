import {UserCircleIcon} from '@heroicons/react/24/solid'

export function Login(){
    const sample =true
    const style = {color :'grey',  
    className: 'size-6', width: '30px', height: '30px'}
    /**this should work based on some logic that checks the state of the user's authorization, initially show something regarding whether to signup or login   */
    if (sample){
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
                                <button className='btn btn-dark me-2'>Login</button>
                                <button className='btn btn-dark'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            </>
        )
    }
    else{}

    
}

export function logout(){

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