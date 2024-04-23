document.querySelector('button').addEventListener("click",()=>{
    dataLayer.push({ecommerce: null})
    dataLayer.push({
        event:"addToCart",
        ecommerce :{
            currencyCode:"USD",
            add:{
                products : [{
                    name: "Shoes",
                    id:"12345",
                    price: "71.99",
                    quantity: 1
                }]
            }
        }
    })
})