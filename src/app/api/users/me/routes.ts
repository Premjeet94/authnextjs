import connect from "@/src/lib/db";
import getDataFromToken from "@/src/helpers/getDataFromToken";
import { NextRequest,NextResponse } from "next/server";
import User from "@/src/models/user.model";

export default async  function GET(request:NextRequest) {
   try {
    await connect();
    const data:any = getDataFromToken(request)
    const user = await User.findOne({_id: data.id})
    if(!user){
      return NextResponse.json({error: 'User not found'},{status:404})
    }
      return NextResponse.json({user},{status:200})

    
   } catch (error: any) {
    return NextResponse.json({error: error.message},{status:500})
   }



}