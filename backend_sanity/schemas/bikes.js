export default {
    name: "bikes",
    title: "Bikes",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "description",
        title: "Description",
        type: "string",
      },
      {
        name: "color",
        title: "Color",
        type: "string",
        options: {
          list: [
            { value: "white", title: "white" },
            { value: "black", title: "black" },
            { value: "red", title: "red" },
            { value: "yellow", title: "yellow" },
            { value: "grey", title: "grey" },
          ],
        },
      },
      {
          name: "category",
          title: "Category",
          type: "string",
          options: {
              list: [
                  { value: "helmets", title: "helmets" },
                  { value: "clothes", title: "clothes" },
                  { value: "bikes", title: "bikes" },
              ],
          },
      },
      {
          name: "best",
          title: "Best",
          type: "boolean",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name",
          maxLength: 96,
        },
      },
  ],
  };
  