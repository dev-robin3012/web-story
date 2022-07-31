/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GRAPH_CMS_ENDPOINT: "https://api-eu-central-1.hygraph.com/v2/cl684ot43cs4d01t74wyq3pif/master",
  },

  images: {
    domains: ["media.graphassets.com"],
  },
};

module.exports = nextConfig;
