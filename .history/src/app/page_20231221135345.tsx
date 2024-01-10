import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';


const perks = [
  {
     name: 'Instant Delivery',
     Icon: ArrowDownToLine,
     description: 'Get your assets delivered to your email instantly. Download, write away, and create at your own pace.',
  },

  {
    name: 'Granted Quality',
    Icon: CheckCircle,
    description: 'Every assets on our platform is verified by our team to ensure highest quality standards.',
 },

 {
  name: 'For The Planet',
  Icon: Leaf,
  description: 'we ve ,
},
 ];
 

export default function Home() {
  return (
    <>
    <MaxWidthWrapper >
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
   Our market place provide high<span className="text-primary"> quality icons
</span>. 
</h1>
  <p className="mt-6 text-lg max-w-prose text-muted-foreground">
    Welcome to quality icons. Every assets on our platform is verified by our team to ensure highest quality standards.
    
    </p> 
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
     <Link href="/" className={buttonVariants()}> Browse Trending</Link>
     <Button variant='ghost'>Our Quality Product &rarr;</Button>
      </div>  
    </div>

    {/* Todo List*/}
    </MaxWidthWrapper>

    <section> 
     <MaxWidthWrapper className="py-20">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
      </div>
      </MaxWidthWrapper>
    </section>
    </>
  )
}
