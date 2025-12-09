
import scrapedData from "@/lib/data_scraping/scraped_data.json";
import type { ReactNode } from "react";

import DynamicIcon from "./dynamic-icon";

interface Feature {
	title: string;
	description: string;
	icon: ReactNode;
}

const FeatureList = () => {
	return (
		<section className="container py-12">
			<div className="mb-12 space-y-4 sm:mb-16 lg:mb-24">
				<h2 className="text-2xl font-serif font-semibold md:text-3xl lg:text-4xl">
					{scrapedData.keyFeatures.title}
				</h2>
				<p className="text-muted-foreground text-xl">
					{scrapedData.keyFeatures.description}
				</p>
			</div>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
				{scrapedData.keyFeatures.features.map((feature) => {
					return (
						<FeatureItem
							key={`feature-${feature.title}`}
							title={feature.title}
							description={feature.content}
							icon={<DynamicIcon iconName={feature.icon} />}
						/>
					);
				})}
			</div>
		</section>
	);
};

const FeatureItem = ({ title, description, icon }: Feature) => {
	return (
		<div className="group flex flex-col items-center text-center p-8 bg-card rounded-3xl border border-border/50 hover:border-primary/20 transition-colors shadow-sm">
			<div className="h-14 w-14 rounded-full bg-secondary/30 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
				{icon}
			</div>
			<h3 className="text-xl font-bold mb-3 font-serif">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</div>
	);
};

export default FeatureList;
