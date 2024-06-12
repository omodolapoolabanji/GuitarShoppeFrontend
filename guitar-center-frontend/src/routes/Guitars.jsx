import Card from "../components/Card"
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import {useLoaderData, useParams, Link} from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'
import { getHost } from "../services/service"
import SearchBar from "../components/SearchBar"
import Footer from '../components/Footer'

export  default function Guitars(){

    // const {type} = useParams()
    const data = useLoaderData(); 
    const [guitars, setGuitars] = useState([])
    const [page, setPage] = useState(0)
    const [filter, setFilter] = useState('') 
    const [visible, setVisible] = useState('')
    const [query, setQuery] = useState('')


    
    const refs =useRef([])

    const pageChange = (event)=>{

        setPage(parseInt(event.target.innerHTML)-1)

    }



useEffect(
    ()=>{
        const fetchData = async()=>{
            const display = await collectData(data.type)
            setGuitars(display)
        }
        fetchData()
    }, [page, data.type, filter]
)
//functtion to move the page using the pointer buttons
function movePage(pointer) {
    if (pointer === 'previous') {
        setPage((prevPage) => (prevPage === 0 ? 2 : prevPage - 1));
    } else {
        setPage((prevPage) => (prevPage === 2 ? 0 : prevPage + 1));
    }
}
//actions based on side effects for guitars and pages
    useEffect(
        ()=>{
                if(refs){
                    const pageNumber  = page + 1
                    refs.current.forEach(
                    (buttons)=>{
                        buttons.addEventListener('click',pageChange )
                        // console.log(guitars)
                        // console.log(page)
                        if(parseInt(buttons.innerHTML) === pageNumber){
                            buttons.className = 'btn btn-secondary active'
                        }
                        else{
                            buttons.className = 'btn btn-secondary'
                        }
                    }
                )
            }

                // return ()=>{
                //     refs.current.forEach(
                //         (buttons) => {
                //             buttons.removeEventListener('click', pageChange)
                //         }
                //     ), guitars}
        }, [guitars, page]

    )

    useEffect(

        ()=>{
            collectData(data.type)
        
        }, [filter]
    )

 
    function filterGuitars(idx){
        setFilter('/'+idx.toUpperCase())
        setVisible('invisible')

    }
    
    async function collectData(type){
        const host = async () =>{
            let answer =  await getHost()
            console.log(answer)
            return answer
            }
        
        let extension = type === 'guitars'? `items/guitars${filter}?page=${page}`:'items/accessories'
        let result = null
        try{
            console.log(page)
            let url = await host()
            let response = await fetch( url+ extension)
            if(response.ok){
                console.log(response)
                result = await response.json()}
        }
        
        catch (e){
            console.error(e)
        }
        return result
    }

    // function searchGuitars(query){


    // }

    
    
    let buttonsGroup = []
    for(let i=0; i < 3; i++ ){
        buttonsGroup.push(
            <li key={i}>
                <button className="btn btn-secondary list-group-item " ref={e=>{ refs.current[i] = e}} key={i}>{i+1}</button></li>

            
        )
    }
    const groupGuitars = (guitars) => {
        const grouped = []
        for (let i = 0; i < guitars.length; i += 2) {
            grouped.push(guitars.slice(i, i + 2))
        }
        return grouped
    }

    const groupedGuitars = groupGuitars(guitars)

    
    return(
        <>
        <div className="ms-2"> 
        
        <div className=" bg-light-subtle pb-3 ">
        <div className="mt-2 mx-2">< SearchBar/></div>
            <section className = 'd-flex justify-content-between mx-3'>
                <div className="my-auto py-auto ">
                <h1 className="header-title mt-2" style={{fontWeight: '700', fontSize: '60px'}}>{data.title}</h1>
                <p style={{fontWeight: '300', color: 'grey', lineHeight: ''}} className="">{data.paragraph}</p>
                </div>
                
               
                    <div className="bg-dark-subtle rounded-4 ms-2">
                    <img className="image-fluid rounded float-end " style={{width: '500px', height: '500px', objectFit: '',mixBlendMode: 'multiply'}} src="https://media.guitarcenter.com/is/image/MMGS7/583500000003000-00-600x600.jpg"  alt="Yamaha guitar as the display for the guitars page"  />
                    </div>



            </section>

            {/* <input type="text" placeholder="Search Guitars"/> */}
            

            <div className={data.visibility} style={{marginTop: '40px'}} >
                <div className="d-flex justify-content-evenly">
                <button className="btn btn-dark" onClick={()=>{filterGuitars('ELECTRIC')}} >Electric Guitars</button>
                <button className="btn btn-dark" onClick= {()=>{filterGuitars('ACOUSTIC')}}>Acoustic Guitars</button>
                <button className= 'btn btn-dark' onClick={()=>{filterGuitars('CLASSICAL')}} >Classical Guitars</button>
                </div>
            </div>
            </div>
            <div className="mx-auto text-center">
                <img src="" width={100} alt="" />
                <div className="container justify-content-md-center mx-auto">
                    <div className="row justify-content-md-center">
                    {guitars.length > 0 ? (
                        groupedGuitars.map((group, rowIndex) => (
                            <div className="row mb-3 justify-content-between align-items-center" key={rowIndex}>
                                {group.map((item, colIndex) => (
                                    <div className="col-md-6 mt-2 " key={colIndex}>
                                        <Card type={item} check={'catalogue'} />
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p>No {query} to be displayed</p>
                    )}
                    </div>
                </div>
            </div>
            <div  className="mt-5">
                <div className={`${visible}`}>
                    <div className="d-flex justify-content-evenly">
                    <button className= 'btn ' onClick={()=>{movePage('previous')}}>
                    {"< Previous"}</button> {/** Add logic for pagination
                     * 
                     * lets take the number of elements in the guitars array and make pages depending on it, then I can use the children router prop to hook some idk
                     */}
                    <ul className="d-flex list-group-horizontal justify-content-between m-auto" style={{listStyle: 'none'}}>
                     {
                        
                                buttonsGroup
                     }
                     </ul>

                     <button className="btn" onClick={()=>{movePage('next')}}>
                        {"Next >"}</button>
                        
                    </div>
                    
                        
                </div>
            </div>    

            

        </div>
        <Footer />
        </>
    
        
    )
}



export async function getGuitars(){
    const data = {
        title: 'Shop Guitars', 
        paragraph : 'Discover our wide selection of high-quality guitars, from classic acoustics to cutting-edge electrics. Find the perfect instrument to suit your style and skill level.', 
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
    type: 'accessories', 
    guitars: []
}
    return data
}
