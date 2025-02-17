"use client";
import { metaTagsData } from "@/constants/metaTags.data";
import Head from "next/head";
import { usePathname } from "next/navigation";

const DynamicMetaTags = () => {
  const pathname = usePathname(); // Get the current pathname

  // Find the default meta tags
  const defaultMetaTags =
    metaTagsData.find((item) => item.pages.includes("default"))?.metaTags || "";

  // Find the page-specific meta tags
  const pageMetaTags =
    metaTagsData.find((item) => item.pages.includes(pathname))?.metaTags || "";

  // Combine default and page-specific meta tags
  const combinedMetaTags = `${defaultMetaTags} ${pageMetaTags}`;

  // Convert the meta tag string into an array of JSX elements
  const metaElements = combinedMetaTags
    .trim()
    .split("\n") // Split by line
    .map((meta, index) => {
      const match = meta.match(/<meta\s([^>]+)>/); // Extract meta attributes
      if (!match) return null; // Skip invalid lines

      const attributes = match[1].trim();
      const props = Object.fromEntries(
        attributes.split('" ').map((attr) => attr.replace(/"/g, "").split("=")), // Convert to key-value pairs
      );

      return <meta key={index} {...props} />;
    });

  return <Head>{metaElements}</Head>;
};

export default DynamicMetaTags;
