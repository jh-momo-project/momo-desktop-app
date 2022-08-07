import Link from "@modules/links/models/Link";

interface ILinkCard {
  link: Link;
}

export default function LinkCard({ link }: ILinkCard) {
  return <div>{link.title}</div>;
}
