import Card from './Card'

export default function Category(){
    const categories = [

        {id:  'categoryCard', name: 'Electric Guitars', description: 'Explore our collection of electric guitars', img: 'https://m.media-amazon.com/images/I/61bE5NRxmUL.__AC_SX300_SY300_QL70_FMwebp_.jpg'   }, {id:  'categoryCard', name: 'Acoustic Guitars', description: 'Discover our range of acoustic guitars', img: 'https://m.media-amazon.com/images/I/61qzv-v+ZqL._AC_SX679_.jpg'   }, {id:  'categoryCard', name: 'Classical Guitars', description: 'Explore our selection of classical guitars', img: 'https://m.media-amazon.com/images/I/61F0KyoXBpL.__AC_SX300_SY300_QL70_FMwebp_.jpg'   }, {id:  'categoryCard', name: 'Amps', description: 'Browse our collection of guitar amps', img: 'https://m.media-amazon.com/images/I/91ldyxsaJcL._AC_SX679_.jpg'   },  {id:  'categoryCard', name: 'Accessories', description: 'Browse our collection of guitar accessories', img: 'https://m.media-amazon.com/images/I/81Ug3dUhL3L._AC_SX679_.jpg'   }
    ]

    

    return(
        <div className='my-5 ms-3' >
        <h3 className='mb-5'>Shop by Category</h3>
        <div className='d-flex mb-2 justify-content-evenly '  >
            {categories.map((category, index) => (
                <Card key={index} type={category} />
            ))}
        </div>
        </div>
    )


}