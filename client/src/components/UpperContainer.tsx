import Navbar from '../components/Navbar'
import Header from '../components/Header'
import type { ReactNode } from 'react'

type UpperContainerProps = {
	children: ReactNode
}

function UpperContainer({ children }: UpperContainerProps) {
	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="grid grid-cols-12 gap-6 p-6">
				<div className="col-span-12">
					<Header content={children} />
				</div>
			</div>
		</div>
	)
}

export default UpperContainer
