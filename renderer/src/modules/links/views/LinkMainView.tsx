import { useState } from "react";
// @mui
import { Stack } from "@mui/material";
// modules
import { DirectoryList, LinkList } from "@modules/links/views/styles";
import LinkDirectoryCard from "@modules/links/views/components/LinkDirectoryCard";
import LinkMainHeader from "@modules/links/views/components/LinkMainHeader";
import LinkCard from "@modules/links/views/components/LinkCard";
import useGetLinks from "../services/hooks/useGetLinks";
import useGetCategories from "../services/hooks/useGetCategories";

export default function LinkMainView() {
  const { data: categories } = useGetCategories();
  const [currentId, setCurrentDirectory] = useState(categories[0].id);
  const { isLoading, data } = useGetLinks({ categoryId: currentId });

  return (
    <>
      <LinkMainHeader />
      <Stack component="section" direction="row">
        <DirectoryList>
          {categories.map((item) => (
            <LinkDirectoryCard key={item.id} item={item} onClick={(e) => setCurrentDirectory(item.id)} />
          ))}
        </DirectoryList>
        <LinkList>
          {/* {links[currentDirectory].map((link) => (
            <LinkCard key={link.id} link={link} />
          ))} */}
        </LinkList>
      </Stack>
    </>
  );
}
