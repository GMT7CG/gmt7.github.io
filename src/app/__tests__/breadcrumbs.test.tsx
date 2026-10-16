import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { usePathname } from 'next/navigation';
import { Breadcrumbs } from '@/app/breadcrumbs';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Breadcrumbs', () => {
  it('renders nothing on the home page', () => {
    (usePathname as jest.Mock).mockReturnValue('/');
    const { container } = render(<Breadcrumbs locale="en" />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders the trail from home to the current page', () => {
    (usePathname as jest.Mock).mockReturnValue('/board');
    render(<Breadcrumbs locale="en" />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByText('Board')).toHaveAttribute('aria-current', 'page');
  });

  it('localizes the home link and labels in Spanish', () => {
    (usePathname as jest.Mock).mockReturnValue('/es/board');
    render(<Breadcrumbs locale="es" />);
    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/es');
    expect(screen.getByText('Directiva')).toHaveAttribute('aria-current', 'page');
  });

  it('has no detectable accessibility violations', async () => {
    (usePathname as jest.Mock).mockReturnValue('/about');
    const { container } = render(<Breadcrumbs locale="en" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
