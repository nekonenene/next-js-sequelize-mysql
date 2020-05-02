import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

function HomePage() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>Welcome to Next.js!</div>
    </Layout>
  )
}

export default HomePage