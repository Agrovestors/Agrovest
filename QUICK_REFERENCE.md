# Quick Reference - Project Structure & Setup

## Component Imports (NEW)

### Before
```typescript
import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
```

### After (Organized)
```typescript
import Container from '@/components/layout/Container';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/display/Hero';
```

### Or Use Central Exports
```typescript
import { Container, Navbar, Hero } from '@/components';
```

## Component Folders

| Folder | Purpose | Examples |
|--------|---------|----------|
| `layout/` | Page structure | Navbar, Footer, Container |
| `pages/` | Page templates | PageLayout, PageHeader, PageSection |
| `display/` | Hero sections | Hero, featured content |
| `common/` | Shared UI | Logo, buttons |
| `content/` | Content rendering | RichText, formatted content |
| `team/` | Team features | TeamCarousel, TeamGrid |
| `theme/` | Theme utilities | ThemeToggle, dark mode |
| `studio/` | Admin interface | StudioNavbar |

## Adding New Components

### Step 1: Create in appropriate folder
```bash
src/components/features/MyComponent.tsx
```

### Step 2: Export from index.ts
```typescript
// src/components/index.ts
export { default as MyComponent } from './features/MyComponent';
```

### Step 3: Use anywhere
```typescript
import { MyComponent } from '@/components';
```

## Dependency Management

### Check for conflicts
```bash
npm ls
```

### Update packages
```bash
npm update
```

### Verify build
```bash
npm run build
```

## Important Versions
- Next.js: ^15.3.3
- React: ^18.2.0
- TypeScript: ^5
- Tailwind: ^3.3.0
- ESLint Config: ^15.3.3 (MATCHES Next.js!)

## Common Issues & Fixes

### Image Quality Warning
✅ Fixed in next.config.mjs
- Added: `qualities: [50, 75, 80, 90, 100]`

### Component Not Found
✅ Check new path:
- Was: `@/components/ComponentName`
- Now: `@/components/folder/ComponentName`

### Build Errors
✅ Solution:
```bash
rm -rf node_modules .next
npm install
npm run build
```

## File Organization Quick Guide

### New Component Checklist
- [ ] Create .tsx file in appropriate folder
- [ ] Export from folder index.ts (if exists)
- [ ] Export from /components/index.ts
- [ ] Use @/components import
- [ ] Test routing not affected

### Page Updates Checklist
- [ ] Update component imports to new paths
- [ ] Use standardized page template
- [ ] Add metadata via generatePageMetadata()
- [ ] Verify routing unchanged
- [ ] Test in dev and build

## Helpful Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint

# Type checking
npx tsc --noEmit

# Check dependencies
npm ls
npm outdated
```

## For More Details
- See `COMPLETE_REFACTORING_REPORT.md` for full overview
- See `FILE_STRUCTURE_GUIDE.md` for detailed organization
- See `DEPENDENCY_FIXES.md` for what was fixed
- See `PROJECT_VALIDATION.md` for verification steps

---
**Last Updated**: January 2026
**Status**: Production Ready ✅
