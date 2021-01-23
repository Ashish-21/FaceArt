import Head from "next/head";

import Link from "next/link";
const Header = () => {
	return (
		<header className="max-h-screen h-screen">
			<div className="flex flex-col items-center h-screen max-h-screen">
				<div className="p-4 w-full text-center flex-logo">
					<h1>Blend & Rule</h1>
				</div>
				<nav className="w-full text-center p-4 flex-nav">
					<ul className="flex flex-col justify-evenly h-full text-4xl font-bold text-red">
						<li className="hover:text-red-dark cursor-pointer">
							HOME
						</li>
						<li className="hover:text-red-dark cursor-pointer">
							BLOG
						</li>
						<li className="hover:text-red-dark cursor-pointer">
							GALLERY
						</li>
						<li className="hover:text-red-dark cursor-pointer">
							VIDEOS
						</li>
						<li className="hover:text-red-dark cursor-pointer">
							ABOUT ME
						</li>
					</ul>
				</nav>
				<div className="w-full text-center p-4 flex-links flex flex-col justify-end">
					<p>Social Links</p>
				</div>
			</div>
		</header>
	);
};
export default Header;
