import {connect} from '@/src/lib/db'
import User from '@/src/models/user.model'
import {NextRequest,NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'


await connect()

export async function POST(requests: NextRequest){
   
    try {
        const reqBody = await requests.json()
        const {username, email, password} = reqBody

        console.log(reqBody)

        //Chk if user exists
       const existingUser = await User.findOne({email})
       if(existingUser){
        return NextResponse.json({error: 'User already exists'},{status: 400})}

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt)

        //create a new user
        const newUser = new User({username,email,password:hashedPassword})
        const savedUser = await newUser.save()
        console.log(savedUser)

        return NextResponse.json({message: 'User Created Successfully',success: true, savedUser})
       }
     catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}
