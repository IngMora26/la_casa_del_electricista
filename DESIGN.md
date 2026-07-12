---
name: Lumina Commerce
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#4f4632'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#827660'
  outline-variant: '#d4c5ab'
  surface-tint: '#785900'
  primary: '#785900'
  on-primary: '#ffffff'
  primary-container: '#ffc107'
  on-primary-container: '#6d5100'
  inverse-primary: '#fabd00'
  secondary: '#515f78'
  on-secondary: '#ffffff'
  secondary-container: '#d2e0fe'
  on-secondary-container: '#55637d'
  tertiary: '#006d2f'
  on-tertiary: '#ffffff'
  tertiary-container: '#43e777'
  on-tertiary-container: '#00632a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdf9e'
  primary-fixed-dim: '#fabd00'
  on-primary-fixed: '#261a00'
  on-primary-fixed-variant: '#5b4300'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#b9c7e4'
  on-secondary-fixed: '#0d1c32'
  on-secondary-fixed-variant: '#39475f'
  tertiary-fixed: '#66ff8e'
  tertiary-fixed-dim: '#3de273'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005322'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered to feel like a reliable local expert: knowledgeable, energetic, and highly accessible. It balances the high-energy "spark" of electrical work with the grounded stability of a long-standing community business.

The visual style is **Corporate Modern with a Warm Tactile edge**. It prioritizes clarity and high-contrast utility to ensure that professionals and homeowners alike can find what they need quickly. The interface uses generous whitespace and soft-edged containers to feel approachable rather than clinical, maintaining a professional "tool-kit" aesthetic that inspires confidence in the expertise of the staff.

## Colors

The palette is built on a high-contrast foundation to ensure legibility and brand recognition.

- **Primary (Electric Gold):** Used for calls to action, highlights, and primary brand markers. It signifies energy and attention. A slightly warmer gold (#FFC107) is preferred over pure yellow to ensure better contrast against white backgrounds.
- **Secondary (Deep Navy):** Used for typography, headers, and structural elements. It provides the "weight" of trust and professionalism.
- **Accent (Success Green):** Specifically reserved for WhatsApp integration and positive status indicators, leveraging the familiar color of the platform to drive local engagement.
- **Surface & Background:** A clean, multi-layered system using pure white for primary content cards and a very light cool-gray for the base background to reduce eye strain.

## Typography

This design system utilizes a dual-font strategy. **Montserrat** is used for headlines to provide a bold, geometric, and modern feel that resonates with industrial precision. **Inter** is used for all body copy and UI labels due to its exceptional legibility and neutral, systematic tone.

- **Headlines:** Should use tight letter spacing and high weights (600+) to command authority.
- **Body:** Standardized on a 16px base for optimal readability across all demographics.
- **Hierarchy:** Use the Secondary Navy color for all headings to maintain high contrast and a professional "ink-on-paper" feel.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop and a **single-column vertical stack** for mobile. 

- **The 8pt Grid:** All spacing and sizing must be multiples of 4px/8px to maintain a rhythmic, mathematical harmony.
- **Content Density:** Maintain generous internal padding within cards (24px) to ensure product information feels organized and uncrowded.
- **Mobile First:** Given the local nature of the business, prioritize the mobile experience with large tap targets (minimum 44px height) and easy-to-reach navigation elements.

## Elevation & Depth

Depth is used sparingly to signify interactivity. The design system avoids heavy skeuomorphism in favor of **Tonal Layers and Soft Ambient Shadows**.

- **Level 0 (Background):** Neutral light gray (#F8FAFC).
- **Level 1 (Cards/Surface):** Pure White (#FFFFFF) with a very subtle 1px border (#E2E8F0) and no shadow. Used for standard content.
- **Level 2 (Interactive):** Pure White with a soft, diffused shadow (Y: 4px, Blur: 12px, Opacity: 6% Navy). Used for hovered states or primary product cards.
- **Level 3 (Overlays):** Modals and dropdowns use a deeper shadow (Y: 8px, Blur: 24px, Opacity: 12% Navy) to create clear separation from the page.

## Shapes

The shape language is **Soft Professional**. We avoid sharp 90-degree corners to remain approachable, but avoid "bubble" or pill shapes for primary components to retain a sense of engineering and structure.

- **Primary Elements:** Buttons, input fields, and cards utilize a **0.5rem (8px)** corner radius.
- **Small Elements:** Tooltips and badges utilize a **0.25rem (4px)** corner radius.
- **Icons:** Use "broken" or "two-tone" line icons with a 2px stroke width to match the professional tone of the typography.

## Components

- **Buttons:** 
  - *Primary:* Electric Gold background with Navy text. Bold weight.
  - *Secondary:* Navy background with White text.
  - *WhatsApp:* Success Green background with White text and the WhatsApp icon.
- **Input Fields:** Large, clear borders (1px solid #CBD5E1) that thicken and turn Gold on focus. Labels should always be visible above the field in Navy Inter.
- **Cards:** Product cards should feature a clear image, a Navy bold price, and a Primary Gold "Add" or "Quote" button.
- **Chips/Badges:** Used for "In Stock" or "New" labels. Use light tinted backgrounds (e.g., light blue for info, light green for success) with high-contrast text.
- **Lists:** Use subtle horizontal dividers (#E2E8F0) and Chevron icons to indicate drill-down navigation in categories.
- **Featured Banner:** Use Navy backgrounds with Gold accents and White text for high-impact promotional sections.