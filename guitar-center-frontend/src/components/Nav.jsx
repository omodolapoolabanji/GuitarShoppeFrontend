import 'bootstrap/dist/css/bootstrap.min.css'
import {MusicalNoteIcon, UserCircleIcon, ShoppingCartIcon, MagnifyingGlassIcon} from  '@heroicons/react/24/solid'
import Cart from './Cart'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Header(){
    const style = {
        color :'grey',  
        className: 'size-6', width: '30px', height: '30px'
    }

    const headStyle ={
        position: 'sticky', 
        top: 0, boxShadow : '0px 0px 5px 0px  rgba(0, 0, 0, 0.1)', backgroundColor: 'white', zIndex:5 
    }

    return(
        <header className='d-flex m-auto align-items-center justify-content-between border  px-3 pt-2 pb-2' style={headStyle}>
            <a href="" style={{textDecoration:'none', display: 'flex'}} className='w-auto align-items-center'>
                <MusicalNoteIcon style={{color:'black', width:'30px', height:'30px'}} className='me-2   '></MusicalNoteIcon>
                <p className='me-3 pt-3' style={{whiteSpace:'pre-line', color:'black', fontWeight: 'bold'}} > Guitar Shoppe</p>
            </a>
            <div  style={{float:'right', display:'flex'}}>
            <div className='input-group me-3'>
                <input type="text" className='form-control bg-light-subtle' placeholder='Search inventory...'style={{borderRight: 'none', }}/>

                <span className='input-group-text bg-light-subtle'  style={{border: ''}}><MagnifyingGlassIcon className='size-6 ' style={{width: '24px', height:'24px'
        }}/></span>
              
            </div>

            <UserCircleIcon style={style} className='me-3' ></UserCircleIcon>
            <Cart />
            </div>
        </ header>
    )
}