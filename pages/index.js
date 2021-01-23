import Head from "next/head";
import Main from "../components/Main/Main";
export default function Home() {
	return (
		<div className="box-border h-screen max-h-screen font-sans">
			<Head>
				<title>MakeUp Artist Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main></Main>
		</div>
	);
}
