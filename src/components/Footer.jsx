const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<footer className="text-center text-capitalize">
				copyright &copy; {year} Sandra Lena
			</footer>
		</>
	);
};

export default Footer;
