'use client';
import axios from 'axios'
import Link from 'next/link'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default async function UserProfile({params,}:{params:Promise<{id:any}>}){
 const router = useRouter()
    const logout = async ()=>{
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successfull')
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    const getUserDetails=async()=>{
        const res = await axios('/api/users/me')
        if(!res.data?.user){
            throw new Error('User not found')
        }
        
    }
    const {id} = await params;
    return(
        <div>
            <h1>Profile Page</h1>
            <hr />
            <p>Profile Page <span className="bg-amber-200 text-2xl text-black">{id}</span></p>
            <button onClick={logout} className="bg-white text-black m-4 ">Logout</button>
        </div>
    )
}