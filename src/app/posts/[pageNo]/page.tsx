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
			<div className='flex w-full items-center justify-between'>
				<Link
					href={`/posts/${pageNo > 1 ? pageNo - 1 : pageNo + '/#'}`}
					className={`p-2 bg-gray-100 shadow-inner rounded-md ${
						pageNo <= 1 && 'opacity-30'
					}`}
					type='button'
					aria-disabled
				>
					&lt;
				</Link>
				<p className='text-2xl justify-self-center text-center'>
					All Posts
				</p>
				<Link
					href={`/posts/${
						pageNo < totalPages ? pageNo + 1 : pageNo + '/#'
					}`}
					className={`p-2 bg-gray-100 shadow-inner rounded-md ${
						pageNo >= totalPages && 'opacity-30'
					}`}
					type='button'
				>
					&gt;
				</Link>
			</div>
			{postTitles.map((postTitle) => {
				return <PostTitle postTitle={postTitle} key={postTitle.slug} />
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
