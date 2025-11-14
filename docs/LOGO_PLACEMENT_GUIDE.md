# Logo Placement Guide for Require Technologies

## For Next.js Web Application

### Primary Location
Place your logo image in the **root of the `public` directory**:

```
public/
  ├── logo.png          ← Place logo here (for web app)
  ├── logo.svg          ← Optional: SVG version for better scalability
  ├── logo-dark.png     ← Optional: Dark theme variant
  ├── logo-light.png    ← Optional: Light theme variant
  └── images/
      └── ...
```

### Why `/public/logo.png`?
The web app's structured data (in `src/app/page.tsx`) references the logo as:
```javascript
logo: (process.env.NEXT_PUBLIC_SITE_URL || 'https://requiretechnologies.com') + '/logo.png'
```

This means the logo is expected at the root URL path: `https://requiretechnologies.com/logo.png`

### Recommended Logo Sizes for Web App
- **Main logo**: 512x512px (PNG with transparent background)
- **Favicon**: 32x32px, 64x64px, 128x128px (ICO format)
- **Apple touch icon**: 180x180px (PNG)
- **Open Graph image**: 1200x630px (PNG - for social media sharing)

### Additional Locations (Optional)
You may also want to create additional logo variants:

```
public/
  ├── logo.png
  ├── favicon.ico
  ├── apple-touch-icon.png
  └── images/
      └── logos/
          ├── logo-full.png      ← Full company name + icon
          ├── logo-icon-only.png ← Icon only
          ├── logo-horizontal.png ← Horizontal layout
          └── logo-vertical.png  ← Vertical layout
```

---

## For React Native Mobile Application

### Recommended Structure
For React Native, place logos in the `assets` directory:

```
src/
  └── assets/
      └── images/
          └── logos/
              ├── logo.png           ← Main logo
              ├── logo-white.png     ← White variant (for dark backgrounds)
              ├── logo-dark.png      ← Dark variant (for light backgrounds)
              ├── logo-icon.png      ← Icon only (for app icon)
              └── logo-full.png      ← Full logo with text
```

### Alternative: Using React Native Asset System
If using Expo or React Native's asset bundler:

```
assets/
  ├── images/
  │   └── logos/
  │       ├── logo.png
  │       ├── logo@2x.png      ← 2x resolution for retina
  │       ├── logo@3x.png      ← 3x resolution for high-DPI
  │       └── logo.svg         ← Vector version (if supported)
  └── ...
```

### App Icon Locations (React Native)
For app icons, you'll need to place them in platform-specific directories:

**For Expo:**
```
assets/
  ├── icon.png          ← 1024x1024px (for app store)
  ├── splash.png        ← 2048x2048px (splash screen)
  └── adaptive-icon.png ← 1024x1024px (Android adaptive icon)
```

**For React Native CLI (iOS):**
```
ios/
  └── YourApp/
      └── Images.xcassets/
          └── AppIcon.appiconset/
              ├── icon-20@2x.png
              ├── icon-20@3x.png
              ├── icon-29@2x.png
              ├── icon-29@3x.png
              ├── icon-40@2x.png
              ├── icon-40@3x.png
              ├── icon-60@2x.png
              ├── icon-60@3x.png
              └── icon-1024.png
```

**For React Native CLI (Android):**
```
android/
  └── app/
      └── src/
          └── main/
              └── res/
                  ├── mipmap-hdpi/
                  │   └── ic_launcher.png (72x72px)
                  ├── mipmap-mdpi/
                  │   └── ic_launcher.png (48x48px)
                  ├── mipmap-xhdpi/
                  │   └── ic_launcher.png (96x96px)
                  ├── mipmap-xxhdpi/
                  │   └── ic_launcher.png (144x144px)
                  └── mipmap-xxxhdpi/
                      └── ic_launcher.png (192x192px)
```

---

## Logo Usage in Code

### Next.js Web App
```tsx
// In Header component or anywhere
import Image from 'next/image'

<Image
  src="/logo.png"
  alt="Require Technologies Logo"
  width={150}
  height={50}
  priority
/>
```

### React Native App
```tsx
// Using require (bundled assets)
import { Image } from 'react-native'

<Image
  source={require('../assets/images/logos/logo.png')}
  style={{ width: 150, height: 50 }}
  resizeMode="contain"
/>

// Or using remote URL
<Image
  source={{ uri: 'https://requiretechnologies.com/logo.png' }}
  style={{ width: 150, height: 50 }}
  resizeMode="contain"
/>
```

---

## Logo Specifications

### Design Requirements
- **Format**: PNG with transparent background (preferred)
- **Colors**: Should work on both light and dark backgrounds
- **Aspect Ratio**: Maintain consistent aspect ratio across all sizes
- **Style**: Professional, modern, aligned with brand identity

### Brand Colors Reference
- **Primary**: #1e3a8a (Dark blue)
- **Accent**: #22c55e (Green)
- **Neutral**: #374151 (Dark gray)

### Logo Variations Needed
1. **Full Logo**: Company name + icon/symbol
2. **Icon Only**: Just the symbol/icon (for app icons, favicons)
3. **Horizontal**: Logo arranged horizontally
4. **Vertical**: Logo arranged vertically (for mobile headers)
5. **Dark Theme**: Logo optimized for dark backgrounds
6. **Light Theme**: Logo optimized for light backgrounds

---

## Quick Setup Checklist

### Web App (Next.js)
- [ ] Place `logo.png` in `public/` directory
- [ ] Create `favicon.ico` in `public/` directory
- [ ] Update Header component to use logo instead of text
- [ ] Test logo displays correctly on all pages
- [ ] Verify structured data logo URL works

### React Native App
- [ ] Create `src/assets/images/logos/` directory
- [ ] Place logo files in the logos directory
- [ ] Create app icon files (multiple sizes for iOS/Android)
- [ ] Update Header component to display logo
- [ ] Test logo on different screen sizes
- [ ] Ensure logo works in both light and dark modes

---

## Next Steps

1. **Add logo to web app**: Place your logo file in `public/logo.png`
2. **Update Header component**: Replace text with logo image
3. **Create favicon**: Generate favicon.ico from your logo
4. **Prepare mobile assets**: Create logo variants for React Native app
5. **Test responsiveness**: Ensure logo looks good on all screen sizes


