import Header from "./SharedComponents/Header/Header";
const Layout = ({ children }) => {
	return (
		<div className="container h-screen max-h-screen bg-gray">
			<div className="flex h-screen max-h-screen">
				<div className="flex-1 shadow-lg shadow-xl">
					<Header></Header>
				</div>
				<div className="flex-2 radial-background">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
