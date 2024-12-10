import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/NavBar/NavBar";

export const metadata: Metadata = {
  title: "Youssef Hasnaoui",
  description:
    "A passionate tech enthusiast exploring innovation and creativity in the digital world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="./logo.png" />
      </head>
      <body className={`bg-slate-300 dark:bg-zinc-900 antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
          storageKey="resume-theme"
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
