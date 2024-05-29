import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

export default function Hero(){
    return (
        

        <div className="d-flex pw-2 justify-content-between bg-light-subtle " style={{paddingTop: "50px", paddingBottom: '50px' }}>
            <div className='me-3 ms-3 align-content-center '>
                <h1 style={{fontWeight: 600, color: 'black' }}> Discover the Best Guitars</h1>
                <p style={{fontWeight:300, color:'grey' }}>
                    Explore our wide selection of high-quality guitars for every style and skill level
                </p>

                <div>

                    <Link to={'guitars/guitars'}  className='btn me-3 text-secondary' style={{}} >Shop Guitars</Link>
                   <Link to={'guitars/accessories'} style={{textDecoration: 'none'}}> <button className='btn btn-secondary'> Accessories</button></Link>
                </div>
            </div   >
                
            <div className='me-3  justify-content-end ' style={{backgroundColor: 'white' }} >
                <img  className='rounded-lg shadow-lg p-3' src="https://m.media-amazon.com/images/I/61RLzFHpZNL._AC_SX679_.jpg"  alt="Yamaha F325D" width={600}   height={600} style={{aspectRatio:600/600, objectFit: 'contain'
            }}/>
            </div>   

        </div>
        
    )

}