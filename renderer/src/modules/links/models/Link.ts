import { Url } from "renderer/src/types/browser";

class Link {
  id: number;
  url: Url;
  title: string;
  description: string;
  thumbnail: string;
  order: number;
  categoryName: string;

  static create(data) {
    const link = new Link();
    link.id = data.id;
    link.url = data.url;
    link.title = data.title;
    link.description = data.description;
    link.thumbnail = data.thumbnail;
    link.order = data.order;
    link.categoryName = data?.category.title;
    return link;
  }
}

export default Link;
