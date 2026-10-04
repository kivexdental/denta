---
name: website-toolbar
description: >-
  Execute the complete Website Preview Toolbar implementation, repair, branding,
  responsive preview, interaction, accessibility and QA workflow on the current project.
  Builds or repairs a professional KIVEX-branded website preview toolbar (PC, Tablet, Phone, Fullscreen).
---

# ACTION: /website-toolbar

## COMMAND

When the user runs:

/website-toolbar

execute the complete Website Preview Toolbar implementation, repair, branding, responsive preview, interaction, accessibility and QA workflow on the current project.

The purpose of this action is to create a professional KIVEX-branded website preview toolbar that allows the user to preview the current website as:

- PC
- Tablet
- Phone
- Fullscreen

The toolbar is a PREVIEW APPLICATION WRAPPER.

It must remain separate from the actual website.

The actual website must never control or replace the toolbar branding.

==================================================
# 1. PRIMARY OBJECTIVE
==================================================

Build or repair the website preview toolbar so that it provides a professional device-preview environment.

The user must be able to switch between:

PC → Tablet → Phone → Fullscreen

The website must genuinely respond to the selected viewport.

Do NOT fake responsive behavior by visually shrinking the desktop website.

Use a real viewport-based preview architecture.

The toolbar must use permanent KIVEX Technology branding.

==================================================
# 2. PERMANENT KIVEX BRANDING
==================================================

The toolbar MUST ALWAYS display:

KIVEX Technology

as the permanent application brand.

The toolbar must NEVER dynamically replace KIVEX Technology with the target website's:

- logo
- title
- favicon
- company name
- brand name
- page title
- document.title
- Open Graph title
- metadata
- website identity

The previewed website may change.

The toolbar branding MUST NOT change.

The permanent toolbar identity is:

KIVEX Technology

==================================================
# 3. KIVEX BRANDING REFERENCE
==================================================

Use the supplied KIVEX Technology reference image as the visual reference.

The branding should visually follow the supplied reference:

KIVEX
Technology

"KIVEX":

- uppercase
- bold
- strong
- KIVEX blue

"Technology":

- smaller
- KIVEX warm yellow/gold
- visually connected to KIVEX

The branding should feel like one KIVEX Technology logo lockup.

Do NOT replace it with the current website logo.

Do NOT detect the website logo automatically.

==================================================
# 4. KIVEX COLORS
==================================================

Use the supplied reference image and existing KIVEX design system.

Primary KIVEX blue:

#2D5FC7

Toolbar background:

#F5EFE5

Technology accent:

#E8B62A

Use these colors consistently.

Do not introduce unrelated colors unless required for accessibility.

The toolbar should have the same overall light cream/orange visual character as the supplied reference.

==================================================
# 5. TOOLBAR BACKGROUND
==================================================

The toolbar MUST use a light cream/orange background.

Primary:

#F5EFE5

Do NOT use:

- dark background
- black toolbar
- dark developer-console styling
- unrelated gradients

The toolbar should feel like part of the KIVEX brand system.

Use subtle:

- border
- shadow
- separators

only where visually appropriate.

Keep it clean and premium.

==================================================
# 6. KIVEX BRANDING LAYOUT
==================================================

Place KIVEX Technology on the LEFT side of the toolbar.

Example:

KIVEX Technology                     [ PC ] [ Tablet ] [ Phone ] [ Fullscreen ]   ×

The KIVEX branding must remain visible in the normal toolbar state.

Do not allow the target website to replace it.

Do not render the website's logo in this location.

==================================================
# 7. SINGLE-LINE BRANDING REQUIREMENT
==================================================

IMPORTANT:

Treat:

KIVEX Technology

as ONE branding unit.

The branding must not be replaced by the target website.

Do not allow the toolbar to dynamically wrap the branding into unrelated sections.

The words KIVEX and Technology may use different font sizes, weights and colors as shown in the supplied reference, but they must visually belong to one KIVEX Technology branding unit.

Preferred visual representation:

KIVEX Technology

with:

KIVEX → large blue

Technology → smaller gold/yellow

Keep the entire branding compact.

==================================================
# 8. NO BRAND BACKGROUND
==================================================

Do NOT put KIVEX Technology inside:

- white box
- blue box
- yellow box
- card
- badge
- pill
- separate colored rectangle

The toolbar background itself is:

#F5EFE5

The KIVEX branding should sit directly on that toolbar background.

==================================================
# 9. DEVICE VIEW CONTROLS
==================================================

The toolbar must contain:

PC
Tablet
Phone
Fullscreen

These are preview controls.

They must never display:

