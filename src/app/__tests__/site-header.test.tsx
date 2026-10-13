import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { SiteHeader } from '@/app/site-header';

describe('SiteHeader', () => {
  it('has no detectable accessibility violations when collapsed', async () => {
    const { container } = render(<SiteHeader />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('opens the mobile nav on tap and has no violations while open', async () => {
    const user = userEvent.setup();
    const { container } = render(<SiteHeader />);

    await user.click(screen.getByRole('button', { name: /open menu/i }));

    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});
