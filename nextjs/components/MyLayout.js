import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}

    <style jsx global>{`
			h1 {
				color: #1e8678;
			}
			body {
				background: #ccc;
			}

			a:hover{
				color: white;
				background-color: #1e8678;
				border: 1px solid black:
			}
		   
			a{
				color: #1e8678;
				text-decoration: none;
				margin-right: 15px;
				padding 5px;
		   
			}
		`}</style>
  </div>
);

export default Layout;
