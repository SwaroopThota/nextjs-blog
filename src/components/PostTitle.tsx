import { PostTitle } from '@/utils/Post'
import Link from 'next/link'
import React from 'react'

interface IProps {
	postTitle: PostTitle
}

const PostTitle = ({ postTitle }: IProps) => {
	return (
		<Link
			href={`/post/${postTitle.slug}`}
			className='block my-2 py-5 px-2 hover:bg-slate-100 rounded-md hover:shadow focus-within:shadow focus:bg-slate-100'
		>
			<p className='text-base'>{postTitle.title}</p>
			<p className='text-sm text-gray-400'>
				<>
					Posted By {postTitle.author} on {postTitle.date}
				</>
			</p>
		</Link>
	)
}

export default PostTitle
