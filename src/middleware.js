import { NextResponse } from "next/server"


export function middleware(request) {
    console.log("middleware")   
    // if (request.nextUrl.pathname!=="/login"){
    //     return NextResponse.redirect(new URL("/login",request.url))
    // }
 
}
//  export const config={
//     matcher:["/about/:path*","/home1/:path*"] //if you want to add middlware on specific path
//  }