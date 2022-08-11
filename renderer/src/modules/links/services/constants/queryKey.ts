const LINK_QUERY_KEY = {
  GET_CATEGORIES: () => ["links", "categories"],
  GET_LINKS_BY_CATEGORY: (categoryId: number) => ["links", "by_category", categoryId],
} as const;

export default LINK_QUERY_KEY;
