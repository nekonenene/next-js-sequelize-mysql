import Head from 'next/head';
import Layout from '../components/Layout';
import { siteTitle } from '../components/HeadTags';

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

export default HomePage;
