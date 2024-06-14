import {MusicalNoteIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export default function Footer(){


    return(
        <footer className='bg-dark ps-3 align-items-center d-flex  justify-content-between text-light mt-3' style={{bottom: 0, position: 'relative' }}>
            <Link to={'/'} style={{textDecoration:'none', display: 'flex'}} className='w-auto align-items-center'>
                <MusicalNoteIcon style={{color:'white', width:'30px', height:'30px'}} className='me-2   '></MusicalNoteIcon>
                <p className='me-3 pt-3' style={{whiteSpace:'pre-line', color:'white', fontWeight: '400px'}} > Guitar Shoppe</p>
            </Link>

            <div className='d-flex justify-content-between ' >
            <a href="" className='me-2' style={{color: 'white', textDecoration: 'none'}}>About</a>
            <a href="" className='me-2' style={{color: 'white', textDecoration: 'none'}}>Contact</a>
            <a href="" style={{color: 'white', textDecoration: 'none'}}>FAQ</a>
            </div>

            <div className=''>

                <p className=' my-0 py-0 pe-3' style={{fontWeight: '50px', fontSize: '11px'}}> © 2024 Guitar Shoppe. All Imaginary rights reserved. </p>
            </div>
        </footer>
    )
}