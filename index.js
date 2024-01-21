let itemsContainerElement=document.querySelector('.items-container');
const items = [
  {
      id: '001',
      image: 'item2.jpg',
      company: 'Carlton London',
      item_name: 'Rhodium-Plated CZ Floral Studs',
      original_price: 1045,
      current_price: 606,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.5,
          count: 1400,
      },
  },
  {
      id: '002',
      image: 'item1.jpg',
      company: 'CUKOO',
      item_name: 'Women Padded Dress',
      original_price: 2599,
      current_price: 1507,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.3,
          count: 24,
      },
  },
  {
      id: '003',
      image: 'item3.jpg',
      company: 'NUEVOSDAMAS',
      item_name: 'Women Red & White Printed Skirts',
      original_price: 1599,
      current_price: 495,
      discount_percentage: 69,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.1,
          count: 249,
      },
  },
  {
      id: '004',
      image: 'item4.jpg',
      company: 'ADIDAS',
      item_name: 'Indian Cricket ODI Jersey',
      original_price: 999,
      current_price: 999,
      discount_percentage: 0,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 5.0,
          count: 10,
      },
  },
  {
      id: '005',
      image: 'item5.jpg',
      company: 'Roadster',
      item_name: 'Pure Cotton T-shirt',
      original_price: 1399,
      current_price: 489,
      discount_percentage: 65,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.2,
          count: 3500,
      },
  },
  {
      id: '006',
      image: 'item6.jpg',
      company: 'Nike',
      item_name: 'Men ReactX Running Shoes',
      original_price: 14995,
      current_price: 14995,
      discount_percentage: 0,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 0.0,
          count: 0,
      },
  },
  {
      id: '007',
      image: 'item7.jpg',
      company: 'The Indian Garage Co',
      item_name: 'Men Slim Fit Regular Shorts',
      original_price: 1599,
      current_price: 639,
      discount_percentage: 60,
      rating: {
          stars: 4.2,
          count: 388,
      },
  },
  {
      id: '008',
      image: 'item8.jpg',
      company: 'Nivea',
      item_name: 'Men Fresh Deodrant 150ml',
      original_price: 285,
      current_price: 142,
      discount_percentage: 50,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.2,
          count: 5200,
      },
  }
];


function displayItem()
{
    let innerHTML=``
    items.forEach(item=>{
    innerHTML+=`
    <div class="item">
    <img src="${item.image}" alt="">
     <div class="rating">
      ${item.rating.stars} ⭐ | ${item.rating.count}
     </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
      <span class="current-price">${item.current_price}</span>
      <span class="original-price"><strike>Rs${item.original_price}</strike></span>
      <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id});"
    >Add to bag</button>
    </div>`
    });
    itemsContainerElement.innerHTML=innerHTML;
}
let bagItems;
function addToBag(itemID)
{
    let BagItemsStr=localStorage.getItem('BagItems');
    bagItems=BagItemsStr?JSON.parse(BagItemsStr):[];
    if(itemID!==undefined)
    {
  bagItems.push(itemID);
    }
  let countNO=bagItems.length;
  localStorage.setItem('BagItems',JSON.stringify(bagItems));
  if(countNO>0)
  document.querySelector('.bag-item-count').innerHTML=countNO;
}
addToBag();
displayItem();


