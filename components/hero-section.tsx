"use client";

import Image from "next/image";
import Link from "next/link";
import { Sprout } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import scrapedData from "@/lib/data_scraping/scraped_data.json";

const HeroSection = () => {
	const images = scrapedData.hero.images || [];
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		if (images.length <= 1) return;

		const interval = setInterval(() => {
			setCurrentImageIndex((prev) => (prev + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<section className="relative w-full py-20 lg:py-32 overflow-hidden flex items-center justify-center bg-stone-100 dark:bg-stone-900">
			{/* Background Patterns */}
			<div className="absolute inset-0 z-0 pointer-events-none">
				<div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50"></div>
				<div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
			</div>

			<div className="container relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
					{/* Tagline */}
					<div className="flex justify-center md:justify-start">
						<div className="inline-flex items-center gap-2 rounded-full bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium border border-border animate-in fade-in slide-in-from-bottom-5 duration-500">
							<Sprout className="h-4 w-4 text-primary" />
							<span>{scrapedData.hero.tagline}</span>
						</div>
					</div>

					{/* Image (Mobile: Order 2, Desktop: Col 2 Row Span 4) */}
					{images.length > 0 && (
						<div className="md:col-start-2 md:row-start-1 md:row-span-4 flex justify-center items-center animate-in zoom-in-75 duration-700 delay-200">
							<div className="relative w-full max-w-[150px] md:max-w-[300px] aspect-square flex items-center justify-center">
								{/* Carousel Images */}
								{images.map((src, index) => (
									<div
										key={src}
										className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
									>
										<Image
											src={src}
											alt="Hero display"
											fill
											className="object-contain scale-125"
											priority={index === 0}
										/>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Title */}
					<h1 className="text-5xl sm:text-7xl font-serif font-extrabold tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
						{scrapedData.hero.title}
					</h1>

					{/* Description */}
					<p className="max-w-[600px] text-lg sm:text-xl text-muted-foreground mx-auto md:mx-0 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
						{scrapedData.hero.description}
					</p>

					{/* Buttons */}
					<div className="flex flex-wrap items-center justify-center md:justify-start gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
						<Button
							size="lg"
							asChild
							className="rounded-full text-lg h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
						>
							<Link href={scrapedData.hero.buttonLink}>
								{scrapedData.hero.buttonText}
							</Link>
						</Button>
						<Button
							size="lg"
							variant="outline"
							asChild
							className="rounded-full text-lg h-14 px-10 border-primary/20 hover:bg-primary/5"
						>
							<Link href={scrapedData.hero.buttonLink2}>
								{scrapedData.hero.buttonText2}
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
