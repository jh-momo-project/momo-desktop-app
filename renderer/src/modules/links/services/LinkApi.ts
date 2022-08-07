import BaseApi from "@common/service/BaseApi";

class LinkApi extends BaseApi {
  getCategories() {
    return this.get("/categories");
  }

  getLinksByCategory(params) {
    return this.get("/", { params });
  }
}

export default new LinkApi("/links");
