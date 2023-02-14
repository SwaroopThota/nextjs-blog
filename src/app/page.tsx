import PostTitle from '@/components/PostTitle'
import { getPostTitles } from '@/utils/getPostRelatedData'

export default function Home() {
	const postTitles = getPostTitles(1).splice(0, 10)
	return (
		<>
			<p className='text-2xl'>Recent Posts</p>
			{postTitles.map((postTitle) => {
				return <PostTitle postTitle={postTitle} />
			})}
		</>
	)
}
