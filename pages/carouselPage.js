import Head from "next/head";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import styles from "@/styles/CarouselPage.module.css"

export default function CarouselPage() {
    return (
        <>
            <Head>
				<title>Carousel</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <main className={styles.main}>
                <Link href='/' className={styles.link}>Home</Link>
                <Carousel/>
            </main>
        </>
    )
}