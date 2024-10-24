import styles from './Resume.module.css'
import Image from 'next/image'

const Resume = () => {

	return (
		<div className={styles.cvContainer}>
			<section className={styles.header}>
				<Image
					src="https://yandex-images.clstorage.net/wkZa52151/5dda44zwZP/_Sq4KrunM8hhswGUCIX2JndE66Iuxeu45s02Yqj8l7LyalWL0YBn8W-uBVB88b4aH2opvrm6LiXSGYPDbtlNGugormb45CuRN_gd2kSC_yJoD_bqLoL36u3aLT-g9MLYzkgkr7upBtwagi0deP27GgF8bqjQh21q6xmKxkWPcUT4DK0Opa1Qw2i3aY8uhfEwYhjVnxK_8PLY72Qn54aF19dkEI--qifjGL4GIEHBrjY_C2yvyrUjadAuhv14iGFv8g67La2tXPVokmqCHZLBM0si56E-r-T2__5aKMWhhcbgUym4joEE7DyJDDF99awnKgp6isOLGHj5ArvDZrJ4ZcMttByAo2nmf6NqnCKv0w5aCMqoE6Lzw8PvZR7SjbDP2ks0m6e-HtozmRQ0UvKpPjY0SrXBihhEwyKAxGSNc2fcCYI-oY5S9VSQa6gKg_wxXCnRsw2w8v_Gx2Mzzo6GwvxZNb2UnhrTC7MHBn3emDocHVuU6Z0YbsU8he18tUZZ-w6_LoO-e8pAimyrLqb3LWM76bQ1j-_W9eNfEu6jhtXabBSJvKca0CypJCxg3LItOwRou_W7D3v8O6TrXLhmedMdgTiblUjpSZF6qDiZ1ilrPOypMb7Mytv9YDr0qavi834EiqaDBOA0hTAPYN6vJQ8kb6n1nCZaxjWt3kahbEnEJKUNg7x5y1-hYq87rcA0YAjArBCnx8zD608y6LCE49d5M7WDihHYF6YsC1fSnTwqAnWKwowXfPUrk-BguHp65jK6OZGMUMNnjHyXG5z4BmIr_6ATkOzG_eZsPPCQtsLfSAGqs4Mt_SSyCQlKybERLjxvjeGVBkT5DqfsbolvXuUjgAimh3fSSYNWhiWp1CVEL-6WNYvn_f3zcQf-qJXB2kgNrpGJDNwcmxM9W9SODzITT4zfuhd68zOpwkSoT0TSMbkeprJMx2CiR6cgpsA6Zy7KtDCr6uj56183zac"
					alt=""
					width={150}
					height={150}
					className={styles.photo}
				/>
				<div className={styles.headerInfo}>
					<h1>{'Цветников Валериан'}</h1>
					<p>{'Мужчина, 19 лет, родился 16 апреля 2005'}</p>
					<p>
						{'+7(917) 7175547'}<span>{' — предпочитаемый способ связи'}</span>
					</p>
					<a href="mailto:valerian.tcvetnikov@ispring.com">{'valerian.tcvetnikov@ispring.com'}</a>
					<p>{'Проживает: Йошкар-Ола'}</p>
					<p>{'Гражданство: Россия, есть разрешение на работу: Россия'}</p>
					<p>{'Готов к переезду, не готов к командировкам'}</p>
				</div>
			</section>

			<section className={styles.section}>
				<h2>{'Желаемая должность и зарплата'}</h2>
				<p>{'Бэкенд разработчик — 100 000₽'}</p>
				<p>{'Специализации:'}</p>
				<ul>
					<li>{'Программист, разработчик'}</li>
					<li>{'Занятость: частичная занятость'}</li>
					<li>{'График работы: гибкий график, удаленная работа'}</li>
					<li>{'Желательное время в пути до работы: не более часа'}</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>{'Опыт работы — 1 год 1 месяц'}</h2>
				<p>{'Сентябрь 2023 — настоящее время'}</p>
				<div className={styles.experience}>
					<h3>{'iSpring'}</h3>
					<p>{'Йошкар - Ола'}</p>
					<p>{'Информационные технологии, системная интеграция, интернет'}</p>
					<p>{'• Разработка программного обеспечения'}</p>
					<h4>{'Программист'}</h4>
					<p>{'Разработка архитектуры, написание frontend/backend части приложения. Применял MySQL, PHP ' +
						'(Symfony, Doctrine), TypeScript, Redux, React, Redux Toolkit и RTK Query.'}</p>
				</div>
			</section>

			<section className={styles.section}>
				<h2>{'Образование'}</h2>
				<p>{'Неоконченное высшее — 2026'}</p>
				<p>{'Поволжский государственный технологический университет, Йошкар-Ола'}</p>
				<p>{'Факультет информатики и вычислительной техники, Программная инженерия'}</p>
			</section>

			<section className={styles.section}>
				<h2>{'Навыки'}</h2>
				<p>{'Русский — Родной'}</p>
				<ul>
					<li>{'MySQL'}</li>
					<li>{'PHP'}</li>
					<li>{'Git'}</li>
					<li>{'SQL'}</li>
					<li>{'Symfony'}</li>
					<li>{'Docker'}</li>
					<li>{'REST API'}</li>
					<li>{'TypeScript'}</li>
					<li>{'React'}</li>
					<li>{'Redux'}</li>
					<li>{'Английский язык'}</li>
					<li>{'Работа в команде'}</li>
					<li>{'Тайм - менеджмент'}</li>
					<li>{'Постановка целей по SMART'}</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>{'Дополнительная информация'}</h2>
				<p>{'Легко нахожу общий язык с коллегами. Ставлю конкретные цели и всегда стараюсь уложиться в ' +
					'установленный строк. В сложных ситуациях сохраняю терпение и открытость.'}</p>
				<p>{'Прошёл курс Web разработки, научился создавать серверы на Go и верстать страницы (HTML, CSS, JS). ' +
					'Также прошёл курс frontend разработки, изучив TypeScript, React и Redux.'}</p>
			</section>

			<section>
				<h4>{'Резюме обновлено 16 сентября 2024 в 21:28'}</h4>
			</section>
		</div>
	)
}

export {
	Resume,
}
