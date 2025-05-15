import { createFileRoute, Link } from "@tanstack/react-router"
import Badge from "@/components/Badge"

export const Route = createFileRoute("/")({
	component: Index,
})

function Index() {
	return (
		<div className='mx-auto w-3/4 md:w-3/5 lg:w-1/2 mt-12'>
			<h1 className='text-white text-3xl font-mono hidden sm:block'>
				Toby Nguyen
			</h1>

			<p className='text-gray-300/85 mt-8 text-lg'>
				Hi there 👋 I am Toby Nguyen. I am a self-taught web developer.
				I enjoy building websites and sometimes I make Minecraft mods.
			</p>

			<div className='flex flex-col gap-1 my-5'>
				<div className='text-gray-300/85 w-full h-full'>
					<div className='flex flex-wrap gap-2 items-center w-full h-full'>
						<span className='text-lg text-nowrap'>I know:</span>
						<Badge
							icon={<i className='i-devicon-typescript' />}
							text='TypeScript'
							url='https://github.com/microsoft/TypeScript'
						/>
						<Badge
							icon={<i className='i-devicon-kotlin' />}
							text='Kotlin'
							url='https://github.com/JetBrains/kotlin'
						/>
					</div>
				</div>
				<div className='text-gray-300/85 w-full h-full'>
					<div className='flex flex-wrap gap-2 items-center w-full h-full'>
						<span className='text-lg text-nowrap'>I use:</span>
						<Badge
							icon={<i className='i-devicon-nixos' />}
							text='Nix'
							url='https://github.com/NixOS/nix'
						/>
						<Badge
							icon={<i className='i-devicon-vscode' />}
							text='VSCode'
							url='https://github.com/microsoft/vscode'
						/>
						<Badge
							icon={<i className='i-devicon-intellij' />}
							text='IntelliJ IDEA'
							url='https://github.com/JetBrains/intellij-community'
						/>
					</div>
				</div>
			</div>

			<p className='text-gray-300/85 text-lg'>
				I just finished my high school in this year and I am currently
				in a gap year. I planned to study Computer Science in university
				and I am preparing necessary skills before going there.
			</p>
			<p className='text-gray-300/85 text-lg mt-3'>
				Sometimes, I write blog posts about Minecraft, coding, etc. When
				I am not coding, I enjoy watching anime and movies, playing
				video games and listening to musics. I also keen on learning new
				things, so I am currently learning Mathematics (Analysis) and
				piano.
			</p>

			<div className='flex flex-wrap gap-2 items-center w-full h-full my-5'>
				<div className='flex gap-2 w-full flex-wrap'>
					<span className='text-lg text-gray-300/85'>
						You can find me via:
					</span>
					<Badge
						icon={
							<i className='i-simple-icons-github text-gray-300' />
						}
						text='GitHub'
						url='https://github.com/tobynguyen27'
						noBackground
					/>
					<Badge
						icon={
							<i className='i-simple-icons-discord text-gray-300' />
						}
						text='Discord'
						url='https://discord.com/users/1365300051932352655'
						noBackground
					/>
				</div>
				<div className='w-full'>
					<span className='text-gray-300/85 text-lg'>
						Or mail me at{" "}
						<a
							href='mailto:hi@tobynguyen.dev'
							className='hover:(underline underline-offset-3 text-gray-300) duration-300'>
							hi@tobynguyen.dev
						</a>
					</span>
				</div>
			</div>
		</div>
	)
}
