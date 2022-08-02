import Layout from "@layouts/index";
import LinkMainView from "@modules/links/views/LinkMainView";

export default function LinkMainPage() {
  return <LinkMainView />;
}

LinkMainPage.getLayout = (page) => <Layout>{page}</Layout>;
