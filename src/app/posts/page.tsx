'use client'
import PostTitlesDisplayPage from '@/components/PostTitlesDisplayPage'
import { PostTitlePage } from '@/types'
import Link from 'next/link'
import { notFound, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

interface IProps {
	searchParams: { search: string; page: string }
}

const Page = ({ searchParams }: IProps) => {
	const [query, setQuery] = useState({
		searchString: searchParams.search ?? '',
		pageNo: parseInt(searchParams.page ?? '1'),
	})
	const [postTitlePage, setPostTitlePage] = useState<PostTitlePage>()
	const router = useRouter()
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		const fetchReq = async () => {
			let res = await fetch(
				`/api/posts?page=${query.pageNo}&search=${query.searchString}`
			)
			let tempPostTitlePage = (await res.json()) as PostTitlePage
			setPostTitlePage(tempPostTitlePage)
			document.title = `N4N - All Posts ${query.searchString} Page - ${query.pageNo}`
		}
		fetchReq()
	}, [query])

	const prevPage = () => {
		if (postTitlePage?.isFirstPage) return
		router.push(
			`/posts/?page=${query.pageNo - 1}&search=${query.searchString}`
		)
		setQuery({ ...query, pageNo: query.pageNo - 1 })
	}

	const nextPage = () => {
		if (postTitlePage?.isLastPage) return
		router.push(
			`/posts/?page=${query.pageNo + 1}&search=${query.searchString}`
		)
		setQuery({ ...query, pageNo: query.pageNo + 1 })
	}

	const handleClick = () => {
		const search = inputRef.current?.value ?? ''
		setQuery({ pageNo: 1, searchString: search })
		router.push(`/posts?page=${1}&search=${search}`)
	}

	return (
		<>
			<div className='flex w-full items-center justify-between my-3'>
				<button
					className={`p-2 hover:bg-blue-200 rounded-l-full border ${
						postTitlePage?.isFirstPage && 'opacity-30'
					}`}
					type='button'
					onClick={prevPage}
				>
					&lt; Prev
				</button>
				<p className='text-2xl flex-auto text-center'>
					All Posts{' '}
					{query.searchString && `for ${query.searchString}`}
				</p>
				<button
					className={`p-2 hover:bg-blue-200 border rounded-r-full ${
						postTitlePage?.isLastPage && 'opacity-30'
					}`}
					type='button'
					onClick={nextPage}
				>
					Next &gt;
				</button>
			</div>
			<div className='flex my-2 border-2 rounded-lg'>
				<input
					type='text'
					name='search'
					aria-label='search posts'
					id='search'
					className='flex-auto  outline-none rounded-l-lg p-2 border-r-2'
					placeholder='Enter title...'
					autoComplete='off'
					ref={inputRef}
					onKeyUp={(e) => {
						if (e.key === 'Enter') handleClick()
					}}
				/>
				<button
					className='hover:bg-blue-200 rounded-r-lg p-2'
					onClick={handleClick}
				>
					Search
				</button>
			</div>
			<PostTitlesDisplayPage
				postTitles={postTitlePage?.postTitles ?? []}
			/>
		</>
	)
}
export default Page
