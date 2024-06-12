import {Link} from 'react-router-dom'
import {useState} from 'react' 
import {MagnifyingGlassIcon } from '@heroicons/react/24/solid'
export default function SearchBar(){
    const [query, setQuery] = useState([])

    return (
        <div className='input-group me-3 mb-3'>
                <input type="text" onChange= {(ev)=>{setQuery(ev.target.value) }} className='form-control bg-light-subtle' placeholder='Search inventory...'style={{borderRight: 'none', }}/>
                

                <span className='input-group-text bg-light-subtle'  style={{border: ''}}><Link to={'/search/' + query}><MagnifyingGlassIcon className='size-6 ' style={{width: '24px', height:'24px', color:'black'
        }}/> </Link> </span>
              
            </div>
    )
}