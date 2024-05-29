import Card from "../components/Card"
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import {useLoaderData, useParams} from 'react-router-dom'

export default function Guitars(){
    const {type} = useParams()
    const data = useLoaderData(); 
    const guitars = []
    return(
        <div> 
            <div>
                <h1 className="header-title">{data.title}</h1>
                <p>{data.paragraph}</p>
            </div>

            {/* <input type="text" placeholder="Search Guitars"/> */}
            <div className='input-group me-3'>
                <input type="text" className='form-control bg-light-subtle' placeholder='Search inventory...'style={{borderRight: 'none', }}/>

                <span className='input-group-text bg-light-subtle'  style={{border: ''}}><MagnifyingGlassIcon className='size-6 ' style={{width: '24px', height:'24px'
        }}/></span>
              
            </div>

            <div className={data.visibility} >
                <button>Electric Guitars</button>
                <button>Acoustic Guitars</button>
                <button>Bass Guitars</button>
            </div>

            <div>
                <img src="" width={100} alt="" />
                <div>
                    {guitars.length > 0 ? (guitars.map((items)=>(<Card  />))): (<p>No {data.type} to be displayed</p>)}
                </div>
            </div>
            <div>
                <div>
                    <p>

                    {"< Previous"} {/** Add logic for pagination */}
                        {"Next >"}
                    </p>
                        
                </div>
            </div>    

        </div>
    )
}

export async function getGuitars(){
    const data = {
        title: 'Discover Your Perfect Guitar', 
        paragraph : 'Browse our extensive collection of guitars and find the one that speaks to your musical soul', 
        visibility: 'visible', 
        type: 'guitars', 
        guitars: [] 


    }

    return data


}

export async function getAccessories(){

    const data = {title: 'Find The Perfect Accessory curated for you', 
    paragraph : 'Browse our extensive collection of guitars and find the one that speaks to your musical soul', 
    visibility: 'invisible', 
    type: 'guitars', 
    guitars: []
}
    return data
}
