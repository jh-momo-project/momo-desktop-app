import { useState } from "react";
// @mui
import { Box, Grid } from "@mui/material";
// service
import useGetLinks from "../services/hooks/useGetLinks";
import useGetCategories from "../services/hooks/useGetCategories";
// view
import { DirectoryList, LinkList, ViewContainer } from "@modules/links/views/styles";
// components
import LinkDirectoryCard from "@modules/links/views/components/LinkDirectoryCard";
import LinkMainHeader from "@modules/links/views/components/LinkMainHeader";
import LinkCard from "@modules/links/views/components/LinkCard";

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
        <Box sx={{ width: "100%" }}>
          <LinkList container spacing={2}>
            {!isLoading &&
              links.map((link) => (
                <Grid item key={link.id} xs={12} sm={6} md={4} lg={3} xl={2} sx={{ flexGrow: 0 }}>
                  <LinkCard link={link} />
                </Grid>
              ))}
          </LinkList>
        </Box>
      </ViewContainer>
    </>
  );
}
