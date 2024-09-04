import Image from "next/image";
import Gemini from '../../icons/google-gemini-icon (1).png'
import codingLanguages from '../../icons/NicePng_languages-icon-png_3801129.png'
import Leaderboard from '../../icons/podium.png'

export default function Features() {
	return (
		<section className="max-w-6xl m-auto mt-20">
			<h1 className="text-center text-4xl font-semibold mb-12">Coming Soon</h1>
			<div className="flex flex-col gap-16 w-[90%] m-auto ">
				<div className="border rounded-lg px-10 py-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
					<div className="md:w-1/2 ">
						<h3 className="text-xl font-semibold px-4 md:mb-6">
							AI Assistance
						</h3>
						<p className="text-[#CBD5E1] px-4">
							Our vision for this project is to provide AI assistance to
							aspiring developers by asking commonly asked interview questions while
							using AI to offer feedback on their answers. Other areas could include providing hints
							on how to solve our challenges. 
						</p>
					</div>
					<div className="md:w-1/2 flex justify-center">
						<Image src={Gemini} alt="AI" height={200} width={200} quality={100} className="rounded-xl"  />
					</div>
				</div>
				<div className="border rounded-lg px-10 py-12 flex flex-col md:flex-row-reverse md:items-center gap-6 md:gap-10">
					<div className="md:w-1/2 ">
						<h3 className="text-xl font-semibold px-4 md:mb-6">
							More Programming Languages
						</h3>
						<p className="text-[#CBD5E1] px-4">
							JavaScript is just the beginning! We&apos;re expanding to include
							a wide range of programming languages, so you can practice coding
							challenges in Python, Java and more.
						</p>
					</div>
					<div className="md:w-1/2 flex justify-center">
						<Image src={codingLanguages} alt="coding-languages" height={220} width={220} quality={100} className="rounded-xl"  />
					</div>
				</div>
				<div className="border rounded-lg px-10 py-12 flex flex-col md:flex-row gap-6 md:items-center md:gap-10">
					<div className="md:w-1/2 ">
						<h3 className="text-xl font-semibold px-4 md:mb-6">
							Community & Leaderboards
						</h3>
						<p className="text-[#CBD5E1] px-4">
							Connect with other coders, compare your solutions, and climb the
							leaderboards. Time trials, randomly selected problems for users to 
							compete to see who can solve challenge in
						the least time!
						</p>
					</div>
					<div className="md:w-1/2 flex justify-center">
						<Image src={Leaderboard} alt="AI" height={200} width={200} quality={100} className="rounded-xl"  />
					</div>
				</div>
			</div>
		</section>
	);
}
