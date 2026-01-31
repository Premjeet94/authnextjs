import  connect  from "@/src/lib/db";
import User from "@/src/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const reqBody = await request.json();
    const { email, password } =  reqBody;
    console.log(reqBody);
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    //If User Exist
    const existingUser = await User.findOne({ email }).select('+password');
    if (!existingUser) {
      return NextResponse.json(
        { error: "User does not exist, Please LogIn" },
        { status: 400 },
      );
    }
    console.log("DEBUG password field:", existingUser.password);
    //If password is correct
    const validPassword = await bcryptjs.compare(password,
      existingUser.password,
    );
    if (!validPassword) {
      return NextResponse.json(
        { error: "Invalid Credentials" },
        { status: 400 },
      );
    }
    //Validate secret key
     const secret = process.env.TOKEN_SECRET;
    if (!secret) {
      throw new Error("TOKEN_SECRET is not defined");
    }

    //Creating Token data
    const tokendata = {
      id: existingUser._id,
      username: existingUser.username,
      email: existingUser.email,
    };
    //Create the token and send to client as cookies
    const token = jwt.sign(tokendata, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    //set to user cookie
    const response = NextResponse.json({
      message: "Login Successfully",
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error: any) {
     console.error("LOGIN API ERROR ❌", error);
    return NextResponse.json({ error: error?.message || "Internal Server Error" }, { status: 500 });
  }
}
