/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ru", "uz"],
    defaultLocale: "ru",
  },revalidate: 60
};

module.exports = nextConfig;
