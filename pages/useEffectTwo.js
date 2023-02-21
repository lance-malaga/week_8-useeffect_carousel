import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/UseEffectTwo.module.css"

export default function UseEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, []) // will only run on page load

    return (
        <>
            <main className={styles.main}>
                <Link href='/' className={styles.link}> Home </Link>
                <div className={styles.title}> UseEffectTwo </div>
                <div className={styles.body}> {number} </div>
            </main>
        </>
    )
}