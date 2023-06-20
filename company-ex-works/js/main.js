// const shopingCart = [
// { id: 1, quantity: 2 },
// { id: 2, quantity: 1 },
// { id: 3, quantity: 1 },
// ];

// const fullInfo = [
// { id: 1, name: "fan" },
// { id: 2, name: "computor" },
// { id: 3, name: "mobile" },
// ];
// const selectedItem = { id: 2, quantity: 5 };

// const cartHandler = (shopingCart, selectedItem) => {
// const checking = shopingCart.find((el) => el.id === selectedItem.id);
// if (checking) {
//     return shopingCart.map((el) =>
//     el.id === selectedItem.id
//         ? { ...el, quantity: el.quantity + selectedItem.quantity }
//         : el
//     );
// }
// return [...shopingCart, { ...selectedItem }];
// };
// const finalShopCart = cartHandler(shopingCart, selectedItem);

// // finalShopCart.map(el=> console.log(el.quantity))

// const retreveQuantity=(fullInfoId)=>
// {
//     return finalShopCart.find(el=>el.id===fullInfoId);
// }

// fullInfo.forEach((el) => {
// console.log({id:el.id,name:el.name,quantity:retreveQuantity(el.id)});
// });

const url = "https://fakestoreapi.com/products";

// const getData=(callback)=>
// {
//     fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>callback(data));
// }

// getData((data)=>{console.log(data);})

async function  getData()
{
    const res= await fetch(url);
    const data= await res.json();
    console.log(data);
}
getData()