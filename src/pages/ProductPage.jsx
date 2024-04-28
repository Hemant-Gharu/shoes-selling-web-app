import { useParams } from "react-router-dom";

const ProductPage = ()=>{
const params = useParams();
console.log("params", params);

return <h1>Product Page</h1>
}
export default ProductPage;