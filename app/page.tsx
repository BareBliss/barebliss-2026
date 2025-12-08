import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Truck, Droplets, Sprout } from "lucide-react";
import scrapedData from "@/lib/data_scraping/scraped_data.json";

export default function Home() {
	const featuredProducts = scrapedData.products.slice(0, 3);
	const recentPosts = scrapedData.blogPosts.slice(0, 3);

	return (
		<div className="flex flex-col gap-10 pb-10">
			{/* Hero Section */}
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
						essentials designed to help you live comfortably in your own skin.
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

			{/* Features Grid */}
			<section className="container py-12">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div className="group flex flex-col items-center text-center p-8 bg-card rounded-3xl border border-border/50 hover:border-primary/20 transition-colors shadow-sm">
						<div className="h-14 w-14 rounded-full bg-secondary/30 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
							<Leaf className="h-7 w-7" />
						</div>
						<h3 className="text-xl font-bold mb-3 font-serif">
							Earth Friendly
						</h3>
						<p className="text-muted-foreground">
							Every product is crafted with respect for the environment, using
							biodegradable materials.
						</p>
					</div>
					<div className="group flex flex-col items-center text-center p-8 bg-card rounded-3xl border border-border/50 hover:border-primary/20 transition-colors shadow-sm">
						<div className="h-14 w-14 rounded-full bg-secondary/30 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
							<Droplets className="h-7 w-7" />
						</div>
						<h3 className="text-xl font-bold mb-3 font-serif">
							Pure Ingredients
						</h3>
						<p className="text-muted-foreground">
							No harsh chemicals or artificial fragrances. Just simple, honest
							ingredients.
						</p>
					</div>
					<div className="group flex flex-col items-center text-center p-8 bg-card rounded-3xl border border-border/50 hover:border-primary/20 transition-colors shadow-sm">
						<div className="h-14 w-14 rounded-full bg-secondary/30 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
							<Truck className="h-7 w-7" />
						</div>
						<h3 className="text-xl font-bold mb-3 font-serif">
							Sustainable Delivery
						</h3>
						<p className="text-muted-foreground">
							We offset our carbon footprint for every shipment that leaves our
							warehouse.
						</p>
					</div>
				</div>
			</section>

			{/* Featured Products */}
			<section className="container py-16 space-y-10">
				<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
					<div>
						<h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif mb-2">
							Curated Essentials
						</h2>
						<p className="text-muted-foreground">
							Handpicked favorites for your daily routine.
						</p>
					</div>
					<Button variant="ghost" asChild className="group">
						<Link
							href="/shop"
							className="text-primary text-base font-medium hover:bg-transparent"
						>
							View all products{" "}
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Link>
					</Button>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuredProducts.map((product) => (
						<Link
							key={product.slug}
							href={`/shop/${product.slug}`}
							className="group h-full"
						>
							<div className="flex flex-col h-full rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
								<div className="aspect-[4/5] bg-secondary/20 relative overflow-hidden flex items-center justify-center">
									{/* Placeholder for Product Image */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
									<span className="text-muted-foreground/50 font-medium">
										Image: {product.name}
									</span>
								</div>
								<div className="p-6 flex flex-col flex-1 gap-3">
									<div className="flex-1">
										<h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors font-serif">
											{product.name}
										</h3>
										<p className="text-sm text-muted-foreground line-clamp-2 mt-2">
											{product.description}
										</p>
									</div>
									<div className="flex items-center justify-between pt-2 border-t border-border/50">
										<span className="font-semibold text-lg">
											R {product.price.toFixed(2)}
										</span>
										<span className="text-xs font-medium uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-1 rounded">
											Essential
										</span>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* Journal / Blog Section */}
			<section className="bg-secondary/30 py-20">
				<div className="container space-y-10">
					<div className="text-center max-w-2xl mx-auto space-y-4">
						<h2 className="text-3xl sm:text-4xl font-bold font-serif text-foreground">
							Notes from Nature
						</h2>
						<p className="text-lg text-muted-foreground">
							Musings on living a simpler, more connected life.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{recentPosts.map((post) => (
							<Link
								key={post.slug}
								href={`/blog/${post.slug}`}
								className="group bg-background rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-all"
							>
								<div className="space-y-4">
									<div className="text-xs font-medium text-primary uppercase tracking-wider">
										Journal
									</div>
									<h3 className="text-xl font-bold font-serif leading-snug group-hover:text-primary transition-colors">
										{post.title}
									</h3>
									<p className="text-muted-foreground line-clamp-3">
										{post.excerpt}
									</p>
									<div className="flex items-center text-sm font-medium text-foreground/80 group-hover:underline">
										Read Article <ArrowRight className="ml-2 h-3.5 w-3.5" />
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter / CTA */}
			<section className="container py-20">
				<div className="relative isolate overflow-hidden bg-primary rounded-[2.5rem] px-6 py-20 sm:px-16 shadow-2xl text-primary-foreground">
					<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
					{/* Decorative circles */}
					<div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
					<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

					<div className="relative max-w-2xl mx-auto text-center space-y-8">
						<h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-serif">
							Join the Movement
						</h2>
						<p className="text-lg opacity-90 leading-relaxed">
							Sign up for our newsletter to receive silent discounts, wellness
							guides, and early access to our seasonal harvest collections.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
							<input
								type="email"
								required
								className="flex-1 rounded-full border-0 bg-white/10 px-5 py-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 backdrop-blur-sm"
								placeholder="Enter your email address"
							/>
							<Button
								type="submit"
								variant="secondary"
								size="lg"
								className="rounded-full px-8 h-auto font-semibold text-primary"
							>
								Subscribe
							</Button>
						</div>
						<p className="text-xs opacity-60 mt-4">
							We respect your privacy. Unsubscribe at any time.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
