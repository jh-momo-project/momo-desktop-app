import { Card } from "@mui/material";
import Link from "@modules/links/models/Link";
import { openBrowser } from "@utils/linkUtils";

interface ILinkCard {
  link: Link;
}

export default function LinkCard({ link }: ILinkCard) {
  return (
    <Card sx={{ p: 2 }} onClick={() => openBrowser(link.url)}>
      {link.title}
    </Card>
  );
}
