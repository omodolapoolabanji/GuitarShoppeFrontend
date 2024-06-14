import Card from '../components/Card'
import {getHost} from '../services/service'
import {useEffect, useState} from 'react'
import {useLoaderData} from 'react-router-dom'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

export default function Search(){

    const query = useLoaderData()
    
    const [guitars, setGuitars] = useState([])
    async function getSearch(query){
        let host =  getHost()
        let response = null
        try{
            let request = await fetch(host + `items/search/${query}`)
            if(request.ok){
            response = await request.json()}

            // setGuitars()
           
            // console.log(guitars)
        }
        catch(e){
            console.error(e)
            // alert('Something went wrong :(')
        } 
        
        return response
    }

    useEffect(
         ()=>{
            const display = async () =>{
                const result = await getSearch(query)
                setGuitars(result)
                
                console.log(result)
            }
            display()
        },[query] 
    )

    // getSearch(query)

    return (
        
        <>{/* search header */}
        <div className='mx-3 mt-2'>
        <SearchBar /></div>
        
            <div className='ms-3 md-3'>
                <h2>
                    Showing search results for "{query}" 
                </h2>
            </div>

            <div className='mx-3' >
                { guitars ? guitars.map(
                    
                    (items, index)=>(
                        <div className='my-3'> <Card key={index} check={'catalogue'} type={items} /> </div> 
                    ) 

                ) : <p> No search results for your query!</p>}</div>
                  

                <div className='' style={{position: 'absolute', bottom: 0 , width: '100%'}}>
                <Footer  />
                </div>
        </>
        
        )



}

