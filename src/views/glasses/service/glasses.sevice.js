import axios from "axios";

export const GlassesService = {
  list: async (page, colors, shapes, collectionType) => {
    const filterColor = colors
      .map(
        (color) =>
          `&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${color}`
      )
      .join("");

    const filterShape = shapes
      .map(
        (shape) =>
          `&filters[glass_variant_frame_variant_frame_tag_configuration_names][]=${shape}`
      )
      .join("");

    const url = `https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/${collectionType}/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=${page}${filterColor}${filterShape}&filters[frame_variant_home_trial_available]=false`;

    return axios.get(url).then((res) => res.data);
  },
};
