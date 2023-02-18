import PostTitle from '@/components/PostTitle'
import { getPostTitles } from '@/utils/getPostRelatedData'
import Link from 'next/link'

export default function Home() {
	const postTitles = getPostTitles(1).splice(0, 10)
	return (
		<>
			<p className='text-2xl'>Recent Posts</p>
			{postTitles.map((postTitle) => {
				return <PostTitle postTitle={postTitle} key={postTitle.slug} />
			})}
			<Link
				href='/posts/1'
				className='p-2 bg-gray-100 shadow-inner rounded-md m-2 block w-fit'
			>
				Show more
			</Link>
		</>
	)
}
