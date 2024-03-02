export default function MenuDetails({params}: {params: {menuId: string};})  {
    return (
       <>
           <h1>Menu {params.menuId}</h1> 
       </>
    )
}