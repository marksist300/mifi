/* eslint-disable react/no-unescaped-entities */
import style from "./404.module.css";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Link as muilink } from "@mui/material";
import { useTheme } from "@mui/material";

const NotFound = () => {
  const { palette } = useTheme();

  return (
    <main className={style.container}>
      <h3>Uh oh. That page wasn't found</h3>
      <Link href="/" passHref={true} legacyBehavior>
        <Button
          style={{ backgroundColor: palette.tertiary[900] }}
          color="error"
          variant="outlined"
          font-size="large"
          href="/"
        >
          Return Home
        </Button>
      </Link>
    </main>
  );
};

export default NotFound;
