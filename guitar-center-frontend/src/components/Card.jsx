import {HeartIcon} from '@heroicons/react/24/solid'
import  '../assets/static/Card.css'

export default function Card({check, type}){

    function addToCard(){
        
    }
    
    var card = null; 
    if(check === 'categoryCard'  ){
            card =
            <div className="card bg-dark-subtle px-0 rounded-3 shadow-lg border-0 card-custom-guitar" style={{width: '13rem', height: 'auto',    }}>
                <img src={type.img} className="card-img-top ms-2" alt={type.name} style={{height: '150px', width: '150px', objectFit: 'contain',aspectRatio: 150/150,   mixBlendMode: 'multiply'  }}/>
                <div className="card-body" style={{backgroundColor: 'white',  overflow: 'hidden'}}>
                    <h5 className="card-title">{type.name}</h5>
                    <p className="card-text">{type.description}</p>
                </div>
            </div>

    }
    else if (check === 'catalogue') {
        var make = ''
        try{make = type.type.toLowerCase()}
        catch(e){
            make = type.category.toLowerCase()
        }
        make = make[0].toUpperCase()+ make.substr(1)
        var cleanPrice = Intl.NumberFormat('en-US', { style: 'decimal' }).format(type.price)
        card = (
            <div className="card bg-dark-subtle px-0 rounded-3 shadow-lg border-0 card-custom-guitar" style={{ width: '30rem', overflow: 'hidden' }}>
                <img
                    src={type.imageUrl}
                    className="card-img-top"
                    alt={type.name}
                    style={{ 
                        height: '200px', 
                        objectFit: 'scale-down',
                        width: '100%',
                        mixBlendMode: 'multiply'
                    }}
                />
                <div className="card-body" style={{ backgroundColor: 'white', overflow: 'hidden'}}>
                    <h5 className="card-title">{type.name}</h5>
                    <p className='' style={{fontWeight: '200', color:'grey'}}>{make} Guitar</p>

                    <div className='d-flex justify-content-between'>
                    <h5 className="card-text" style={{fontWeight: '600'}}>${cleanPrice}.00</h5>
                    <a href="" className="btn btn-secondary me-3 bg-dark" style={{ fontWeight: '100px' }}>Add to Cart</a></div>
                </div>
            </div>
        );
    }

   

    else{
            card = <div className="card bg-dark-subtle px-0 rounded-3 shadow-lg border-0 card-custom-guitar" style={{width: '18rem' ,  overflow: 'hidden'}}>
            <img src={type.imageUrl} className="card-img-top" style={{mixBlendMode: 'multiply' }} alt={type.name} />
            <div className="card-body" style={{backgroundColor: 'white', overflow: 'hidden' }}>
                <h5 className="card-title">{type.name}</h5>
                <p className="card-text">${type.price}</p>
                <a href="" className="btn btn-secondary me-3 bg-dark
                " style={{fontWeight: '100px' }}>Add to Cart</a>

                <a href="" stye><HeartIcon className='text-secondary rounded ' style={{width: '38px', height: '38px', border: 'solid '}}></HeartIcon></a>

            </div>
        </div>
    }
    return card

} 