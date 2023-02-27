import Link from 'next/link'
import { ReactElement } from 'react'

export default function Navbar(): ReactElement {
	return (
		<nav className='flex w-full px-3 shadow-inner rounded-b-3xl h-navbarAndFooter items-center bg-slate-100'>
			<Link href='/' className='text-2xl text-blue-600'>
				Nerds4Nerds
			</Link>
		</nav>
	)
}
