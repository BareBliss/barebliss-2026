import { Button } from "./ui/button";
import Link from "next/link";
import { Sprout } from "lucide-react";

const Hero = () => {
	return (
		<section className="relative h-[700px] w-full overflow-hidden flex items-center justify-center bg-stone-100 dark:bg-stone-900">
			{/* Background Patterns */}
			<div className="absolute inset-0 z-0">
				<div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl"></div>
			</div>

			<div className="container relative z-10 flex flex-col items-center text-center gap-6 px-4">
				<div className="inline-flex items-center gap-2 rounded-full bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium border border-border animate-in fade-in slide-in-from-bottom-5 duration-500">
					<Sprout className="h-4 w-4 text-primary" />
					<span>Essentials for a Natural Life</span>
				</div>
				<h1 className="text-5xl sm:text-7xl font-serif font-extrabold tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
					Return to <span className="text-primary italic">Nature</span>
				</h1>
				<p className="max-w-[700px] text-lg sm:text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
					BareBliss offers a collection of sustainably sourced, organic
					esentials designed to help you live comfortably in your own skin.
				</p>
				<div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
					<Button
						size="lg"
						asChild
						className="rounded-full text-lg h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
					>
						<Link href="/shop">Explore Collection</Link>
					</Button>
					<Button
						size="lg"
						variant="outline"
						asChild
						className="rounded-full text-lg h-14 px-10 border-primary/20 hover:bg-primary/5"
					>
						<Link href="/about">Our Philosophy</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
