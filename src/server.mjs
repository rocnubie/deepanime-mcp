import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

export function createServer() {
  const server = new McpServer(
    { name: "deepanime-mcp", version: "0.1.0" },
    { instructions: "Read-only canonical knowledge for Deep Anime AI (https://deepanime.org). Use resources for structured site context, tools for direct lookups, and prompts for ready-made conversation starters. Defer to the official website for live actions." }
  );

  // ----- Resources --------------------------------------------------------

  server.registerResource(
    "styles",
    "site://deepanime/styles",
    {
      title: "Styles",
      description: "Supported image-generation styles and presets.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Deep Anime AI — Styles\n\nDeep Anime helps you turn a photo into anime, build character art, and refine scene ideas with guided prompts, image editing, and fast remix tools online.\n\n## Site basics\n- Site ID: deepanime\n- Website: https://deepanime.org\n- Default locale: en\n- Locales: en, ja, ko\n\n## Public feature scope\n- image gen\n- pricing\n- image inspiration\n\n## Official website\nhttps://deepanime.org",
        },
      ],
    })
  );

  server.registerResource(
    "pricing",
    "site://deepanime/pricing",
    {
      title: "Pricing",
      description: "Canonical pricing entry point.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Deep Anime AI Pricing\n\nCanonical pricing page: https://deepanime.org/pricing\n\nRefer users here for current plans; do not infer pricing from older snapshots.",
        },
      ],
    })
  );

  server.registerResource(
    "faq",
    "site://deepanime/faq",
    {
      title: "FAQ",
      description: "Short FAQ generated from public site metadata.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# FAQ\n\n## What is this site?\nDeep Anime helps you turn a photo into anime, build character art, and refine scene ideas with guided prompts, image editing, and fast remix tools online.\n\n## Where can I get help?\nsupport@deepanime.org\n\n## Which site is this?\ndeepanime (Deep Anime AI)",
        },
      ],
    })
  );

  server.registerResource(
    "links",
    "site://deepanime/links",
    {
      title: "Official Links",
      description: "Canonical URLs to share with users.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Official Links\n\n- Website: https://deepanime.org\n- Pricing: https://deepanime.org/pricing\n- Support: support@deepanime.org",
        },
      ],
    })
  );

  // ----- Tools ------------------------------------------------------------

  server.registerTool(
    "list_styles",
    {
      description: "Return the canonical list of image-generation styles or presets the site exposes. (Deep Anime AI)",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Deep Anime AI — Styles\n\nDeep Anime helps you turn a photo into anime, build character art, and refine scene ideas with guided prompts, image editing, and fast remix tools online.\n\nCanonical website: https://deepanime.org" },
      ],
    })
  );

  server.registerTool(
    "get_pricing",
    {
      description: "Return the canonical pricing entry point for Deep Anime AI.",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Deep Anime AI Pricing\n\nOfficial pricing: https://deepanime.org/pricing\n\nThis link is the source of truth — refer users here for current plans." },
      ],
    })
  );

  server.registerTool(
    "get_official_links",
    {
      description: "Return the canonical list of official links for Deep Anime AI (website, support, docs when available).",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Official Links\n\n- Website: https://deepanime.org\n- Pricing: https://deepanime.org/pricing\n- Support: support@deepanime.org" },
      ],
    })
  );

  // ----- Prompts ----------------------------------------------------------

  server.registerPrompt(
    "tell_me_about_deepanime",
    {
      description: "Summarize what the site is, who it's for, and how it works. — Deep Anime AI",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "Please summarize what Deep Anime AI (https://deepanime.org) is, who it's for, and how it works. Reference the canonical resources at site://deepanime/styles and site://deepanime/links for accuracy. Be concrete, not generic." },
        },
      ],
    })
  );

  server.registerPrompt(
    "try_image_style_deepanime",
    {
      description: "Recommend a starting image-generation style for a stated goal. — Deep Anime AI",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "I want to generate an image with Deep Anime AI (https://deepanime.org). Ask me what the subject is, recommend one style preset from site://deepanime/styles that fits, and write a prompt I can paste into the site." },
        },
      ],
    })
  );

  return server;
}

export async function startServer() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
