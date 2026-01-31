import mongoose from "mongoose";
export default async function connect(){
    try{
        mongoose.connect(process.env.MONGODB_URL!);
       const connection = mongoose.connection
       connection.on('connected',()=>{
        console.log('MongoDB connected successfully')
       })
       connection.on('error', (error)=>{
        console.log('MongoDB Connection Error'+error)
        process.exit();
       })
    }catch(error){
        console.log('Something went wrong!')
        console.log(error)
    }
}