import BaseApi from "@common/service/BaseApi";

class LinkApi extends BaseApi {
  getCategories() {
    return this.get("/categories");
  }

  getLinksByCategory(categoryId: number) {
    return this.get(`category/${categoryId}`);
  }
}

export default new LinkApi("/links");
