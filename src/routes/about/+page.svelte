<script>
  import { ContentGrid, CaptionedGridElement, ImageGridElement } from '$lib';
</script>

<svelte:head>
  <title>ContentGrid Component Testing</title>
  <meta name="description" content="Comprehensive testing suite for ContentGrid components" />
</svelte:head>

<div class="test-page">
  <header class="test-header">
    <h1>ContentGrid Component Test Suite</h1>
    <p>Systematic testing of ContentGrid, CaptionedGridElement, and ImageGridElement</p>
  </header>

  <!-- TEST 1: Basic 3-column grid with CaptionedGridElement -->
  <section class="test-section">
    <h2>Test 1: Default 3-Column Grid with Full Captions</h2>
    <p class="test-description">
      <strong>Testing:</strong> Default configuration (3 columns, 24px gap), title + caption display
      <br><strong>Expected:</strong> 3 columns on desktop, 2 on tablet, 1 on mobile
    </p>
    <ContentGrid title="Photo Gallery">
      <CaptionedGridElement
        src="https://picsum.photos/seed/1/800/800"
        alt="Mountain landscape"
        title="Mountain Vista"
        caption="A breathtaking view of mountain peaks during golden hour. The perfect blend of natural beauty and serene atmosphere."
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/2/800/800"
        alt="Ocean waves"
        title="Ocean Sunset"
        caption="Peaceful waves rolling onto the shore as the sun sets on the horizon."
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/3/800/800"
        alt="Forest trail"
        title="Forest Path"
        caption="A winding trail through an ancient forest, dappled with afternoon sunlight."
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/4/800/800"
        alt="Desert landscape"
        title="Desert Dunes"
        caption="Rolling sand dunes creating mesmerizing patterns in the desert."
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/5/800/800"
        alt="City skyline"
        title="Urban Skyline"
        caption="Modern architecture reaching for the sky in a bustling metropolis."
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/6/800/800"
        alt="Northern lights"
        title="Aurora Borealis"
        caption="Dancing lights illuminating the night sky in brilliant colors."
      />
    </ContentGrid>
  </section>

  <!-- TEST 2: 4-column grid with ImageGridElement only -->
  <section class="test-section">
    <h2>Test 2: 4-Column Grid with Simple Images</h2>
    <p class="test-description">
      <strong>Testing:</strong> Custom columns prop (4), ImageGridElement without captions
      <br><strong>Expected:</strong> 4 columns on desktop, clean image-only display
    </p>
    <ContentGrid columns={4} gap="16px" title="Image Collection">
      <ImageGridElement
        src="https://picsum.photos/seed/7/800/800"
        alt="Abstract art 1"
      />
      <ImageGridElement
        src="https://picsum.photos/seed/8/800/800"
        alt="Abstract art 2"
      />
      <ImageGridElement
        src="https://picsum.photos/seed/9/800/800"
        alt="Abstract art 3"
      />
      <ImageGridElement
        src="https://picsum.photos/seed/10/800/800"
        alt="Abstract art 4"
      />
      <ImageGridElement
        src="https://picsum.photos/seed/11/800/800"
        alt="Abstract art 5"
      />
      <ImageGridElement
        src="https://picsum.photos/seed/12/800/800"
        alt="Abstract art 6"
      />
      <ImageGridElement
        src="https://picsum.photos/seed/13/800/800"
        alt="Abstract art 7"
      />
      <ImageGridElement
        src="https://picsum.photos/seed/14/800/800"
        alt="Abstract art 8"
      />
    </ContentGrid>
  </section>

  <!-- TEST 3: 2-column grid with different aspect ratios -->
  <section class="test-section">
    <h2>Test 3: Custom Aspect Ratios</h2>
    <p class="test-description">
      <strong>Testing:</strong> aspectRatio prop (portrait, landscape, square, panoramic)
      <br><strong>Expected:</strong> Images maintain specified aspect ratios
    </p>
    <ContentGrid columns={2} gap="32px" title="Mixed Aspect Ratios">
      <CaptionedGridElement
        src="https://picsum.photos/seed/15/600/800"
        alt="Portrait photo"
        title="Portrait Format (3/4)"
        caption="Vertical composition showcasing height and depth."
        aspectRatio="3 / 4"
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/16/800/600"
        alt="Landscape photo"
        title="Landscape Format (4/3)"
        caption="Horizontal composition emphasizing width and breadth."
        aspectRatio="4 / 3"
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/17/600/600"
        alt="Square photo"
        title="Square Format (1/1)"
        caption="Perfectly balanced square composition."
        aspectRatio="1 / 1"
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/18/1200/600"
        alt="Panoramic photo"
        title="Panoramic Format (2/1)"
        caption="Wide panoramic view capturing the full scene."
        aspectRatio="2 / 1"
      />
    </ContentGrid>
  </section>

  <!-- TEST 4: Grid without title (optional prop test) -->
  <section class="test-section">
    <h2>Test 4: Optional Props - No Title</h2>
    <p class="test-description">
      <strong>Testing:</strong> ContentGrid without title prop
      <br><strong>Expected:</strong> Grid renders without title section
    </p>
    <ContentGrid columns={3}>
      <ImageGridElement
        src="https://picsum.photos/seed/19/800/800"
        alt="Nature scene 1"
      />
      <ImageGridElement
        src="https://picsum.photos/seed/20/800/800"
        alt="Nature scene 2"
      />
      <ImageGridElement
        src="https://picsum.photos/seed/21/800/800"
        alt="Nature scene 3"
      />
    </ContentGrid>
  </section>

  <!-- TEST 5: Mixed grid (both element types) -->
  <section class="test-section">
    <h2>Test 5: Mixed Element Types</h2>
    <p class="test-description">
      <strong>Testing:</strong> Combining ImageGridElement and CaptionedGridElement in same grid
      <br><strong>Expected:</strong> Both element types work together seamlessly
    </p>
    <ContentGrid columns={3} gap="20px" title="Mixed Content">
      <ImageGridElement
        src="https://picsum.photos/seed/22/800/800"
        alt="Simple image"
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/23/800/800"
        alt="Captioned image"
        title="With Caption"
        caption="This image has a descriptive caption."
      />
      <ImageGridElement
        src="https://picsum.photos/seed/24/800/800"
        alt="Another simple image"
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/25/800/800"
        alt="Another captioned"
        title="Another Caption"
        caption="Mixing different element types in the same grid works seamlessly."
      />
      <ImageGridElement
        src="https://picsum.photos/seed/26/800/800"
        alt="Simple image 3"
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/27/800/800"
        alt="Captioned image 3"
        caption="Caption without title also works fine."
      />
    </ContentGrid>
  </section>

  <!-- TEST 6: Non-expandable elements (disabled lightbox) -->
  <section class="test-section">
    <h2>Test 6: Disabled Lightbox (expandable=false)</h2>
    <p class="test-description">
      <strong>Testing:</strong> expandable prop set to false
      <br><strong>Expected:</strong> Images should NOT open lightbox on click, cursor should not show zoom-in
    </p>
    <ContentGrid columns={3} title="Static Images (Non-Clickable)">
      <ImageGridElement
        src="https://picsum.photos/seed/28/800/800"
        alt="Static image 1"
        expandable={false}
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/29/800/800"
        alt="Static image 2"
        title="Non-Expandable"
        caption="This image won't expand when clicked."
        expandable={false}
      />
      <ImageGridElement
        src="https://picsum.photos/seed/30/800/800"
        alt="Static image 3"
        expandable={false}
      />
    </ContentGrid>
  </section>

  <!-- TEST 7: Single column layout (mobile-like) -->
  <section class="test-section">
    <h2>Test 7: Single Column Layout</h2>
    <p class="test-description">
      <strong>Testing:</strong> columns=1 prop, large gap
      <br><strong>Expected:</strong> Vertical stacking, full-width images
    </p>
    <ContentGrid columns={1} gap="40px" title="Vertical Layout">
      <CaptionedGridElement
        src="https://picsum.photos/seed/31/1200/800"
        alt="Feature image 1"
        title="First Feature"
        caption="Single column layout is perfect for mobile devices or when you want to emphasize each image individually."
        aspectRatio="3 / 2"
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/32/1200/800"
        alt="Feature image 2"
        title="Second Feature"
        caption="Each image gets full width attention, making it ideal for showcasing detailed content."
        aspectRatio="3 / 2"
      />
    </ContentGrid>
  </section>

  <!-- TEST 8: Caption only (no title) -->
  <section class="test-section">
    <h2>Test 8: Captions Without Titles</h2>
    <p class="test-description">
      <strong>Testing:</strong> CaptionedGridElement with caption prop only (no title)
      <br><strong>Expected:</strong> Caption displays without title above it
    </p>
    <ContentGrid columns={3} title="Caption Only Display">
      <CaptionedGridElement
        src="https://picsum.photos/seed/33/800/800"
        alt="Image with caption"
        caption="This is a caption without a title above it."
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/34/800/800"
        alt="Image with caption"
        caption="Captions work perfectly fine on their own."
      />
      <CaptionedGridElement
        src="https://picsum.photos/seed/35/800/800"
        alt="Image with caption"
        caption="Clean and simple caption-only layout."
      />
    </ContentGrid>
  </section>

  <!-- TEST 9: Accessibility testing -->
  <section class="test-section">
    <h2>Test 9: Accessibility & Keyboard Navigation</h2>
    <p class="test-description">
      <strong>Testing:</strong> Keyboard navigation and screen reader support
      <br><strong>Instructions:</strong>
      <br>• Press <kbd>Tab</kbd> to navigate between images
      <br>• Press <kbd>Enter</kbd> or <kbd>Space</kbd> to expand focused image
      <br>• Press <kbd>Escape</kbd> to close lightbox
      <br><strong>Expected:</strong> Full keyboard support, proper focus indicators, ARIA labels
    </p>
    <ContentGrid columns={3} title="Keyboard Navigation Test">
      <ImageGridElement
        src="https://picsum.photos/seed/36/800/800"
        alt="Press Tab to navigate here, then Enter to expand"
      />
      <ImageGridElement
        src="https://picsum.photos/seed/37/800/800"
        alt="Use Escape key to close the lightbox after expanding"
      />
      <ImageGridElement
        src="https://picsum.photos/seed/38/800/800"
        alt="Full keyboard support ensures accessibility compliance"
      />
    </ContentGrid>
  </section>

  <!-- TEST 10: Custom gap sizes -->
  <section class="test-section">
    <h2>Test 10: Custom Gap Sizes</h2>
    <p class="test-description">
      <strong>Testing:</strong> gap prop with different values (8px, 24px, 48px comparison)
      <br><strong>Expected:</strong> Spacing adjusts according to gap prop
    </p>
    <ContentGrid columns={3} gap="8px" title="Tight Gap (8px)">
      <ImageGridElement src="https://picsum.photos/seed/39/800/800" alt="Tight spacing 1" />
      <ImageGridElement src="https://picsum.photos/seed/40/800/800" alt="Tight spacing 2" />
      <ImageGridElement src="https://picsum.photos/seed/41/800/800" alt="Tight spacing 3" />
    </ContentGrid>

    <ContentGrid columns={3} gap="48px" title="Wide Gap (48px)">
      <ImageGridElement src="https://picsum.photos/seed/42/800/800" alt="Wide spacing 1" />
      <ImageGridElement src="https://picsum.photos/seed/43/800/800" alt="Wide spacing 2" />
      <ImageGridElement src="https://picsum.photos/seed/44/800/800" alt="Wide spacing 3" />
    </ContentGrid>
  </section>

  <!-- TESTING INSTRUCTIONS -->
  <section class="test-section test-instructions">
    <h2>✅ Testing Checklist</h2>
    <div class="checklist-grid">
      <div class="checklist-column">
        <h3>Visual Tests</h3>
        <ul>
          <li>All components render without errors</li>
          <li>Images load correctly (using picsum.photos)</li>
          <li>Grid layouts display properly</li>
          <li>Captions and titles show correctly</li>
          <li>Hover effects work (border color, zoom, translateY)</li>
        </ul>
      </div>

      <div class="checklist-column">
        <h3>Responsive Tests</h3>
        <ul>
          <li>Desktop (>1024px): Respects column count</li>
          <li>Tablet (640-1024px): Auto 2 columns</li>
          <li>Mobile (&lt;640px): Auto 1 column</li>
          <li>Gap sizes scale appropriately</li>
          <li>Text sizes scale on mobile</li>
        </ul>
      </div>

      <div class="checklist-column">
        <h3>Interaction Tests</h3>
        <ul>
          <li>Click to expand works (Test 1-5, 7-10)</li>
          <li>Click does NOT expand (Test 6)</li>
          <li>Lightbox displays correctly</li>
          <li>Close button closes lightbox</li>
          <li>Click outside closes lightbox</li>
          <li>Cursor changes (zoom-in/zoom-out)</li>
        </ul>
      </div>

      <div class="checklist-column">
        <h3>Accessibility Tests</h3>
        <ul>
          <li>Tab navigation works</li>
          <li>Enter/Space opens lightbox</li>
          <li>Escape closes lightbox</li>
          <li>All images have alt text</li>
          <li>Buttons have aria-labels</li>
          <li>Focus indicators visible</li>
        </ul>
      </div>

      <div class="checklist-column">
        <h3>Props Tests</h3>
        <ul>
          <li>columns prop (1, 2, 3, 4)</li>
          <li>gap prop (8px, 16px, 24px, 32px, 40px, 48px)</li>
          <li>title prop (optional)</li>
          <li>caption/title props work independently</li>
          <li>aspectRatio prop maintains ratios</li>
          <li>expandable prop enables/disables lightbox</li>
        </ul>
      </div>

      <div class="checklist-column">
        <h3>Theme Tests</h3>
        <ul>
          <li>Uses --color-primary for accents</li>
          <li>Uses --color-border for borders</li>
          <li>Uses --color-card for backgrounds</li>
          <li>Uses --color-foreground for text</li>
          <li>Uses --color-muted for captions</li>
          <li>Hover states respect theme colors</li>
        </ul>
      </div>
    </div>
  </section>