- website logo
- website title
- website favicon
- target website name
- target website branding

The controls belong to the KIVEX preview application.

==================================================
# 10. DEVICE CONTROL DESIGN
==================================================

Design the device controls as part of the KIVEX toolbar.

Use:

- KIVEX blue
- cream background
- subtle border
- rounded controls
- clean typography
- clear active state

The active device should use KIVEX blue.

Inactive controls should remain subtle.

The device controls must feel like one coherent KIVEX product interface.

==================================================
# 11. ACTIVE DEVICE STATE
==================================================

Only one device mode can be active at a time.

Modes:

PC
Tablet
Phone
Fullscreen

The active mode must be visually obvious.

Use:

- KIVEX blue
- background
- border
- font weight
- optional icon

Do not communicate the active state using color alone.

==================================================
# 12. DEVICE VIEW EXPANDED INTERFACE
==================================================

IMPORTANT:

When the user clicks or opens the device-view control area, the expanded device-view interface MUST ALSO display:

KIVEX Technology

The KIVEX branding must remain associated with the device-view controls.

Example:

KIVEX Technology

PC
Tablet
Phone
Fullscreen

The target website's branding must NEVER appear in place of KIVEX Technology.

If the device controls open inside a:

- dropdown
- popover
- expanded toolbar
- device selection panel
- device selector

then that interface must retain KIVEX Technology as its application identity.

==================================================
# 13. DEVICE VIEW PANEL BRANDING
==================================================

When expanded, the device-view interface may visually resemble:

┌───────────────────────────────────────┐
│ KIVEX Technology                  ×   │
│                                       │
│  PC                                   │
│  Tablet                               │
│  Phone                                │
│  Fullscreen                           │
└───────────────────────────────────────┘

The exact layout can follow the existing toolbar design.

The requirements are:

1. KIVEX Technology remains visible.
2. Device controls remain available.
3. Cross button remains available.
4. Target website branding never replaces KIVEX.
5. The interface remains visually consistent with the main toolbar.

==================================================
# 14. CROSS / CLOSE BUTTON
==================================================

IMPORTANT:

KEEP THE CROSS BUTTON.

The toolbar MUST have a:

×

close/cross button.

Do NOT remove it.

The cross button has a completely different purpose from the device controls.

Cross:

×

→ hides the preview toolbar.

Device controls:

PC
Tablet
Phone
Fullscreen

→ change the preview viewport.

Do not combine these functions.

==================================================
# 15. CROSS BUTTON BEHAVIOR
==================================================

When the user clicks:

×

the entire preview toolbar should hide.

The actual website must remain fully functional and visible.

Closing the toolbar must NOT:

- change website CSS
- modify website width
- modify website height
- modify website layout
- navigate away
- reload the website unnecessarily
- remove website functionality

The toolbar should simply disappear.

==================================================
# 16. REOPEN TOOLBAR
==================================================

When the toolbar is hidden, provide a small floating circular KIVEX preview control if required by the existing toolbar architecture.

The floating control should allow the user to reopen the toolbar.

IMPORTANT:

The floating reopen control is part of the preview application.

It is NOT part of the actual website.

When clicked:

- restore the toolbar
- preserve the current device mode
- preserve website state where possible

Do not add unnecessary target-site actions.

==================================================
# 17. REMOVE ONLY THE UNWANTED TARGET-SITE ACTION
==================================================

Completely remove:

"Open targeted site in new tab"

Do NOT show:

- Open targeted site
- Open target site
- Open website
- Open in new tab
- External website
- External-link target action

Do not replace it with another equivalent target-site button.

==================================================
# 18. DO NOT REMOVE THE CROSS
==================================================

The following distinction is mandatory:

REMOVE:

"Open targeted site in new tab"

KEEP:

"×"

The cross is required.

The cross hides the toolbar.

The open-new-tab option is unwanted and must be removed.

Do NOT confuse these two controls.

==================================================
# 19. FINAL TOOLBAR STRUCTURE
==================================================

The preferred toolbar structure is:

┌────────────────────────────────────────────────────────────────────────────┐
│ KIVEX Technology        [ PC ] [ Tablet ] [ Phone ] [ Fullscreen ]      × │
└────────────────────────────────────────────────────────────────────────────┘

Toolbar background:

#F5EFE5

KIVEX:

#2D5FC7

Technology:

#E8B62A

The exact spacing may adapt to the existing application.

Do not add unnecessary controls.

==================================================
# 20. TOOLBAR ISOLATION
==================================================

The toolbar is an APPLICATION WRAPPER.

The website is the PREVIEW TARGET.

Treat them as separate systems.

