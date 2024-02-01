import Link from 'next/link'
import React from 'react'

const PostCard = () => {
    return (
        <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link href="/blog/1" className="btn">Ready more...</Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard