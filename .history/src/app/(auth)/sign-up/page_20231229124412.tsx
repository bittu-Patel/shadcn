"use client"
import 
import { Icons } from "@/components/Icons"
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {useForm} from "react-hook-form"


const Page = () => {

const { register, handleSubmit, formState: {errors} } = useForm({
   resolver: zodResolver()
})

  return <>
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
   <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
<div className="flex flex-col items-center">
<Icons.logo className='h-10 w-10 ' />
<h1 className="font-bold text-2xl">Create an account</h1>
<Link 
className={buttonVariants({
   variant: "link",
   className: 'gap-1.5'
})}
href='/sign-in'>
   Already have an account? Sign in
   <ArrowRight className="h-4 w-4" />
</Link>

</div>
<div className="grid gap-6 ">
   <form >
<div className="grid gap-2">  
<div className="grid gap-1 py-2">
   <Label htmlFor="email">Email</Label>
   <input className={cn({
      'focus-visible:ring-red-500': true
   })}
   placeholder="you@example"
   />
    </div>
    <div className="grid gap-1 py-2">
   <Label htmlFor="password">Password</Label>
   <input className={cn({
      'focus-visible:ring-red-500': true
   })}
   placeholder="you@example"
   />
    </div>
    <Button>Sign-up</Button>
</div>
   </form>
</div>
   </div>
    </div>
    </>
}


export default Page;