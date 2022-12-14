import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup);

describe('Gallery is rendering', () => {
    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Gallery currentCategory={portrait} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders category title', () => {
        render(<Gallery currentCategory={portrait} />);
        expect(screen.getByTestId('h1tag')).toHaveTextContent('Portraits');
    });
});