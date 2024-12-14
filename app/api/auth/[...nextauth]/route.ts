import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import CredentialsProvider from 'next-auth/providers/credentials'

// export  function GET(req:NextRequest, {params:{authRoutes}}:{params:{
//     authRoutes:string[]
// }}){
//      console.log(authRoutes)

//     return NextResponse.json({
//         msg:"hi there"
//     })
// }

const handler = NextAuth({
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: 'email', type: 'text', placeholder: 'email' },
            password: { label: 'password', type: 'password', placeholder: 'password' },
          },
          async authorize(credentials: any) {
              console.log(credentials)
              return {
                  id: "user1",
                  email:"harkirat@gmial.com",
                  name:"harkirat singh"
              };
          },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
  })

export const GET = handler;
export const POST = handler;