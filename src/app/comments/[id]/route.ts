import { comments } from "../data"

export async function GET(req: Request,
    {params}: {params: {id: string}}
    ) {
    const resComment = comments.find((element) => element.id === parseInt(params.id));
    return new Response(JSON.stringify(resComment), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 200
    })
}

export async function PATCH(req: Request,{params}: {params: {id: string}}) {
    const body = await req.json();
    const {text} = body; 
    console.log(text)
    const index = comments.findIndex((element) => element.id === parseInt(params.id))

    comments[index].text = text;
    // return JSON.stringify(comments[index]);
    return new Response(JSON.stringify(comments[index]), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 200
    })
}

export async function DELETE(req: Request,{params}: {params: {id: string}}) {
    const index = comments.findIndex((element) => element.id === parseInt(params.id))
    const deletedIndex = comments[index]
    comments.splice(index,1)
    return new Response(JSON.stringify(deletedIndex), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 200
    })
}