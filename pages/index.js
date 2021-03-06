import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hello, my name is Cameron.
					<br />
					<br />I am a full stack web developer with a passion for
					learning. I also collect Pokémon, check them out{" "}
					<Link href="/pokemon/all">
						<a>here!</a>
					</Link>
				</p>
				<p>
					(This is a sample website - I built most of it following{" "}
					<a href="https://nextjs.org/learn">this Next.js tutorial</a>
					.)
				</p>
			</section>
			<section
				className={`${utilStyles.headingMd}${utilStyles.padding1px}`}
			>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href="/posts/[id]" as={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
