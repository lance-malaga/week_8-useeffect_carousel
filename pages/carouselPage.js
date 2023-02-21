import Link from "next/link";
import Carousel from "@/components/Carousel";
import styles from "@/styles/CarouselPage.module.css"

export default function CarouselPage() {
    return (
        <>
            <main className={styles.main}>
                <Link href='/' className={styles.link}>Home</Link>
                <Carousel/>
            </main>
        </>
    )
}