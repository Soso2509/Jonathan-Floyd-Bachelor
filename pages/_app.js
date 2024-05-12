import '../styles/globals.css'
import Layout from '../components/Layout'
import Meta from '../components/Meta'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    
  )
}

export default MyApp
