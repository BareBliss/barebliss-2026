import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
// import { stackClientApp } from "../stack/client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { stackServerApp } from "@/stack";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "BareBliss | Au Naturel",
	description:
		"Where we embrace the freedom of being in the nude and celebrate the beauty of naturism in a welcoming and inclusive environment. Au Naturel",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<StackProvider app={stackServerApp}>
					<StackTheme>
						<ThemeProvider
							attribute="class"
							defaultTheme="system"
							enableSystem
							disableTransitionOnChange
						>
							<div className="flex min-h-screen flex-col">
								<Navbar />
								<main className="flex-1">{children}</main>
								<Footer />
							</div>
						</ThemeProvider>
					</StackTheme>
				</StackProvider>
			</body>
		</html>
	);
}
