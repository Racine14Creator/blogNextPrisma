import { Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ButtonAction = () => {
    return (
        <div>
            <Link href={'/edit/1'} className='mr-2 btn'>
                <Pencil />
                Edit</Link>
            <button className="btn btn-error">
                <Trash />
                Delete</button>
        </div>
    )
}

export default ButtonAction