Architecture:

KIVEX TOOLBAR
        ↓
PREVIEW WORKSPACE
        ↓
DEVICE FRAME
        ↓
IFRAME
        ↓
ACTUAL WEBSITE

The toolbar must be outside the website.

The website must not inherit toolbar styles.

The toolbar must not inherit website branding.

==================================================
# 21. PREVIEW WEBSITE BRANDING IS FORBIDDEN
==================================================

Do NOT automatically detect or render:

- target website logo
- target website title
- target website favicon
- target website company name
- target website colors

inside the KIVEX toolbar.

Even if the target website contains:

<title>Dental Clinic</title>

the toolbar must still say:

KIVEX Technology

==================================================
# 22. CORE PREVIEW ARCHITECTURE
==================================================

Use an isolated iframe or equivalent true viewport-based rendering.

The website must receive the actual selected viewport.

Conceptually:

KIVEX TOOLBAR
↓
PREVIEW AREA
↓
DEVICE FRAME
↓
IFRAME
↓
ACTUAL WEBSITE

The toolbar is outside the iframe.

==================================================
# 23. REAL VIEWPORT REQUIREMENT
==================================================

Do NOT use:

transform: scale()

as the primary responsive mechanism.

Phone:

390px actual website viewport

Tablet:

768px actual website viewport

PC:

1280px or appropriate desktop viewport

Fullscreen:

available viewport

The website must actually receive these dimensions.

==================================================
# 24. PHONE MODE
==================================================

When Phone is selected:

Create a phone preview frame.

Target website viewport:

390px

The website must genuinely behave like a 390px browser viewport.

Expected:

- mobile navbar
- desktop navigation hidden
- mobile menu visible
- responsive typography
- stacked sections
- responsive service cards
- responsive images
- responsive buttons
- responsive FAQ
- responsive footer
- mobile spacing

Do NOT squeeze the desktop website into the phone frame.

==================================================
# 25. TABLET MODE
==================================================

When Tablet is selected:

Create a tablet preview frame.

Target website viewport:

768px

The website must genuinely receive:

768px

Expected:

- tablet navigation
- tablet typography
- responsive cards
- responsive hero
- responsive grid
- responsive images
- responsive spacing
- responsive footer

Do not show a desktop 1280px layout visually squeezed into 768px.

==================================================
# 26. PC MODE
==================================================

When PC is selected:

Use an actual desktop viewport.

Preferred:

1280px

or available desktop preview width.

Expected:

- desktop navigation
- desktop hero
- desktop cards
- desktop spacing
- desktop typography

The desktop website must remain visually intact.

==================================================
# 27. FULLSCREEN MODE
==================================================

When Fullscreen is selected:

- remove unnecessary device frame
- use available viewport
- allow natural website dimensions
- do not artificially scale
- respond to viewport resizing

The KIVEX toolbar remains available.

Do not allow fullscreen to destroy website responsiveness.

==================================================
# 28. DEVICE FRAME
==================================================

The device frame is ONLY a visual presentation layer.

Phone:

390px website viewport

Tablet:

768px website viewport

Desktop:

1280px or available desktop viewport

The iframe determines the website viewport.

The device frame must not determine responsive CSS.

==================================================
# 29. RESPONSIVE BREAKPOINT AUDIT
==================================================

Inspect the actual website breakpoints.

Recommended:

Mobile:

320px–767px

Tablet:

768px–1023px

Desktop:

1024px+

Do not blindly rewrite existing breakpoints.

Only fix actual conflicts.

Ensure desktop rules do not incorrectly override mobile rules.

==================================================
# 30. NO HORIZONTAL OVERFLOW
==================================================

Test:

320px
360px
375px
390px
414px
480px
600px
768px
834px
900px
1024px
1280px
1440px
1920px

Check:

- navbar
- hero
- headings
- buttons
- images
- cards
- sliders
- footer
- decorative elements

Find the actual element causing overflow.

Do NOT blindly solve the problem with:

overflow-x: hidden;

unless it is genuinely required.

Fix the root cause.

==================================================
# 31. MODE SWITCHING
==================================================

Test:

PC → Tablet → Phone → PC

and:

Phone → Tablet → Fullscreen → PC

Switching must:

- update actual viewport
- update device frame
- preserve functionality
- preserve scroll position where possible
- avoid unnecessary reloads
- avoid duplicate iframes
- avoid memory leaks
- avoid flickering

==================================================
# 32. STATE PRESERVATION
==================================================

Where technically possible preserve:

- current route
- scroll position
- active section
- FAQ state
- preview state

Do not unnecessarily preserve sensitive information.

