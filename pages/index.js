import Head from "next/head";
import Layout from "../components/Layout";
import Home from "./Home/index";
export default function Main() {
	return (
		<div className="box-border h-screen max-h-screen font-sans">
			<Head>
				<title>MakeUp Artist Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Home />
		</div>
	);
}
