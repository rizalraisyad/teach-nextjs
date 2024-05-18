"use client"
import { redirect } from "../../../../node_modules/next/navigation";
import { notFound } from "../../../../node_modules/next/navigation";

export default function MenuDetails({params}: {params: {menuId: string};})  {
    // const menu = fetch(menu -> menuId 1)
    // if (!menu) {
    //     redirect()
    // }
    // const test = 1;
    // console.log(params) -- disini 
    if(parseInt(params.menuId) > 100 ) {
        notFound()
    }
    return (
       <>
           <h1>Menu {params.menuId}</h1> 
           {/* <h1>Menu {test}</h1>  */}
           {/* <h1>Menu {params.description}</h1>  */}
       </>
    )
} ///disinii