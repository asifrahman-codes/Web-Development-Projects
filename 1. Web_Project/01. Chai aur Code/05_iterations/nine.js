//=================💡 Reduce Function ======================
const myNums = [1, 2, 3]

const myTotall = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)


//------------💡 Now Reduce in Arrow function --------------------------
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


//---------------------💡-------------------------
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);  //0 + 2999 + 999 + 5999 + 12999 = 22996
