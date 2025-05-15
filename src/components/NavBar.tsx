import { Link } from "@tanstack/react-router"

interface NavBarItem {
	name: string
	url: string
}

const navbarItems: NavBarItem[] = [
	{ name: "Home", url: "/" },
	{ name: "Blog", url: "/blog" },
	{ name: "Projects", url: "/projects" },
]

export default function NavBar() {
	return (
		<nav className='w-full h-32 sm:h-18 flex justify-center items-center sm:(border border-b-gray-300/30)'>
			<div className='w-full h-full flex flex-col sm:flex-row items-center justify-between sm:gap-12'>
				<div className='sm:pl-12 w-full h-full flex justify-center sm:justify-start items-center'>
					<Link to='/'>
						<p className='text-white text-3xl font-mono text-center text-nowrap'>
							Toby Nguyen_
						</p>
					</Link>
				</div>
				<div className='w-full h-full flex gap-8 items-center justify-center sm:justify-end h-full sm:pr-12'>
					{navbarItems.map(item => (
						<Link to={item.url} key={item.name}>
							<p className='text-gray-300/85 p-2 rounded-md hover:text-white duration-300 text-xl'>
								{item.name}
							</p>
						</Link>
					))}
					<a
						href={"https://github.com/tobynguyen27"}
						target='_blank'
						className='hidden sm:block'>
						<button className='i-simple-icons-github text-xl text-gray-300 duration-300 hover:(cursor-pointer text-white)' />
					</a>
				</div>
			</div>
		</nav>
	)
}
