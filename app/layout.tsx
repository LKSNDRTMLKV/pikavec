import { auth } from "@/auth/auth";
import { ChildrenProps } from "@/interface/children-props";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pikavec",
  description: "Kazi da ako pusis",
  icons: [
    {
      media: "(prefers-color-scheme: dark)",
      href: "assets/favicon-dark.ico",
      url: "assets/favicon-dark.ico",
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<ChildrenProps>) {

  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={cn(`${inter.className}`, '')}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
