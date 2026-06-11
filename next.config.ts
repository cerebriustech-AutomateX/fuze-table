import path from "path";
import type { NextConfig } from "next";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Pin project root so dev/prod resolve /public correctly (parent lockfile exists in ~)
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
