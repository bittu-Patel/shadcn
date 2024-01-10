import { Icons } from "@/components/Icons"
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

 const Page = () => {
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
   <ArrowRight className />
</Link>

</div>
   </div>
    </div>
    </>
}


export default Page;