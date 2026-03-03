import { useState } from 'react'

function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="relative w-full">
			<div className="flex items-center justify-between h-40 px-4 xl:px-10">
				<div className="hidden xl:flex flex-1"></div>

				<div className="flex flex-1 justify-end items-center">
					<div className="hidden xl:flex gap-10 text-taupe-200 font-medium text-xs tracking-widest">
						<a href="#" className="hover:text-white text-3xl transition-colors">
							Home
						</a>
						<a href="#" className="hover:text-white text-3xl transition-colors">
							Login
						</a>
						<a href="#" className="hover:text-white text-3xl transition-colors">
							Register
						</a>
					</div>

					<button
						className="xl:hidden text-taupe-200 text-4xl focus:outline-none z-50 p-2"
						onClick={() => setIsOpen(!isOpen)}>
						<img className="w-12" src={isOpen ? '/x.svg' : '/bars.svg'} alt="burger icon" />
					</button>
				</div>
			</div>

			{isOpen && (
				<div className="fixed inset-0 bg-neutral-900 z-40 xl:hidden flex flex-col items-center justify-center space-y-8 text-taupe-200 animate-in fade-in zoom-in-95 duration-300">
					<a
						href="#"
						onClick={() => setIsOpen(false)}
						className="text-3xl font-light tracking-widest my-18 hover:text-white">
						Home
					</a>
					<a
						href="#"
						onClick={() => setIsOpen(false)}
						className="text-3xl font-light tracking-widest my-18 hover:text-white">
						Login
					</a>
					<a
						href="#"
						onClick={() => setIsOpen(false)}
						className="text-3xl font-light tracking-widest my-18 hover:text-white">
						Register
					</a>
				</div>
			)}
		</nav>
	)
}

export default Navbar
