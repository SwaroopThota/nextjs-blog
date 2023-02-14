import PostTitle from '@/components/PostTitle'
import { getPostSlugs, getPostTitles } from '@/utils/getPostRelatedData'
import Link from 'next/link'
import React from 'react'
import { notFound } from 'next/navigation'

interface IPageNo {
	pageNo: string
}

interface IProps {
	params: IPageNo
}

const Page = ({ params }: IProps) => {
	const totalPages = Math.floor((getPostSlugs().length + 15) / 15)
	const pageNo: number = parseInt(params.pageNo)
	if (pageNo <= 0 || pageNo > totalPages) return notFound()
	const postTitles = getPostTitles(pageNo)
	return (
		<>
			<div className='flex w-full justify-between items-center'>
				<p className='text-2xl'>All Posts</p>
				<div>
					<Link
						href={`/posts/${pageNo - 1}`}
						className={`p-2 m-2 bg-slate-400 rounded-md ${
							pageNo <= 1 ? 'hidden' : ''
						}`}
						type='button'
						aria-disabled
					>
						&lt;
					</Link>
					<Link
						href={`/posts/${pageNo + 1}`}
						className={`p-2 m-2 bg-slate-400 rounded-md ${
							pageNo >= totalPages ? 'hidden' : ''
						}`}
						type='button'
					>
						&gt;
					</Link>
				</div>
			</div>
			{postTitles.map((postTitle) => {
				return <PostTitle postTitle={postTitle} />
			})}
		</>
	)
}

export function generateStaticParams() {
	const totalPages = (getPostSlugs().length + 15) / 15
	const pages: IPageNo[] = []
	for (let i = 1; i <= totalPages; i++) pages.push({ pageNo: i.toString() })
	return pages
}

export default Page
