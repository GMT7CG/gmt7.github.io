import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import AboutPageEs from '@/app/es/about/page';
import BoardPageEs from '@/app/es/board/page';
import ContactPageEs from '@/app/es/contact/page';
import MeetingsPageEs from '@/app/es/meetings/page';
import HomePageEs from '@/app/es/page';

describe('HomePageEs', () => {
  it('has no detectable accessibility violations', async () => {
    const { container } = render(<HomePageEs />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('AboutPageEs', () => {
  it('has no detectable accessibility violations', async () => {
    const { container } = render(<AboutPageEs />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('BoardPageEs', () => {
  it('has no detectable accessibility violations', async () => {
    const { container } = render(<BoardPageEs />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('ContactPageEs', () => {
  it('has no detectable accessibility violations', async () => {
    const { container } = render(<ContactPageEs />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('MeetingsPageEs', () => {
  it('has no detectable accessibility violations', async () => {
    const { container } = render(<MeetingsPageEs />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
