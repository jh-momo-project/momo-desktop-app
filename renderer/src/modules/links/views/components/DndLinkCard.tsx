/**
 * @component DndLinkCard
 * - 링크 정보 카드
 * - Drag & Drop 가능
 * - 추후 공유(복사) / 이동 / 편집을 추가할 예정
 */

// @mui
import { Card } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
// @dnd-kit
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// model
import Link from "@modules/links/models/Link";
// components
import Text from "@components/Text";
// utils
import { openBrowser } from "@utils/linkUtils";

type Props = {
  link: Link;
};

export default function DndLinkCard({ link }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: link.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "100%",
  };

  return (
    <Grid2 key={link.id} xs={12} sm={6} md={4} lg={3} xl={2}>
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        <Card
          onClick={() => openBrowser(link.url)}
          sx={{ height: 80, padding: "12px 24px", bgcolor: "common.white", cursor: "pointer" }}
        >
          <Text size={10}>{link.categoryName}</Text>
          <Text size={14} weight="bold">
            {link.title}
          </Text>
          <Text size={11} color="grey.800">
            {link.url}
          </Text>
        </Card>
      </div>
    </Grid2>
  );
}
