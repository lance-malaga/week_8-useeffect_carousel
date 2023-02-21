import Image from 'next/image'
import { useState } from 'react'
import styles from './Carousel.module.css'

export default function Carousel() {
    const [img, setImg] = useState(0);

    const changImage = (change) => {
        if (change == "backward") {
            setImg(img - 1);
            if (img == 0) {
                setImg(5);
            }
        } else if (change == "forward") {
            setImg(img + 1);
            if (img == 5) {
                setImg(0);
            }
        }
    }

    return (
        <>
            <div className={styles.title}> Carousel </div>
            <div className={styles.carousel} style={{
                backgroundImage:`url(/carousel-images/${img}.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: 900,
                height: 500,
            }}>
                <Image 
                    src={"/icons/leftArrow.png"}
                    alt={"/icons/leftArrow.png"}
                    width={50}
                    height={50}
                    className={styles.arrows}
                    onClick={() => changImage("backward")}
                />
                <Image 
                    src={"/icons/rightArrow.png"}
                    alt={"/icons/rightArrow.png"}
                    width={50}
                    height={50}
                    className={styles.arrows}
                    onClick={() => changImage("forward")}
                />
            </div>
        </>
    )
}