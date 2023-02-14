import Link from 'next/link'
import { ReactElement } from 'react'

export default function Navbar(): ReactElement {
	return (
		<nav className='flex w-full px-3 shadow-inner rounded-b-3xl h-navbarAndFooter items-center bg-slate-100 mb-3'>
			<Link href='/' className='text-2xl text-blue-600'>
				NerdsForNerds
			</Link>
			<ul className='flex gap-2 ml-auto'>
				<li>
					<Link href='/posts/1'>All Posts</Link>
				</li>
			</ul>
		</nav>
	)
}
