/**
 * @view LinkMainView
 */

import { useState } from "react";
// @mui
import { Box } from "@mui/material";
// service
import useGetLinks from "../services/hooks/useGetLinks";
import useGetCategories from "../services/hooks/useGetCategories";
// view
import { DirectoryList, ViewContainer } from "@modules/links/views/styles";
// section
import LinkListSection from "./sections/DndLinkListSection";
// components
import LinkDirectoryCard from "@modules/links/views/components/LinkDirectoryCard";
import LinkMainHeader from "@modules/links/views/components/LinkMainHeader";
// constants
import LINKS_SIZE from "../constants/size";

export default function LinkMainView() {
  const { data: categories } = useGetCategories();
  const [currentCategoryId, setCurrentCategoryId] = useState(categories[0].id);

  const { isLoading, data: links } = useGetLinks({ categoryId: currentCategoryId });

  return (
    <>
      <LinkMainHeader />
      <ViewContainer direction="row" sx={{ overflowY: "hidden", msOverflowY: "hidden" }}>
        <DirectoryList>
          {categories.map((item) => (
            <LinkDirectoryCard
              key={item.id}
              item={item}
              isActive={currentCategoryId === item.id}
              onClick={(e) => setCurrentCategoryId(item.id)}
            />
          ))}
        </DirectoryList>
        <Box sx={{ width: "100%", height: `calc(100vh - ${LINKS_SIZE.HEADER_HEIGHT})px`, overflow: "auto" }}>
          {!isLoading && <LinkListSection links={links} />}
        </Box>
      </ViewContainer>
    </>
  );
}
