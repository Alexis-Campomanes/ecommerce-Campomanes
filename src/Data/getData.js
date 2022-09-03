import { productsData } from "./ProductsData";

export const getData = () => {

return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve (productsData.products)
        }, 3000)
    })
}