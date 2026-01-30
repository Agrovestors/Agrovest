# Dependency Conflict Fixes

## Issues Fixed

### 1. Version Mismatch - Next.js and ESLint
**Problem**: `next@^15.3.3` but `eslint-config-next@14.0.4`
- This caused ESLint rules to be incompatible with Next.js 15 features
- Build warnings about deprecated patterns

**Solution**: Updated `eslint-config-next` to `^15.3.3` to match Next.js version

### 2. Deprecated Package - @next/font
**Problem**: `@next/font@^14.2.15` is deprecated in Next.js 15+
- Should use native `next/font` from Next.js core
- Caused unnecessary dependency bloat

**Solution**: Removed deprecated package; `next/font` is built into Next.js 15+

### 3. Image Quality Configuration
**Problem**: Images using quality 80 and 100 but not configured in `images.qualities`
- Next.js 16+ requires explicit quality configuration
- Generates warnings that become errors in strict mode

**Solution**: Added `images.qualities: [50, 75, 80, 90, 100]` to `next.config.mjs`

## Verified Dependencies

### Unused But Harmless
- `react-slick`: Not actively imported (custom carousel used instead) - Can be removed in future cleanup
- `react-slideshow`: Not used - Can be removed in future cleanup
- `slick-carousel`: Not used (CSS dependency for react-slick) - Can be removed in future cleanup
- `styled-components`: Not used - Can be removed in future cleanup

### Active Dependencies
- `swiper`: Used by some components, verified in use
- `react-icons`: Used throughout application
- `react-parallax-tilt`: Used in hero/display components
- `framer-motion`: Used for animations
- `@sanity/*`: Used for CMS integration
- `@tsparticles/*`: Used for particle effects

## Recommendations for Future Cleanup

To further optimize the bundle, consider removing:
```json
{
  "react-slick": "^0.30.3",
  "react-slideshow": "^0.0.1",
  "slick-carousel": "^1.8.1",
  "styled-components": "^6.1.18"
}
```

These packages are currently installed but not imported anywhere in the codebase.

## Testing Required

After updating dependencies, run:
```bash
npm install
npm run build
npm run dev
```

Then verify:
1. No ESLint warnings about Next.js compatibility
2. No image quality configuration warnings
3. All components render correctly
4. Animations and effects work as expected
