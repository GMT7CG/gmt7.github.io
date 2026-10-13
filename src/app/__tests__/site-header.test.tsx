import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { SiteHeader } from '@/app/site-header';

describe('SiteHeader', () => {
  it('has no detectable accessibility violations when collapsed', async () => {
    const { container } = render(<SiteHeader />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('toggles aria-expanded on the menu button when tapped', async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    const toggle = screen.getByRole('button', { name: /menu/i });

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
  });

  it('has no detectable accessibility violations when the mobile nav is open', async () => {
    const user = userEvent.setup();
    const { container } = render(<SiteHeader />);
    await user.click(screen.getByRole('button', { name: /menu/i }));

    expect(await axe(container)).toHaveNoViolations();
  });
});
