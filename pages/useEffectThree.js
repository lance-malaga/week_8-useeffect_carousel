import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/UseEffectThree.module.css"

export default function UseEffectThree() {
    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10);
    }, [number]) // will run when value changes

    return (
        <>
            <main className={styles.main}>
                <Link href='/' className={styles.link}> Home </Link>
                <div className={styles.container}>
                    <div className={styles.title}> UseEffectThree </div>
                    <div className={styles.body}> {value} </div>
                    <button className={styles.button} onClick={() => setNumber(number + 1)}> Click me </button>
                </div>
            </main>
        </>
    )
}