import { Montserrat, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";

const montserrat = Montserrat({
    weigth: ["700", "900"],
    subsets: ["latin"]
});

const roboto = Roboto({
    weight: ["400", "500"],
    subsets: ["latin"]
});

export const metadata = {
    title: "CricRadio - Share Your Favorite Cricket",
    description: "Dive into the best cricket highlights, curated for you.",
    openGraph: {
        title: "CricRadio - Share Your Favorite Cricket",
        description: "Dive into the best cricket highlights, curated for you.",
        url: "https://cricradio.com",
        type: "website",
        images: [
            {
                url: "https://cricradio-prod.blr1.cdn.digitaloceanspaces.com/sqaure%20logo.png",
                width: 512,
                height: 512,
                alt: "CricRadio Logo"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "CricRadio - Share Your Favorite Cricket",
        description: "Dive into the best cricket highlights, curated for you.",
        images: [
            "https://cricradio-prod.blr1.cdn.digitaloceanspaces.com/sqaure%20logo.png"
        ]
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} ${roboto.variable} antialiased`}
            >
                {children}
                <Analytics />
            </body>
        </html>
    );
}
