"use client";

import {
	LucideSquareArrowOutDownRight,
	Menu,
	Moon,
	ShoppingBag,
	Sun,
	SunMoon,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
	const { setTheme, theme } = useTheme();
	const [isOpen, setIsOpen] = React.useState(false);
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		switch (theme) {
			case "system":
				setTheme("dark");
				break;

			case "dark":
				setTheme("light");
				break;

			default:
				setTheme("system");
				break;
		}
	};

	const routes = [
		{ href: "/", label: "Home" },
		{ href: "/shop", label: "Shop" },
		{ href: "/about", label: "About" },
		{ href: "/blog", label: "Blog" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container flex h-16 items-center">
				<Link href="/" className="mr-6 flex items-center space-x-2">
					<span className="text-xl font-bold">BareBliss</span>
				</Link>
				<nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
					{routes.map((route) => (
						<Link
							key={route.href}
							href={route.href}
							className="transition-colors hover:text-foreground/80 text-foreground/60"
						>
							{route.label}
						</Link>
					))}
				</nav>
				<div className="flex flex-1 items-center justify-end space-x-4">
					<Button variant="ghost" size="icon" aria-label="Shopping Cart">
						<ShoppingBag className="h-5 w-5" />
						<span className="sr-only">Shopping Cart</span>
					</Button>
					<Button
						variant="ghost"
						size="icon"
						aria-label="Toggle Theme"
						onClick={toggleTheme}
					>
						{!mounted ? (
							<SunMoon className="h-5 w-5" />
						) : (
							<>
								{theme === "light" && <Sun className="h-5 w-5" />}
								{theme === "dark" && <Moon className="h-5 w-5" />}
								{theme === "system" && <SunMoon className="h-5 w-5" />}
							</>
						)}
						<span className="sr-only">Toggle Theme</span>
					</Button>
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
							>
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle Menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="pr-0">
							<Link
								href="/"
								className="flex items-center"
								onClick={() => setIsOpen(false)}
							>
								<span className="font-bold">BareBliss</span>
							</Link>
							<div className="my-4 flex flex-col space-y-3 pb-10 pl-6">
								{routes.map((route) => (
									<Link
										key={route.href}
										href={route.href}
										onClick={() => setIsOpen(false)}
										className="text-foreground/60 transition-colors hover:text-foreground"
									>
										{route.label}
									</Link>
								))}
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
