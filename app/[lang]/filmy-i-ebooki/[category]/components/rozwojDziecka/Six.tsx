import Image from "next/image";
import styles from "./Six.module.scss";
import photo from "../../../../../../public/assets/Kurs-Noszenia/guarantee1.svg";
import photo1 from "../../../../../../public/assets/Kurs-Noszenia/guarantee2.svg";

async function Six() {
	const data = [
		{
			title: "Nauczysz się, jak bezpiecznie nosić dziecko",
			paragraph:
				"W materiałach znajdziesz odpowiedzi na najczęstsze pytania i wątpliwości rodziców. Dowiesz się, jak nosić noworodka i dziecko nieco starsze, by wspierać jego rozwój. Przestaniesz się bać nosić własne dziecko.",
			image: photo,
		},
		{
			title: "Nauczysz się jak łatwo ćwiczyć z dzieckiem w formie zabawy",
			paragraph:
				"W filmach znajdziesz inspiracje do bezpiecznych ćwiczeń z maleństwem. Poznasz ćwiczenia stymulujące rozwój dziecka w formie zabaw, dostosowane do wieku malucha.",
			image: photo1,
		},
		{
			title: "Zmniejszysz swój poziom niepokoju o prawidłowy rozwój dziecka",
			paragraph:
				"Już po samym noszeniu możesz poznać, czy dziecko ma prawidłowe napięcie mięśniowe. Wybierając opcję z książką, dowiesz się, jak wygląda rozwój dziecka w kolejnych miesiącach życia.",
			image: photo,
		},
	];

	return (
		<>
			<section className={styles.Nine}>
				<div className={`${styles.Container} Container`}>
					<div className={styles.topSection}>
						<h2>Co mogę zagwarantować?</h2>
						<p>Przede wszystkim staniesz się bardziej świadomym i spokojniejszym rodzicem.</p>
					</div>
					<div className={styles.itemWraper}>
						{data.map((item, index) => (
							<div key={index} className={styles.bottomItem}>
								<div className={styles.iconBox}>
									<Image width={25} height={25} src={item.image} alt="photo" />
								</div>
								<h3 className={styles.title}>{item.title}</h3>
								<p className={styles.paragraph}>{item.paragraph}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Six;
