import Image from "next/image";
import styles from "./Hero.module.scss";
import Breadcrumbs from "../../../../../../components/breadcrumbs/breadcrumbs";
import Photo from "../../../../../../public/assets/Kurs-Noszenia/noszenie_maluszka.webp";
import Link from "next/link";

function Hero() {
	return (
		<>
			<section className={`${styles.Hero} Container`}>
				<div className={styles.Container}>
					<Breadcrumbs />
					<div className={styles.bottomSection}>
						<div className={styles.Inner}>
							<div className={styles.leftSection}>
								<div className={styles.text}>
									<h2>Asymetria ułożeniowa - poradnik dla rodzica</h2>
									<p className={styles.paragraph}>
										E-book • Wideo z ćwiczeniami • Spotkanie online
									</p>
									<p>
										Pigułka wiedzy medycznej i doświadczenia pracy z małymi pacjentami. Stań się
										bardziej świadomym i spokojniejszym rodzicem bez wychodzenia z domu.
									</p>
								</div>
								<div className={styles.buttonGroup}>
									<div className={styles.button}>
										<Link href="#info">
											<button className="secondaryButton">Czytaj więcej</button>
										</Link>
									</div>
									<div className={styles.button}>
										<Link href="#products">
											<button className="Button_button__6pObN">Zobacz ofertę</button>
										</Link>
									</div>
								</div>
							</div>
							<div className={styles.rightSection}>
								<div className={styles.image}>
									<Image src={Photo} alt="moj pierwszy ebook" width={361} height={322} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
