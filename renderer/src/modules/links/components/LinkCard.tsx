interface ILinkCard {
  link: {
    id: number;
    name: string;
  };
}

export default function LinkCard({ link }: ILinkCard) {
  return <div>{link.name}</div>;
}
