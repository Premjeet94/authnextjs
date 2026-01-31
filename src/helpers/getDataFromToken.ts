import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export default function getDataFromToken(request: NextRequest){
    try {
        const token = request.cookies.get('token')?.value || '';
        if (!token) {
            throw new Error("No token found");
        }
        const secret = process.env.TOKEN_SECRET;    
        if (!secret) {
            throw new Error("TOKEN_SECRET is not defined");
        }
        const data = jwt.verify(token, secret);
        console.log(data)
        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}