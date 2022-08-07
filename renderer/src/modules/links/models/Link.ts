class Link {
  id: number;
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  order: number;

  static create(data) {
    const link = new Link();
    link.id = data.id;
    link.url = data.url;
    link.title = data.title;
    link.description = data.description;
    link.thumbnail = data.thumbnail;
    link.order = data.order;
    return link;
  }
}

export default Link;
