require("dotenv").config();

const { createClient } = require("@sanity/client");
const sanity = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: process.env.SANITY_USE_CDN,
};

module.exports = createClient({ ...sanity });
