class LinkCategory {
  id: number;
  title: string;
  order: number;

  static create(data) {
    const category = new LinkCategory();
    category.id = data.id;
    category.title = data.title;
    category.order = data.order;
    return category;
  }
}

export default LinkCategory;
