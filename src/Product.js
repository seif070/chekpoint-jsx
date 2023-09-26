

import Card from 'react-bootstrap/Card';
const array=[
    {imgg:'https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwaba54a8c/nk/41a/5/f/1/7/e/41a5f17e_7d9e_4c5a_95e0_8ffcf22c1fdd.png?sw=210&sh=210&sm=fit',
        prix:"56"},
    {imgg:'https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwaba54a8c/nk/41a/5/f/1/7/e/41a5f17e_7d9e_4c5a_95e0_8ffcf22c1fdd.png?sw=210&sh=210&sm=fit',
prix : "456"}

]

const Product =()=>{

    return(
        <>
        
          {array.map((el) => (
            <Card style={{width:'18rem'}}>

            <Card.Img variant="top" src={el.imgg} />
            <Card.Body>
              <Card.Title>Nike Air Jordan 1 Retro High OG</Card.Title>
              <p>Price :{el.prix}$</p>
              <Card.Text>
              Luxurious neutrals and premium materials add up to one striking pair of J's. All the features you already love are here too, from Nike Air in the sole to the durable leather upper. And take a look at that textile Swoosh—now that's some flair.
              </Card.Text>
            </Card.Body>
          </Card>
    
      ))}
    </>
    )
}
export default Product;