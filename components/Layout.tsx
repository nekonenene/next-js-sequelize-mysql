import Head from 'next/head';
import Link from 'next/link';
import { createStyles, makeStyles, Theme, MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MyTheme from './MyTheme';

export const siteTitle = 'Sample Website';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  }),
);

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={MyTheme}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="nekonenene" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/images/favicon_192.png" sizes="192x192" />
        <meta name="theme-color" content={MyTheme.palette.primary.main} />

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
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>{siteTitle}</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </MuiThemeProvider>
  )
}
