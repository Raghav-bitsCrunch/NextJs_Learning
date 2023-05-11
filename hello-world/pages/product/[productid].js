import { useRouter } from "next/router"

// use useRouter lib to query the productid in URL
function ProductDetails (){
    const router = useRouter()
    const productID = router.query.productid
    return<h1>Details about product {productID}</h1>
}
export default ProductDetails