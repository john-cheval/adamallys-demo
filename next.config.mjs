const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "'s3-alpha-sig.figma.com'",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "adamallys-space.nyc3.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "nyc3.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "adamallys-space.nyc3.cdn.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;
