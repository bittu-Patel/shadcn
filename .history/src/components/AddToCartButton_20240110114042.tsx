"use client"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"


const AddToCartButton = () => {
    const [isSuccess, setSuccess]= useState<boolean>(false)

useEffect(() => {
    const timeout = setTimeout
})

  return (
<Button size='lg' className="w-full">
    Add TO Cart
</Button>
    )
}

export default AddToCartButton;