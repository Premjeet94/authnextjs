export default async function UserProfile({params,}:{params:Promise<{id:any}>}){
    const {id} = await params;
    return(
        <div>
            <h1>Profile Page</h1>
            <hr />
            <p>Profile Page <span className="bg-amber-200 text-2xl text-black">{id}</span></p>
        </div>
    )
}