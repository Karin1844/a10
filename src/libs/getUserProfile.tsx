export default async function getUserProfile( token:String ){
    const response = await fetch("https://a08-venue-explorer-backend-3.vercel.app/api/v1/auth/me",{
        method: "GET",
        headers: {
            authorization : `Bearer ${token}`
        },
    })

    if(!response.ok){
        throw new Error("Cannot Get User Profile")
    }

    return await response.json();
}