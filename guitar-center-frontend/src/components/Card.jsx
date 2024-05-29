import {HeartIcon} from '@heroicons/react/24/solid'

export default function Card({type}){

    var card = null; 
    if(type.id === 'categoryCard'  ){
            card =
            <div className="card bg-dark-subtle shadow" style={{width: '13rem', height: 'auto',    }}>
                <img src={type.img} className="card-img-top ms-2" alt={type.name} style={{height: '150px', width: '150px', objectFit: 'contain',aspectRatio: 150/150,   mixBlendMode: 'multiply'  }}/>
                <div className="card-body" style={{backgroundColor: 'white'}}>
                    <h5 className="card-title">{type.name}</h5>
                    <p className="card-text">{type.description}</p>
                </div>
            </div>

    }else{
            card = <div className="card bg-dark-subtle" style={{width: '18rem' }}>
            <img src={type.img} className="card-img-top" style={{mixBlendMode: 'multiply' }} alt={type.name} />
            <div className="card-body" style={{backgroundColor: 'white' }}>
                <h5 className="card-title">{type.name}</h5>
                <p className="card-text">{type.price}</p>
                <a href="" className="btn btn-secondary me-3 bg-dark
                " style={{fontWeight: '100px' }}>Add to Cart</a>

                <a href="" stye><HeartIcon className='text-secondary rounded ' style={{width: '38px', height: '38px', border: 'solid '}}></HeartIcon></a>

            </div>
        </div>
    }
    return card

} 