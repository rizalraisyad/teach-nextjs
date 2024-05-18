export default function Docs({
    params,
}: {
    params: {
        slug: string[]
    }
}) {  
    console.log( params.slug)
    if (params?.slug?.length===2 &&  String(params?.slug[0]) == "concept") {
        return <h1>View docs for slug {params.slug[0]} and concept {params.slug[1]}</h1>
    } else if (params?.slug?.length===1) {
        return <h1>View docs for slug {params.slug[0]}</h1>
    } 

    return <h1>Docs home</h1>;      
};
