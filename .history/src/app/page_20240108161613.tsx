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
  name: 'For the Planet',
  Icon: Leaf,
  description:
    "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
},
 ];

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
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

    <Produ
    </MaxWidthWrapper>

    <section> 
     <MaxWidthWrapper className="py-12">
     <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </MaxWidthWrapper>
    </section>
    </>
  )
}