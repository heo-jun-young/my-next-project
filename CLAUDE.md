# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Run Commands

- **Development**: `npm run dev` (runs `next dev`)
- **Build**: `npm run build`
- **Production**: `npm run start`

## Architecture

This is a Next.js 14 App Router project with TypeScript for a Korean marketing agency website (그로우마케팅).

### Project Structure

- `src/app/` - App Router root with file-based routing
- `src/app/layout.tsx` - Root layout with navigation header (dropdown menu for services)
- `src/app/page.tsx` - Homepage with client-side animations (ripple effect, counter animation)
- `src/app/services/*/page.tsx` - Service pages (sns, marketing, content, blog, website, crm)
- `src/app/globals.css` - Global styles

### Key Patterns

**Server/Client Components**: Default is server components. Add `"use client"` directive at file top when using browser APIs (window, document), React hooks (useEffect, useState), or DOM event listeners. Most pages in this project use `"use client"` due to animations.

**Styling**: Mixed approach - global CSS in `globals.css` and `styled-jsx` inline styles within components. Tailwind is in devDependencies but pages primarily use custom CSS and styled-jsx.

**Path Alias**: `@/*` maps to `./src/*` (configured in tsconfig.json)

**External Images**: Add domains to `next.config.js` → `images.domains` array (currently has 'example.com')

### Adding New Pages

Follow App Router conventions:
- Create `src/app/[route]/page.tsx` for new routes
- Use `page.tsx` for page components, `layout.tsx` for layouts
- Update navigation links in `src/app/layout.tsx` if adding to main menu

## Notes

- README.md contains unresolved merge conflict markers - do not modify without understanding intent
- No shared components folder exists; pages are self-contained with inline styled-jsx
- Korean language content throughout
