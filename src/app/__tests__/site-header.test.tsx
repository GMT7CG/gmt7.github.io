import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { usePathname } from 'next/navigation';
import { SiteHeader } from '@/app/site-header';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('SiteHeader', () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  it('has no detectable accessibility violations when collapsed', async () => {
    const { container } = render(<SiteHeader locale="en" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('toggles aria-expanded on the menu button when tapped', async () => {
    const user = userEvent.setup();
    render(<SiteHeader locale="en" />);
    const toggle = screen.getByRole('button', { name: /menu/i });

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
  });

  it('has no detectable accessibility violations when the mobile nav is open', async () => {
    const user = userEvent.setup();
    const { container } = render(<SiteHeader locale="en" />);
    await user.click(screen.getByRole('button', { name: /menu/i }));

    expect(await axe(container)).toHaveNoViolations();
  });

  it('prefixes nav links with /es when rendered in Spanish', () => {
    render(<SiteHeader locale="es" />);
    expect(screen.getByRole('link', { name: 'Acerca de' })).toHaveAttribute('href', '/es/about');
  });

  it('points the language switch link at the Spanish equivalent of the current page', () => {
    render(<SiteHeader locale="en" />);
    expect(screen.getByRole('link', { name: 'Español' })).toHaveAttribute('href', '/es');
  });

  it('points the language switch link at the English equivalent of the current page', () => {
    (usePathname as jest.Mock).mockReturnValue('/es');
    render(<SiteHeader locale="es" />);
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('href', '/');
  });
});
