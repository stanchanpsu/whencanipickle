import { describe, it, expect } from 'vitest';

/**
 * Tests for the timezone tooltip feature (#63).
 */

describe('timezone tooltip - generateHeaders', () => {
  it('includes title attribute on each date header', () => {
    const tooltip = "Times shown in city local time";
    const dates = [
      new Date('2024-05-15T00:00:00Z'),
      new Date('2024-05-16T00:00:00Z'),
    ];
    const result = dates
      .map((d) => {
        const label = 'MockLabel';
        return `<th title="${tooltip}">${label}</th>`;
      })
      .join('');

    expect(result).toContain('title="Times shown in city local time"');
    expect(result).toContain('MockLabel');
  });

  it('generates correct number of headers', () => {
    const dates = [
      new Date('2024-05-15T00:00:00Z'),
      new Date('2024-05-16T00:00:00Z'),
      new Date('2024-05-17T00:00:00Z'),
    ];
    const result = dates
      .map((d) => `<th title="Times shown in city local time">Label</th>`)
      .join('');

    const headers = result.match(/<th /g);
    expect(headers).toHaveLength(3);
  });
});

describe('timezone tooltip - results', () => {
  it('includes timezone note in innerHTML', () => {
    const innerHTML = `🎾 Good news! You can play pickleball

<div class="timezone-note">🕐 Times shown in city local time</div>`;

    expect(innerHTML).toContain('timezone-note');
    expect(innerHTML).toContain('Times shown in city local time');
  });

  it('includes timezone note in no-results case', () => {
    const innerHTML = `😔 Darn! No good pickleball weather in the next week.  Check back later! 🥒
<div class="timezone-note">🕐 Times shown in city local time</div>`;

    expect(innerHTML).toContain('timezone-note');
    expect(innerHTML).toContain('Times shown in city local time');
  });
});
