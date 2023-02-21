import Link from "next/link";
import { useEffect, useState } from "react";
import styles from '@/styles/UseEffectOne.module.css'

export default function UseEffectOne() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1);
    }) // infinite loop

    return (
        <>
            <main className={styles.main}>
                <Link href='/' className={styles.link}> Home </Link>
                <div className={styles.title}> useEffectOne </div>
                <div className={styles.body}> {number} </div>
            </main>
        </>
    )
}