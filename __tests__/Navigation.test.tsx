import { render, screen, fireEvent } from '@testing-library/react';
import MainPageNavigateBar from '../src/components/MainPageNavigateBar';
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Link } from 'next/link'; // Import Link

jest.mock('next-auth/react', () => ({
  ...jest.requireActual('next-auth/react'),
  useSession: jest.fn(),
}));

jest.mock('next/link', () => ({
    __esModule: true,
    default: jest.fn(({ children, href, ...props }) => (
      <a {...props} href={href}>
        {children}
      </a>
    )),
  }));

describe('MainPageNavigateBar', () => {
  
  it('should display Log-In when session is not present', () => {
    useSession.mockReturnValue({
      data: null,
      status: 'unauthenticated',
    });

    render(
      <SessionProvider session={{}}>
        <MainPageNavigateBar />
      </SessionProvider>
    );

    expect(screen.getByText('Log-In')).toBeInTheDocument();
    expect(screen.queryByText('Log-Out')).toBeNull();
  });

  it('should display Log-Out when session is present', () => {
    useSession.mockReturnValue({
      data: { user: { name: 'John Doe' } },
      status: 'authenticated',
    });

    render(
      <SessionProvider session={{}}>
        <MainPageNavigateBar />
      </SessionProvider>
    );

    expect(screen.getByText('Log-Out')).toBeInTheDocument();
    expect(screen.queryByText('Log-In')).toBeNull();
  });



  it('should navigate correctly when clicking links', () => {
    render(
      <SessionProvider session={{}}>
        <MainPageNavigateBar />
      </SessionProvider>
    );

    // Simulate clicking the "Homepage" link
    const homepageLink = screen.getByText('Homepage');
    fireEvent.click(homepageLink);
    expect(homepageLink).toHaveAttribute('href', '/main'); // Check if href is '/main'

    // Simulate clicking the "Dentists" link
    const dentistsLink = screen.getByText('Dentists');
    fireEvent.click(dentistsLink);
    expect(dentistsLink).toHaveAttribute('href', '/dentistPage'); // Check if href is '/dentistPage'
  });
  
  it('should highlight the active link', () => {
    useSession.mockReturnValue({
      data: null,
      status: 'unauthenticated',
    });

    render(
      <SessionProvider session={{}}>
        <MainPageNavigateBar />
      </SessionProvider>
    );

    // Click on 'Homepage' link and check if it's highlighted
    const homepageLink = screen.getByText('Homepage');
    fireEvent.click(homepageLink);

    expect(homepageLink).toHaveClass('bg-black text-white rounded-full');

    // Click on 'Dentists' link and check if it's highlighted
    const dentistsLink = screen.getByText('Dentists');
    fireEvent.click(dentistsLink);

    expect(dentistsLink).toHaveClass('bg-black text-white rounded-full');
  });
});
