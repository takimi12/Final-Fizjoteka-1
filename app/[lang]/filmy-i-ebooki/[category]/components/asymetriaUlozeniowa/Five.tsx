import React from "react";
import styles from "./Five.module.scss";
import Link from "next/link";
import circle from "../../../../../..//public/assets/Kurs-Noszenia/Eleven/circle.svg";
import Image from "next/image";
import { getTopics } from "../../../../../../helpers/api/getTopic";
import { Button } from "../../../../../../components/AdminComponents/Subcomponents/Button";
import { ITopic } from "../../../../../../backend/models/topics";

export default async function Five() {
    try {
        const response = await getTopics();

        const topicsArray = response?.topics ?? [];

        const filteredTopics = topicsArray.filter((topic: ITopic) =>
            topic.categories.includes("Asymetria ułożeniowa"),
        );

        return (
            <>
                <section className={styles.Eleven} id="products">
                    <div className={`Container ${styles.Container}`}>
                        <div className={styles.mb10}>
                            <div className={styles.top}>
                                <h4>Znajdź produkt odpowiedni dla Ciebie</h4>
                                <p>
                                    Uzyskując nieograniczony dostęp do filmów, masz szansę nadrobić webinary w wygodnym
                                    dla siebie momencie.
                                </p>
                            </div>
                        </div>
                        <div className={styles.blockParent}>
                            {filteredTopics.map((product: ITopic) => (
                                <div key={product._id} className={styles.singleBox}>
                                    <div className={styles.inner}>
                                        <span className={styles.available}>Produkt Dostępny</span>
                                        <span className={styles.date}>
                                            {new Date(product.createdAt).toLocaleDateString()}
                                        </span>

                                        <div className={styles.blockImage}>
                                            <Image
                                                src={product.imageFileUrl}
                                                width={200}
                                                height={200}
                                                alt={product.title}
                                            />
                                        </div>

                                        <div className={styles.titleContainer}>
                                            <Link href="#" className={styles.anchor}>
                                                <h4 className={styles.title}>{product.title}</h4>
                                            </Link>
                                            <p className={styles.subtitle}>{product.subtitle}</p>
                                        </div>

                                        <div>
                                            <ul className={styles.listParent}>
                                                {product.description
                                                    .split(". ")
                                                    .filter((sentence) => sentence.length > 0)
                                                    .map((sentence: string, idx: number) => (
                                                        <li className={styles.list} key={idx}>
                                                            {sentence.trim()}
                                                        </li>
                                                    ))}
                                            </ul>
                                            <div className={styles.prizeContainer}>
                                                <Image src={circle} width={15} height={15} alt="online" />
                                                <p className={styles.availableprize}>Produkt dostępny</p>
                                            </div>

                                            <div className={styles.priceContainer}>
                                                <p className={styles.price}>{product.price} zł</p>
                                                <Button product={product} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        );
    } catch (error) {
        console.error("Error fetching topics:", error);
        return (
            <section className={styles.Eleven} id="products">
                <div className={`Container ${styles.Container}`}>
                    <p>Wystąpił problem z załadowaniem produktów. Spróbuj ponownie później.</p>
                </div>
            </section>
        );
    }
}
