# Deep Anime AI MCP Server

> Deep Anime: Character Art, Portraits, and Scene Design

[![MCP Badge](https://lobehub.com/badge/mcp/rocnubie-deepanime-mcp)](https://lobehub.com/mcp/rocnubie-deepanime-mcp)
[![Node](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![smithery](https://smithery.ai/badge/deepanime)](https://smithery.ai)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![MCP](https://img.shields.io/badge/MCP-1.0-blue)](https://modelcontextprotocol.io)
[![Zero Config](https://img.shields.io/badge/setup-zero--config-7c3aed)](#installation)

<p align="center"><a href="https://deepanime.org"><img src="./assets/hero.png" alt="Deep Anime AI" width="720" /></a></p>

A Model Context Protocol server that exposes the canonical Deep Anime AI knowledge surface — image generation workflows and styles, pricing, FAQ, official links — to MCP-compatible AI clients such as Claude Desktop, Cursor, Windsurf, and Continue. Read-only, no API keys, no quota, ~50 ms cold start.

Official website: https://deepanime.org

## 🎨 About Deep Anime AI

Deep Anime (deepanime.org) is an AI image generation platform built specifically for anime-style artwork. It lets users create polished character art, portraits, and scene compositions by typing a text prompt, converting a photograph, or remixing an existing design. Rather than offering a generic image generator with an anime filter bolted on, the site provides a focused suite of tools designed around the anime aesthetic — covering everything from initial concept to final touch-ups within a single integrated workspace. Both casual creators experimenting with character ideas and more serious illustrators looking for fast iteration cycles can access the platform through tiered subscription plans.

## Key Features

- **Text-to-Image (Prompt to Character Art)**: Describe a scene or character in plain text and the platform renders it as anime-style art, with pre-built prompt templates available in a gallery for inspiration.
- **Photo to Anime**: Upload a photograph and convert it into stylized anime artwork, with attention to preserving facial details and likeness during the transformation.
- **Character Art Generator**: Build original character designs from scratch, controlling style, pose, and visual identity without needing source photography.
- **Anime Image Editor**: Adjust composition, color grading, and fine details on generated images directly in the platform, removing the need to export to a separate editor for basic refinements.
- **Character Face Swap**: Swap or transplant character faces across different images while maintaining consistent visual style.
- **Character Consistency Across Angles**: Remix workflows allow users to iterate on the same character — testing different outfits, poses, or angles — while preserving the core character identity across variations.

## Use Cases

- **Portrait creation and stylization**: Turning personal photos or reference images into anime-style profile pictures or character portraits.
- **Character design and development**: Building out original characters for manga, webcomics, visual novels, or game concepts through iterative generation.
- **Scene and concept art**: Composing multi-element scenes with specific backgrounds, lighting moods, and character placements for storytelling or world-building projects.
- **Outfit and pose iteration**: Testing visual variations on an established character design — changing costumes, expressions, or viewpoints — without losing character consistency.
- **Content creation for social media**: Producing anime-style illustrated content for profile images, fan art, or creative posts at a faster pace than hand-drawing.

## Who Is It For

Deep Anime is aimed at two overlapping groups. The first is casual creators — fans, hobbyists, and social media users — who want to generate anime-style images of themselves, original characters, or fictional scenes without prior illustration skills or software knowledge. The second group is more production-focused: indie game developers, comic creators, visual novel writers, and digital illustrators who need a quick and consistent way to prototype character designs or generate reference art. The platform's pricing (with a Lite tier and a Pro tier) reflects this range, making entry-level access affordable while offering higher generation volumes and additional features to users with more demanding workflows.

## Tools

### `list_styles`
Return the canonical list of image-generation styles or presets the site exposes. (Deep Anime AI)

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_pricing`
Return the canonical pricing entry point for Deep Anime AI.

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_official_links`
Return the canonical list of official links for Deep Anime AI (website, support, docs when available).

_Input:_ no parameters. _Returns:_ text/markdown.

## Resources

- `site://deepanime/styles` — Supported image-generation styles and presets.
- `site://deepanime/pricing` — Canonical pricing entry point.
- `site://deepanime/faq` — Short FAQ generated from public site metadata.
- `site://deepanime/links` — Canonical URLs to share with users.

## Prompts

### `tell_me_about_deepanime`
Summarize what the site is, who it's for, and how it works. — Deep Anime AI

### `try_image_style_deepanime`
Recommend a starting image-generation style for a stated goal. — Deep Anime AI

## Installation

### Install via Smithery

```bash
npx -y @smithery/cli install deepanime-mcp --client claude
```

(Replace `claude` with `cursor`, `windsurf`, or `continue` for those clients.)

### Install from source

```bash
git clone https://github.com/rocnubie/deepanime-mcp.git
cd deepanime-mcp
pnpm install
```

Then add to your MCP client config (`claude_desktop_config.json` for Claude Desktop, `mcp.json` for Cursor / Windsurf / Continue):

```json
{
  "mcpServers": {
    "deepanime-mcp": {
      "command": "node",
      "args": [
        "/absolute/path/to/deepanime-mcp/src/index.mjs"
      ]
    }
  }
}
```

### Debug with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node src/index.mjs
```

## Official Links

- Website: https://deepanime.org
- Pricing: https://deepanime.org/pricing
- Support: support@deepanime.org

## Development

```bash
pnpm install
pnpm start                 # run the server over stdio
```

## License

MIT
