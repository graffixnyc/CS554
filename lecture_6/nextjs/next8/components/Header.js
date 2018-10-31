import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/shows">
          <a style={linkStyle}>Shows</a>
        </Link>
        <style jsx>{`
      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.7;
        color: red;
      }
    `}</style>
    </div>
)

export default Header