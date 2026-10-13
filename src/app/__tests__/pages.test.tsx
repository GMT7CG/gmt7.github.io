import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import AboutPage from '@/app/about/page';
import BoardPage from '@/app/board/page';
import ContactPage from '@/app/contact/page';
import MeetingsPage from '@/app/meetings/page';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('has no detectable accessibility violations', async () => {
    const { container } = render(<HomePage />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('AboutPage', () => {
  it('has no detectable accessibility violations', async () => {
    const { container } = render(<AboutPage />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('BoardPage', () => {
  it('has no detectable accessibility violations', async () => {
    const { container } = render(<BoardPage />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('ContactPage', () => {
  it('has no detectable accessibility violations', async () => {
    const { container } = render(<ContactPage />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('MeetingsPage', () => {
  it('has no detectable accessibility violations', async () => {
    const { container } = render(<MeetingsPage />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