</div>

<style>
  .test-page {
    max-width: 1400px;
    margin: 0 auto;
    padding: 120px 20px 80px;
    background: var(--color-background);
  }

  .test-header {
    text-align: center;
    margin-bottom: 60px;
    padding: 60px 40px;
    background: var(--color-card);
    border: 2px solid var(--color-border);
    border-radius: 16px;
  }

  .test-header h1 {
    font-size: 48px;
    font-weight: 700;
    color: var(--color-primary);
    margin: 0 0 16px 0;
    letter-spacing: -0.02em;
  }

  .test-header p {
    font-size: 18px;
    color: var(--color-muted);
    margin: 0;
  }

  .test-section {
    margin-bottom: 80px;
    padding: 40px;
    background: var(--color-card);
    border: 2px solid var(--color-border);
    border-radius: 16px;
  }

  .test-section h2 {
    font-size: 28px;
    font-weight: 600;
    color: var(--color-foreground);
    margin: 0 0 12px 0;
  }

  .test-description {
    font-size: 15px;
    color: var(--color-muted);
    margin: 0 0 32px 0;
    line-height: 1.7;
    padding: 16px 20px;
    background: var(--color-background);
    border-left: 4px solid var(--color-primary);
    border-radius: 4px;
  }

  .test-description strong {
    color: var(--color-foreground);
    font-weight: 600;
  }

  .test-description kbd {
    padding: 2px 6px;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    font-family: monospace;
    font-size: 13px;
    color: var(--color-primary);
  }

  .test-instructions {
    background: var(--color-background);
    border-color: var(--color-primary);
    border-width: 3px;
  }

  .test-instructions h2 {
    font-size: 32px;
    color: var(--color-primary);
    text-align: center;
    margin-bottom: 32px;
  }

  .checklist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  .checklist-column {
    background: var(--color-card);
    padding: 24px;
    border-radius: 12px;
    border: 1px solid var(--color-border);
  }

  .checklist-column h3 {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-primary);
    margin: 0 0 16px 0;
    padding-bottom: 12px;
    border-bottom: 2px solid var(--color-border);
  }

  .checklist-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .checklist-column li {
    padding: 8px 0 8px 24px;
    color: var(--color-foreground);
    font-size: 14px;
    line-height: 1.5;
    position: relative;
  }

  .checklist-column li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--color-primary);
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .test-page {
      padding: 20px 16px 40px;
    }

    .test-header {
      padding: 40px 24px;
      margin-bottom: 40px;
    }

    .test-header h1 {
      font-size: 32px;
    }

    .test-header p {
      font-size: 16px;
    }

    .test-section {
      padding: 24px 20px;
      margin-bottom: 40px;
    }

    .test-section h2 {
      font-size: 22px;
    }

    .test-description {
      font-size: 14px;
      padding: 12px 16px;
    }

    .checklist-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .checklist-column {
      padding: 20px;
    }
  }
</style>