==================================================
# 33. IFRAME REQUIREMENTS
==================================================

If using iframe, verify the target website has:

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
/>

Inspect:

- min-width
- fixed widths
- fixed heights
- absolute positioning
- viewport units
- oversized images
- fixed navigation
- typography
- desktop-only layouts

Fix root causes rather than masking them.

==================================================
# 34. TOOLBAR RESPONSIVENESS
==================================================

The KIVEX toolbar itself must remain responsive.

At smaller application widths:

- KIVEX Technology remains visible
- device controls remain accessible
- cross button remains accessible
- no horizontal overflow
- controls remain readable
- branding remains recognizable

Do NOT replace KIVEX branding with the website logo on small screens.

==================================================
# 35. TOUCH INTERACTIONS
==================================================

Phone preview must support:

- touch scrolling
- mobile menu
- FAQ
- before/after slider
- buttons
- links
- carousels

Do not rely on hover.

==================================================
# 36. ACCESSIBILITY
==================================================

Toolbar controls must be accessible.

Provide:

- semantic buttons
- accessible names
- visible focus
- keyboard navigation
- clear active state

Support:

TAB
SHIFT+TAB
ENTER
SPACE
ESC where appropriate

The cross button must be keyboard accessible.

The device buttons must be keyboard accessible.

The reopen button, if used, must be keyboard accessible.

Do not communicate device state only through color.

==================================================
# 37. TOOLBAR Z-INDEX
==================================================

Keep the toolbar's stacking context isolated.

The toolbar must appear above the preview application.

Do not inject arbitrary huge z-index values into the actual website.

Do not modify website stacking contexts unnecessarily.

==================================================
# 38. SCROLL BEHAVIOR
==================================================

Define clear scroll ownership.

Avoid:

- double scrollbars
- unnecessary nested scrolling
- scroll locking
- scroll conflicts
- broken mobile scrolling
- toolbar scrolling with website

The website should feel like a real device viewport.

==================================================
# 39. PERFORMANCE
==================================================

Keep the toolbar lightweight.

Avoid:

- duplicate iframes
- continuous resize loops
- unnecessary re-renders
- expensive animations
- unnecessary observers
- memory leaks

Use one preview instance where practical.

Device switching should feel instant.

==================================================
# 40. RESIZE + FULLSCREEN HANDLING
==================================================

When the preview workspace changes size:

- recalculate available frame space
- preserve actual device viewport
- center the device
- prevent clipping
- avoid unintended website scaling

Visual fitting of the DEVICE FRAME is allowed.

However:

IMPORTANT:

Visual frame fitting must NEVER replace the website's actual responsive viewport.

When Fullscreen is selected:

- remove unnecessary frame
- calculate available viewport
- resize preview
- respond to browser resizing
- avoid stale dimensions

==================================================
# 41. CROSS-BROWSER + META SAFETY
==================================================

Test where available:

- Chrome
- Edge
- Firefox
- Safari

Pay special attention to:

- iframe sizing
- viewport behavior
- fullscreen
- pointer events
- touch
- scrolling
- resize observers
- CSS viewport units

The toolbar must not interfere with website SEO.

Do NOT:

- duplicate title tags
- inject website metadata
- modify canonical URLs
- modify Open Graph metadata
- create unnecessary crawlable preview pages

KIVEX Technology is application UI branding.

It is NOT a replacement for the website's actual SEO metadata.

==================================================
# 42. FINAL KIVEX BRANDING TEST
==================================================

Compare the toolbar against the supplied KIVEX reference image.

Verify:

[ ] KIVEX is blue
[ ] KIVEX uses #2D5FC7
[ ] Technology is warm gold/yellow
[ ] Technology uses #E8B62A
[ ] Toolbar uses #F5EFE5
[ ] No separate background exists behind the branding
[ ] KIVEX Technology is permanent
[ ] Target website logo never replaces KIVEX
[ ] Target website title never replaces KIVEX
[ ] Target favicon never replaces KIVEX
[ ] Branding remains visible in device-view interface
[ ] Branding remains visually connected to device controls

==================================================
# 43. FINAL FUNCTIONAL TEST MATRIX
==================================================

Verify:

PHONE

320px
360px
375px
390px
414px
480px

TABLET

600px
768px
834px
900px

DESKTOP

1024px
1280px
1366px
1440px
1536px
1920px

MODES

PC
Tablet
Phone
Fullscreen

TOOLBAR

