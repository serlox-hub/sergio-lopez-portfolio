import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const isStaticExport = process.env.EXPORT_STATIC === "true";
const repo = "sergio-lopez-portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isStaticExport ? { output: "export" } : {}),
  basePath: isStaticExport ? `/${repo}` : "",
  assetPrefix: isStaticExport ? `/${repo}/` : "",
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    unoptimized: true, // 👈 necesario para GitHub Pages
  },
};

export default withMDX(nextConfig);
