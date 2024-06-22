import { comments } from "./data";

export async function GET() {
    // console.log(comments)
    // console.log(JSON.stringify(comments))
    return new Response(JSON.stringify(comments), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 200
    })
}

export async function POST(request: Request) {
    const comment = await request.json()
    const newComment = {
        id: comments.length +1,
        text: comment.text
    }

    comments.push(newComment)
    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}