'use client'
import { useRouter } from 'next/navigation'

const BackButton = () => {
	const router = useRouter()
	return (
		<button
			className='p-2 bg-gray-100 shadow-inner rounded-md'
			onClick={() => router.back()}
		>
			Go back
		</button>
	)
}

export default BackButton
