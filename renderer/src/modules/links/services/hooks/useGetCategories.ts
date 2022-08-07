import LinkCategory from "@modules/links/models/LinkCategory";
import { useQuery } from "react-query";
import LINK_QUERY_KEY from "../constants/queryKey";
import LinkApi from "../LinkApi";

const useGetCategories = () => {
  return useQuery(LINK_QUERY_KEY.GET_CATEGORIES(), () => LinkApi.getCategories(), {
    select: (res) => res.data.map((category) => LinkCategory.create(category)),
  });
};

export default useGetCategories;
