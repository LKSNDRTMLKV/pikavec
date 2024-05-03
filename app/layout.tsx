import { auth } from "@/auth/auth";
import { Toaster } from "@/components/ui/toaster";
import { ChildrenProps } from "@/interface/children-props";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/providers/theme-provider";
import { Inter } from "next/font/google";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pikavec",
  description: "Kazi da ako pusis",
};

export default async function RootLayout({
  children,
}: Readonly<ChildrenProps>) {

  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
