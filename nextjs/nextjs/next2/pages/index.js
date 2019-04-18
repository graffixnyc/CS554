import Link from 'next/link'
const Index = () => (
    <div>
        <h1>Hello Next.js</h1>
        <br/>
        <Link href="/shows">
            <a>Shows</a>
        </Link>
        <br/>
        <Link href="/shows">
            <a style={{ fontSize: 20 }}>Shows</a>
        </Link>
        <br/>
        <Link href="/shows">
            <button>Shows</button>
        </Link>
    </div>
  )
  
  export default Index