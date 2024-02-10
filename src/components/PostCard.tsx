import { Tag } from '@prisma/client';
import Link from 'next/link'
import { FC } from 'react';
interface PostCardProps {
    post: {
        id: string;
        title: string;
        content: string;
        tag: Tag
    }
}
const PostCard: FC<PostCardProps> = ({ post }) => {
    const { title, content, tag, id } = post

    return (
        <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content.substring(0, 30)}</p>
                <div className="card-actions flex items-center justify-between">
                    <span className="badge badge-neutral">{tag.name}</span>
                    <Link href={`/blog/${id}`} className="btn">Ready more...</Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard