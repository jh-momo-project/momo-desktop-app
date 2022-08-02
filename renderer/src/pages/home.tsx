import React from "react";
import Layout from "@layouts/index";
import { Button } from "@mui/material";

function Home() {
  return (
    <React.Fragment>
      <Button>버튼</Button>
    </React.Fragment>
  );
}

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
