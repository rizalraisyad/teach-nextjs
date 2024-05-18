import {Metadata} from "next";

type Props = {
    params: {
        productId: string
    }
}

export async function generateMetadata({ params }: Props) : Metadata{
     return { title: `Product ${params.productId}` }
}


export default function ProductList({params}: Props) {
    return (
       <>
           <h1>Detail Product shirt {params.productId}</h1> 
       </>
    )
}