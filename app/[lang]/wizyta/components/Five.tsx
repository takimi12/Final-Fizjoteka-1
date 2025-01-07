import Image from "next/image";
import Photo from "../../../../public/assets/HomePage/Fizquizz/fizquiz.webp";
import styles from "./Five.module.scss";

async function Five() {
	return (
		<>
			<section className={styles.ebook}>
				<div className={`Container ${styles.container}`}>
					<div className={styles.text}>
						<h6 className={styles.mainHeading}>Metody, które stosuję</h6>
					</div>
					<div className={styles.bottomSection}>
						<div className={styles.leftSection}>
							<ul>
								<li className={styles.list}>Osteopatia w pediatrii i neonatologii,</li>
								<li className={styles.list}>Zoga movement w terapii niemowląt,</li>
								<li className={styles.list}>Terapia niemowląt z zaburzeniami karmienia,</li>
								<li className={styles.list}>Trójpłaszczyznowa terapia wad stóp u dzieci,</li>
								<li className={styles.list}>Terapia manualna dzieci i niemowląt,</li>
								<li className={styles.list}>PNF w pediatrii,</li>
								<li className={styles.list}>Powięź w ujęciu osteopatycznym,</li>
								<li className={styles.list}>Kinesiotaping w pediatrii,</li>
								<li className={styles.list}>
									Neurorozwojowa diagnoza i terapia dzieci z asymetrią posturalną,
								</li>
								<li className={styles.list}>
									Neurorozwojowa prewencja i korekcja wad postawy u niemowląt,
								</li>
								<li className={styles.list}>FITS – Funkcjonalna Indywidualna Terapia Skolioz.</li>
							</ul>
						</div>
						<div className={styles.rightSection}>
							<div className={styles.image}>
								<Image src={Photo} alt="moj pierwszy ebook" width={361} height={322} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Five;
