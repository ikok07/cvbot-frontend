import type { Metadata } from "next";
import {Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";
import AppQueryClientProvider from "@/providers/AppQueryClientProvider";
import { Toaster } from "@/components/ui/sonner";
import {IoCloseCircle} from "react-icons/io5";
import {NextIntlClientProvider} from "next-intl";
import {getTranslations} from "next-intl/server";
import {ClerkProvider} from "@clerk/nextjs";

type MetadataProps = {
    params: {
        locale: string
    }
}

export async function generateMetadata(props: MetadataProps): Promise<Metadata> {

    const t = await getTranslations("Metadata")
    const params = await props.params;

    return {
        title: t("title"),
        description: t("description"),
        authors: [{name: t("author")}],
        creator: t("author"),
        publisher: t("author"),
        openGraph: {
            title: t("title"),
            description: t("description"),
            url: process.env.NEXT_PUBLIC_WEBSITE_URL!,
            siteName: t("author"),
            images: ["/banner.jpg"],
            locale: params.locale,
            type: "website"
        }
    }
}

const InterFont = Inter({subsets: ["cyrillic"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en" className="no-scrollbar">
        <body
            className={`${InterFont.className} antialiased`}
        >
        <NextIntlClientProvider>
            <AppQueryClientProvider>
                <main className="relative">
                    {children}
                </main>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        classNames: {
                            error: "!bg-primary !text-background"
                        }
                    }}
                    icons={{
                        error: <IoCloseCircle className="text-background text-xl"/>
                    }}
                />
            </AppQueryClientProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    </ClerkProvider>
  );
}
