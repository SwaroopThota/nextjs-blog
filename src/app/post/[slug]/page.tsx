import { getPost, getPostSlugs } from '@/utils/getPostRelatedData'
import { notFound } from 'next/navigation'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import 'highlight.js/styles/tokyo-night-dark.css'
import BackButton from '@/components/BackButton'

interface ISlug {
	slug: string
}

interface IProps {
	params: ISlug
}

export const revalidate = 10

const page = async ({ params }: IProps) => {
	const { slug } = params
	const post = getPost(slug)
	if (!post.foundPost) return notFound()
	return (
		<>
			<div className='mb-5 flex justify-between flex-wrap items-center'>
				<div>
					<p className='text-2xl'>{post.title}</p>
					<p className='text-sm text-gray-400'>
						<>
							Posted By {post.author} on {post.date}
						</>
					</p>
				</div>
				<BackButton />
			</div>
			<ReactMarkdown
				rehypePlugins={[
					rehypeSlug,
					[rehypeAutolinkHeadings, { behavior: 'wrap' }],
					rehypeHighlight,
				]}
				className='whitespace-pre-wrap md:p-5 bg-slate-100 rounded shadow'
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
		return { slug } as ISlug
	})
}
