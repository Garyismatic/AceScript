import Link from "next/link";
import Image from "next/image";
import productDemo from "../../icons/Home-Img.png";
import { SparklesCore } from "../Sparkles";
export default function Hero() {
	return (
		<>
			<div className="w-full absolute inset-0 custom-height">
				<SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={100}
					className="w-full h-full"
					particleColor="#FFFFFF"
				/>
			</div>
			<section className="max-w-7xl m-auto relative">
				<div className="pt-10 mx-3 flex flex-col gap-6 text-center ">
					<h1 className="font-medium text-5xl leading-[60px] max-w-5xl m-auto lg:text-6xl px-8 xl:mt-8  ">
						Ace Your JavaScript Interviews <span className="hidden md:inline">with Hands-On Practice</span> 
					</h1>
					<p className="text-[#CBD5E1] max-w-lg  m-auto">
						Boost your coding skills with real-world JavaScript questions and an
						interactive code editor.
					</p>
					<Link
						href="/dashboard"
						className="flex items-center justify-center border-[#BFDBFE] border-[0.5px] outline-none w-[200px] m-auto px-4 py-4 rounded-full text-[#BFDBFE] bg-[#BFDBFE1A]"
					>
						<p>Start Practicing Now </p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
							/>
						</svg>
					</Link>
				</div>
				<div className="mt-8">
					<div className="items-center justify-center bg-[#BFDBFE1A] p-6 rounded-md mt-24 hidden lg:flex">
						<Image
							src={productDemo}
							alt="Code"
							width={900}
							quality={100}
							layout="responsive"
							className="rounded-md"
						/>
					</div>
				</div>
			</section>
		</>
	);
}

