'use client'
import { PostTitle } from '@/types'
import Link from 'next/link'

const PostTitlesDisplayPage = ({ postTitles }: { postTitles: PostTitle[] }) => {
	return (
		<>
			{postTitles.map((postTitle) => {
				return (
					<PostTitleCard postTitle={postTitle} key={postTitle.slug} />
				)
			})}
		</>
	)
}

const PostTitleCard = ({ postTitle }: { postTitle: PostTitle }) => {
	return (
		<Link
			href={`/posts/${postTitle.slug}`}
			className='block my-2 py-5 px-2 hover:bg-slate-100 rounded-md hover:shadow focus-within:shadow focus:bg-slate-100'
		>
			<p className='text-base'>{postTitle.title}</p>
			<p className='text-xs text-gray-400 font-medium'>
				<>
					Posted By {postTitle.author} on {postTitle.date}
				</>
			</p>
		</Link>
	)
}

export default PostTitlesDisplayPage
