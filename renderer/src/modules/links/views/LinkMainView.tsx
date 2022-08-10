import { useState } from "react";
// @mui
import { Box } from "@mui/material";
// service
import useGetLinks from "../services/hooks/useGetLinks";
import useGetCategories from "../services/hooks/useGetCategories";
// view
import { DirectoryList, ViewContainer } from "@modules/links/views/styles";
// section
import LinkListSection from "./sections/LinkListSection";
// components
import LinkDirectoryCard from "@modules/links/views/components/LinkDirectoryCard";
import LinkMainHeader from "@modules/links/views/components/LinkMainHeader";

export default function LinkMainView() {
  const { data: categories } = useGetCategories();
  const [currentId, setCurrentDirectory] = useState(categories[0].id);

  const { isLoading, data: links } = useGetLinks({ categoryId: currentId });

  return (
    <>
      <LinkMainHeader />
      <ViewContainer direction="row" sx={{ overflowY: "hidden", msOverflowY: "hidden" }}>
        <DirectoryList>
          {categories.map((item) => (
            <LinkDirectoryCard
              key={item.id}
              item={item}
              isActive={currentId === item.id}
              onClick={(e) => setCurrentDirectory(item.id)}
            />
          ))}
        </DirectoryList>
        <Box sx={{ width: "100%", height: "100%" }}>{!isLoading && <LinkListSection links={links} />}</Box>
      </ViewContainer>
    </>
  );
}
