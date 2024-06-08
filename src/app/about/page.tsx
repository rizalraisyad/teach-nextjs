'use client'
import Link from "next/link"

export default function About() {
    return (
    <div className="">
        <h1 >About</h1>
        <a href="/profile"> CLICK HERE TO GO TO PROFILE</a>    
        <a href="/about/secondAbout"> CLICK HERE TO GO TO Second About</a>   
        <br />
        <Link href= "/docs">DOCS</Link>
        <br /> 
        <Link href= "/docs" replace>DOCS Replace</Link> 
    </div>
    )
}