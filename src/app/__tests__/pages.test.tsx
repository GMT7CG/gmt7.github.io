import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/about/page';
import BoardPage from '@/app/board/page';
import ContactPage from '@/app/contact/page';
import MeetingsPage from '@/app/meetings/page';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders the organization name as the main heading', () => {
    render(<HomePage />);
    expect(
      screen.getByRole('heading', { level: 1, name: /George Merrick Troop 7 of Coral Gables/i }),
    ).toBeInTheDocument();
  });
});

describe('AboutPage', () => {
  it('renders the history heading', () => {
    render(<AboutPage />);
    expect(
      screen.getByRole('heading', { level: 1, name: /About and History/i }),
    ).toBeInTheDocument();
  });
});

describe('BoardPage', () => {
  it('lists the board president', () => {
    render(<BoardPage />);
    expect(screen.getAllByText('Brandon Shoop').length).toBeGreaterThan(0);
    expect(screen.getByText('President')).toBeInTheDocument();
  });
});

describe('ContactPage', () => {
  it('renders the registered agent mailing address', () => {
    render(<ContactPage />);
    expect(screen.getByText(/Richard L. Richards/i)).toBeInTheDocument();
  });
});

describe('MeetingsPage', () => {
  it('notes that the cadence is pending a board vote', () => {
    render(<MeetingsPage />);
    expect(screen.getByText(/pending a board review and vote/i)).toBeInTheDocument();
  });
});
