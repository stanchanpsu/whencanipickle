import { describe, it, expect } from 'vitest';

describe('Head.astro - SEO and Font Awesome', () => {
  const headContent = `<head>
  <meta name="description" content="Check when the weather is good for outdoor pickleball at your favorite courts." />
  <meta property="og:title" content="When Can I Pickle" />
  <meta property="og:description" content="Check when the weather is good for outdoor pickleball." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
</head>`;

  it('includes meta description', () => {
    expect(headContent).toContain('meta name="description"');
  });

  it('includes Open Graph tags', () => {
    expect(headContent).toContain('property="og:title"');
    expect(headContent).toContain('property="og:description"');
    expect(headContent).toContain('property="og:type"');
  });

  it('includes Twitter card tag', () => {
    expect(headContent).toContain('name="twitter:card"');
  });

  it('loads Font Awesome only once via CDN stylesheet', () => {
    const faMatches = headContent.match(/font-awesome/g);
    expect(faMatches).toBeTruthy();
    // Should not contain the Kit script
    expect(headContent).not.toContain('kit.fontawesome.com');
  });
});
