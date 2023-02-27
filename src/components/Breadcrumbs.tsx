'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumbs = () => {
	const pathname = usePathname()
	const paths = pathname?.split('/').filter((x) => x)
	return (
		<>
			<nav className='flex rounded-lg' aria-label='Breadcrumb'>
				<ol className='inline-flex items-center space-x-1 md:space-x-3'>
					<li className='inline-flex items-center'>
						<Link
							href='/'
							className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600'
						>
							Home
						</Link>
					</li>
					{paths?.map((path, idx) => {
						const routeTo = '/' + paths.slice(0, idx + 1).join('/')
						const isLast = idx === paths.length - 1
						return isLast ? (
							<li aria-current='page' key={idx}>
								<div className='flex items-center'>
									<svg
										aria-hidden='true'
										className='w-6 h-6 text-gray-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
											clipRule='evenodd'
										></path>
									</svg>
									<span className='mx-1 text-sm font-medium text-gray-500 md:ml-2'>
										{path}
									</span>
								</div>
							</li>
						) : (
							<li key={idx}>
								<div className='flex items-center'>
									<svg
										aria-hidden='true'
										className='w-6 h-6 text-gray-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
											clipRule='evenodd'
										></path>
									</svg>
									<Link
										href={routeTo}
										className='mx-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2'
									>
										{path}
									</Link>
								</div>
							</li>
						)
					})}
				</ol>
			</nav>
		</>
	)
}

export default Breadcrumbs
