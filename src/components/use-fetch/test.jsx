import { useEffect } from "react"
import useFetch from "."




export default function useFetchHookTest(){


    const {data,error,pending}=useFetch('https://dummyjson.com/products',{})

   

    return (<div>
        <h1>use Fetch Hook</h1>
        {
            pending ?<h3>pending please wait</h3>: null
        }
        {
            data && data.products.length ? data.products.map(prodcutItem=><p key={prodcutItem.key}>prodcutItem.title</p>):null
        }
    </div>)
}

