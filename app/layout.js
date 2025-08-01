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
    title: "Shivam Rai | Software Engineer",
    description:
        "I'm a Software Developer, passionate about building high-performance, scalable applications. With a foundation in Computer Science and hands-on experience in both front-end and back-end development, I enjoy tackling complex problems and turning ideas into reliable software solutions. My experience spans from developing real-time trading platforms to creating efficient inventory traceability systems. I'm always eager to learn new technologies and contribute to innovative projects."
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
