import { useQuery } from "react-query";
import Link from "@modules/links/models/Link";
import LinkApi from "../LinkApi";
import LINK_QUERY_KEY from "../constants/queryKey";

interface IUseGetLinksByCategory {
  categoryId: number;
}

const useGetLinksByCategory = ({ categoryId }: IUseGetLinksByCategory) => {
  return useQuery(LINK_QUERY_KEY.GET_LINKS_BY_CATEGORY(categoryId), () => LinkApi.getLinksByCategory(categoryId), {
    select: (res) => res.data.map((link) => Link.create(link)),
  });
};

export default useGetLinksByCategory;
