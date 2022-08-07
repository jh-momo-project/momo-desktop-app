const LINK_QUERY_KEY = {
  GET_CATEGORIES: () => ["links", "categories"],
  GET_LINKS: (params: object) => ["links", params],
} as const;

export default LINK_QUERY_KEY;
