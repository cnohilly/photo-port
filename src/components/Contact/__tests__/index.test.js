import React from 'react';
import { screen, render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('ContactForm renders', () => {
    it('renders', () => {
        render(<Contact />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders form header', () => {
        render(<Contact />);
        expect(screen.getByTestId('contact-header')).toHaveTextContent('Contact Me');
    });

    it('renders submit button', () => {
        render(<Contact />);
        expect(screen.getByTestId('submit-btn')).toHaveTextContent('Submit');
    });
});