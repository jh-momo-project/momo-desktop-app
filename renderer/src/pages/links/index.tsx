import { dehydrate, QueryClient } from "react-query";
import Layout from "@layouts/index";
import LinkApi from "@modules/links/services/LinkApi";
import LINK_QUERY_KEY from "@modules/links/services/constants/queryKey";
import LinkMainView from "@modules/links/views/LinkMainView";

export default function LinkMainPage() {
  return <LinkMainView />;
}

LinkMainPage.getLayout = (page) => <Layout>{page}</Layout>;

export async function getStaticProps(context) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(LINK_QUERY_KEY.GET_CATEGORIES(), () => LinkApi.getCategories());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 30,
  };
}