[ ] KIVEX Technology visible
[ ] PC works
[ ] Tablet works
[ ] Phone works
[ ] Fullscreen works
[ ] Cross button works
[ ] Toolbar hides correctly
[ ] Toolbar can reopen if reopen control is implemented
[ ] Device-view interface contains KIVEX Technology
[ ] Target website branding never appears
[ ] "Open targeted site in new tab" removed
[ ] No equivalent external-site action exists

PREVIEW

[ ] Phone uses real 390px viewport
[ ] Tablet uses real 768px viewport
[ ] PC uses real desktop viewport
[ ] Fullscreen uses natural viewport
[ ] No fake responsive scaling
[ ] Responsive CSS activates
[ ] No duplicate iframe
[ ] No unnecessary reload
[ ] Scrolling works
[ ] Touch works
[ ] Fullscreen resize works

==================================================
# 44. FINAL QUALITY GATE + REPORT
==================================================

Do not finish merely because the toolbar renders.

Actually verify the entire system.

FINAL CHECK:

BRANDING
[ ] Permanent KIVEX Technology
[ ] KIVEX blue #2D5FC7
[ ] Technology gold #E8B62A
[ ] Toolbar #F5EFE5
[ ] No branding background
[ ] No target-site branding
[ ] KIVEX appears in main toolbar
[ ] KIVEX appears in device-view interface

TOOLBAR
[ ] PC
[ ] Tablet
[ ] Phone
[ ] Fullscreen
[ ] Active state
[ ] Cross button
[ ] Hide functionality through cross
[ ] Reopen functionality where appropriate
[ ] No "Open targeted site in new tab"
[ ] No external target-site button
[ ] No target website logo

PREVIEW
[ ] Real 390px Phone viewport
[ ] Real 768px Tablet viewport
[ ] Real desktop viewport
[ ] Natural Fullscreen viewport
[ ] Responsive CSS activates
[ ] No fake scaling
[ ] No duplicate iframe
[ ] No broken state

RESPONSIVE
[ ] No horizontal overflow
[ ] Mobile navigation works
[ ] Tablet layout works
[ ] Desktop layout remains intact
[ ] Images resize correctly
[ ] Typography responds correctly
[ ] Cards respond correctly
[ ] Footer responds correctly

ACCESSIBILITY
[ ] Keyboard accessible
[ ] Focus states
[ ] Semantic buttons
[ ] Accessible labels
[ ] Active state not color-only
[ ] Cross button accessible
[ ] Device buttons accessible

QUALITY
[ ] No console errors
[ ] No debug code
[ ] No unnecessary dependencies
[ ] No broken imports
[ ] Production build works

FINAL REPORT:

# WEBSITE TOOLBAR REPORT

## 1. KIVEX BRANDING

Report:

- branding implementation
- colors
- positioning
- device-view branding
- target-site branding isolation

## 2. TOOLBAR

Report:

- PC
- Tablet
- Phone
- Fullscreen
- Cross
- hide/reopen behavior
- removed target-site actions

## 3. PREVIEW ARCHITECTURE

Report:

- iframe/equivalent architecture
- actual viewport implementation
- device frame behavior
- separation between toolbar and website

## 4. RESPONSIVE TESTING

Report tested widths and results.

## 5. ACCESSIBILITY

Report:

- keyboard
- focus
- buttons
- device controls
- cross button

## 6. ISSUES FOUND

For every issue:

- severity
- file/component
- root cause
- fix
- verification

Severity:

CRITICAL
HIGH
MEDIUM
LOW

## 7. FILES CHANGED

List every modified file.

## 8. REMAINING RISKS

Only report items that could not actually be verified.

Clearly distinguish:

VERIFIED
PARTIALLY VERIFIED
NOT VERIFIED

==================================================
FINAL PRINCIPLE
==================================================

The toolbar is a permanent KIVEX Technology application interface.

The previewed website is only the content being displayed inside it.

NEVER allow the previewed website to determine toolbar branding.

NEVER replace KIVEX Technology with the website logo.

NEVER replace KIVEX Technology with the website title.

NEVER replace KIVEX Technology with the favicon.

REMOVE:

"Open targeted site in new tab"

KEEP:

"×"

The cross button hides the toolbar.

The device controls change the preview viewport.

When the device-view interface is opened, KIVEX Technology must remain visible there as well.

The final experience must be:

KIVEX Technology
+
PC / Tablet / Phone / Fullscreen
+
× close control

with:

Toolbar:
#F5EFE5

KIVEX:
#2D5FC7

Technology:
#E8B62A

The toolbar must be clean, minimal, premium and visually consistent with the supplied KIVEX Technology reference.

REAL VIEWPORT > VISUAL SCALING

KIVEX BRANDING > TARGET WEBSITE BRANDING
