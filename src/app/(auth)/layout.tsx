"use client"
import Link from "next/link"
import React, { useState } from "react"
const navlink = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
]

// const nav = [
//     {name: "Home", href: "/home"},
//     {name: "about", href: "/about"},
//     {name: "QnA", href: "/qna"},
//     {name: "Profile", href: "/profile"},
// ]

export default function AuthLayout (
    {children,}: 
    {children: React.ReactNode}) {
    const [username, setUsername] = useState("");
    const [val, setVal] = useState(0);
    let number = "";
    console.log("Val:",val)
    console.log("Number:",number)
    return (
        <div>
            {/* Number:{number}
            <br />
            Val:{val} */}
            <div>
                <input type={username} onChange = {(e)=> {setUsername(e.target.value)}} />
            </div>
            {/* <button onClick={(e) => {number = 1}}>Tambah number</button>
            <br />
            <button onClick={(e) => {setVal(val+1)}}>tambah val</button>
            <br /> */}
            {/* {nav.map((navItem) => {
                return ( <><a href={navItem.href}>{navItem.name}</a> </>)
            })} */}
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/profile">Profile</a>
            <a href="/qna">QnA</a>
            {navlink.map((link)=> {
                return (
                    <>
                    <Link href={link.href} key={link.name}>{link.name}</Link>
                    <br />
                    </>
                )
             })}
             {children}
        </div>
    )
};

// Bikin navbar
// div a href about
// div a href about
// 