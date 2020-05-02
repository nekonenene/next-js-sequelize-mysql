import { Typography, Link } from '@material-ui/core';

export default function Footer() {
  return (
    <footer>
      <Link href="https://twitter.com/nekonenene">
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright © nekonenene {new Date().getFullYear()}.
        </Typography>
      </Link>
    </footer>
  );
}
