import Head from 'next/head'
import Link from 'next/link'

export const siteTitle = 'Sample Website'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="nekonenene" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/images/favicon_192.png" sizes="192x192" />
        <meta name="theme-color" content="#2b0de8" />

        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta property="og:image" content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <header>
        Hello
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
