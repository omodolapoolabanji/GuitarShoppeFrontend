import Card from "./Card"

export default function Top(){
    // need to revisit this, needs to be dynamically filled by the popular items in the backend    
    const cards = [

        {
            "name": "Gator Transit Series Gig Bag",
            "description": "Durable and protective gig bag with plush interior and water-resistant exterior.",
            "imageUrl": "https://media.guitarcenter.com/is/image/MMGS7/L96281000001000-00-600x600.jpg",
            "id": 212,
            "price": 50,
            "category": "Cases",
            "type": null
        },
        {
            "name": "Mogami Gold Instrument Cable",
            "description": "Premium instrument cable with superior signal clarity and durability.",
            "imageUrl": "https://media.guitarcenter.com/is/image/MMGS7/333170000000084-00-600x600.jpg",
            "id": 213,
            "price": 40,
            "category": "Cables",
            "type": null
        },
        {
            "name": "D'Addario EXL110 Strings",
            "description": "High-quality electric guitar strings with a balanced tone and long-lasting durability.",
            "imageUrl": "https://media.guitarcenter.com/is/image/MMGS7/H71088000000000-00-600x600.jpg",
            "id": 214,
            "price": 10,
            "category": "Strings",
            "type": null
        }
    ]
    var key = 0 

        return(
             
            <div className=" my-5 ps-3 pe-3">
                <h3 className="mb-5 ">  Top Selling Amps and Accessories</h3>
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