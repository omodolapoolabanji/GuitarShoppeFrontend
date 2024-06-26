import Card from "./Card"

export default function Popular(){
    // need to revisit this, needs to be dynamically filled by the popular items in the backend    
    const cards = [

        {name: 'Fender American Professional II Stratocaster', id: '' , price: 1499.99 , imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/L46829000001000-00-600x600.jpg'    }, {
            name: 'Martin D-28 Acoustic Guitar', id: '', imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/L59796000001000-00-600x600.jpg', price: 2199.99   
        }, {
            name: 'Ibanez RG550 Genesis Electric Guitar', id: '', price: 999.99, imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/L46834000001000-00-600x600.jpg'  
        }
    ]
    var key = 0 

        return(
             
            <div className="bg-light-subtle my-5 ps-3 pe-3 pb-5">
                <h3 className="mb-5 ">  Top Selling Guitars</h3>
                <div className="d-flex justify-content-between">
                {
                
                   cards.map((item)=>(
                    
                    <Card key={key++} type= {item} />
                   ))
                }
                </div>


            </div>
        )

}