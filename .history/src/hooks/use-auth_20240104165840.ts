export const useAuth = () => {
    const SignOut = async () => {
        try{
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
                { 
                    method: "POST", 
                    credentials
            
            }
            )
        }
    }
}