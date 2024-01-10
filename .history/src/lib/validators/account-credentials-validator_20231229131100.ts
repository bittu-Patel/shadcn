const Page = () => {
    const AuthCredentialsValidator = z.object({
       email: z.string().email(),
       password: z.string()
       .min(8, "Password should be at least 8 characters.")
    }) 
 
    type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>