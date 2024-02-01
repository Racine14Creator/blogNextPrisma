'use client'
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const BackButton = () => {
    const router = useRouter()
    return <button className='btn btn-error' onClick={_ => router.back()}><ChevronLeft /> Back</button>
}

export default BackButton