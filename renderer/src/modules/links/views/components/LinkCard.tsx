// @mui
import { Card } from "@mui/material";
// model
import Link from "@modules/links/models/Link";
// components
import Text from "@components/Text";
// utils
import { openBrowser } from "@utils/linkUtils";

interface ILinkCard {
  link: Link;
}

export default function LinkCard({ link }: ILinkCard) {
  return (
    <Card
      onClick={() => openBrowser(link.url)}
      sx={{ width: "100%", padding: "12px 24px", cursor: "pointer", bgcolor: "common.white" }}
    >
      <Text size={10}>{link.categoryName}</Text>
      <Text size={14} weight="bold">
        {link.title}
      </Text>
      <Text size={11} color="grey.800">
        {link.url}
      </Text>
    </Card>
  );
}
