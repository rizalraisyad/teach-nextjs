export default function Menu() {
    return (
       <>
           <h1>MENU List</h1> 
           <div className="flex-1 lg:min-h-64 md:min-h-32 xl:min-h-86 md:bg-red-100 bg-blue-100">
            <h1 className="">
                <a href="menu/1">MENU 1</a>
                </h1>  
           </div>
           <h1 className="lg:bg-orange-800 md:bg-red-200 sm:bg-blue-100 bg-cyan-200">MENU 2</h1> 
           <h1 className="text-5xl font-bold underline">MENU 3</h1> 
       </>
    )
}