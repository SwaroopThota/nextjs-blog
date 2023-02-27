import { getPost, getPostSlugs } from '@/utils/getPostRelatedData'
import { notFound } from 'next/navigation'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import 'highlight.js/styles/tokyo-night-dark.css'
import { Post } from '@/types'

interface IProps {
	params: {
		slug: string
	}
}

export function generateMetadata({ params }: IProps) {
	const { slug } = params
	const post = getPost(slug) as Post
	return { title: post.title }
}

export const revalidate = 60

const page = async ({ params }: IProps) => {
	const { slug } = params
	const post = getPost(slug) as Post
	if (!post.title) return notFound()
	return (
		<>
			<div className='my-5 flex justify-between flex-wrap flex-col'>
				<p className='text-2xl'>{post.title}</p>
				<p className='text-sm text-gray-400'>
					<>
						Posted By {post.author} on {post.date}
					</>
				</p>
			</div>
			<ReactMarkdown
				rehypePlugins={[
					rehypeSlug,
					[rehypeAutolinkHeadings, { behavior: 'wrap' }],
					rehypeHighlight,
				]}
				className='bg-slate-100 rounded shadow'
			>
				{post.content as string}
			</ReactMarkdown>
		</>
	)
}

export default page

export function generateStaticParams() {
	const slugs = getPostSlugs()
	return slugs.map((slug) => {
		return { slug }
	})
}
