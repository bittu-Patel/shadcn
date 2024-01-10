import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Icons } from "./Icons"


export const Navbar = () => {
    return (
        <div>
            <header className="bg-white sticky  z-50 top-0 inset-x-0 h-16">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/* Todo: Mobile Nav*/}

                            <div className="ml-4 flex lg:ml-0">
                                <Link ></Link>
                                
                                    <Icons.logo className='h-10 w-10' />
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>

        </div>
    )
}

