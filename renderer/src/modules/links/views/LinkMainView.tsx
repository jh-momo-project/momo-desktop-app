/**
 * @view LinkMainView
 */

import { useState } from "react";
// @mui
import { Box } from "@mui/material";
// service
import useGetLinksByCategory from "../services/hooks/useGetLinksByCategory";
import useGetCategories from "../services/hooks/useGetCategories";
// view
import { DirectoryContainer, ViewContainer } from "@modules/links/views/styles";
// section
import LinkListSection from "@modules/links/views/sections/DndLinkListSection";
import DndDirectoryListSection from "@modules/links/views/sections/DndDirectoryListSection";
// components
import LinkMainHeader from "@modules/links/views/components/LinkMainHeader";
// constants
import LINKS_SIZE from "@modules/links/constants/size";

export default function LinkMainView() {
  const { data: categories } = useGetCategories();
  const [currentCategoryId, setCurrentCategoryId] = useState(categories[0].id);

  const { isLoading, data: links } = useGetLinksByCategory({ categoryId: currentCategoryId });

  return (
    <>
      <LinkMainHeader />
      <ViewContainer direction="row" sx={{ overflowY: "hidden", msOverflowY: "hidden" }}>
        <DirectoryContainer>
          <DndDirectoryListSection
            directories={categories}
            currentId={currentCategoryId}
            setCurrentId={setCurrentCategoryId}
          />
        </DirectoryContainer>
        <Box
          component="section"
          sx={{ width: "100%", height: `calc(100vh - ${LINKS_SIZE.HEADER_HEIGHT})px`, overflow: "auto" }}
        >
          {!isLoading && <LinkListSection links={links} />}
        </Box>
      </ViewContainer>
    </>
  );
}
