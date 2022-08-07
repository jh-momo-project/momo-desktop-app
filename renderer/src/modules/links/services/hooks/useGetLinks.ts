import { useQuery } from "react-query";
import LINK_QUERY_KEY from "../constants/queryKey";
import LinkApi from "../LinkApi";

interface IUseGetLinks {
  categoryId?: number;
}

const useGetLinks = ({ categoryId }: IUseGetLinks) => {
  const params = !!categoryId ? { categoryId } : {};
  return useQuery(LINK_QUERY_KEY.GET_LINKS(params), () => LinkApi.getLinksByCategory(params), {
    select: (res) => res.data,
  });
};

export default useGetLinks;
