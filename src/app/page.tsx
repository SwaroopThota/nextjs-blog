import PostTitlesDisplayPage from '@/components/PostTitlesDisplayPage'
import { getPostTitles } from '@/utils/getPostRelatedData'
import Link from 'next/link'

export const metadata = {
	title: 'NerdsForNerds - Home',
}

export default async function Home() {
	const postTitlesPage = getPostTitles('', 1)
	return (
		<>
			<p className='text-2xl my-2'>Recent Posts</p>
			<PostTitlesDisplayPage
				postTitles={postTitlesPage.postTitles.splice(0, 5)}
			/>
			<div className='my-2'>
				<Link
					href='/posts'
					className='border hover:bg-blue-200 rounded-md p-2'
				>
					Show more
				</Link>
			</div>
		</>
	)
}
