import Link from 'next/link';

const Header = () => (
	<div>
		<Link href='/'>
			<a>Home</a>
		</Link>
		<Link href='/shows'>
			<a>Shows</a>
		</Link>
		<style jsx>{`
			a:hover {
				color: white;
				background-color: #1e8678;
				border: 1px solid black;
			}
			a {
				color: #1e8678;
				text-decoration: none;
				margin-right: 15px;
				padding: 5px;
			}
		`}</style>
	</div>
);

export default Header;
