import { useState } from "react";
// @mui
import { Stack } from "@mui/material";
// modules
import { DirectoryList, LinkList } from "@modules/links/views/styles";
import LinkDirectoryCard from "@modules/links/components/LinkDirectoryCard";
import LinkMainHeader from "@modules/links/components/LinkMainHeader";
import LinkCard from "@modules/links/components/LinkCard";

export default function LinkMainView() {
  const [currentDirectory, setCurrentDirectory] = useState(1);

  const directoryList = [
    { id: 1, name: "디렉토리1" },
    { id: 2, name: "디렉토리2" },
    { id: 3, name: "디렉토리3" },
    { id: 4, name: "디렉토리4" },
    { id: 5, name: "디렉토리5" },
  ];

  const links = {
    1: [
      { id: 100, name: "디렉토리1 - 1번링크" },
      { id: 101, name: "디렉토리1 - 2번링크" },
    ],
    2: [],
    3: [{ id: 300, name: "디렉토리3 - 1번링크" }],
    4: [
      { id: 401, name: "디렉토리4 - 1번링크" },
      { id: 402, name: "디렉토리4 - 2번링크" },
    ],
    5: [],
  };
  return (
    <>
      <LinkMainHeader />
      <Stack component="section" direction="row">
        <DirectoryList>
          {directoryList.map((item) => (
            <LinkDirectoryCard key={item.id} item={item} onClick={(e) => setCurrentDirectory(item.id)} />
          ))}
        </DirectoryList>
        <LinkList>
          {links[currentDirectory].map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </LinkList>
      </Stack>
    </>
  );
}
