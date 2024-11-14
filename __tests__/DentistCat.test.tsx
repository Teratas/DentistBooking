import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DentistCatalog from '../src/components/DentistCatalog';
import { useAppSelector } from "@/redux/store";
import { useDispatch } from 'react-redux';
import getAllDentist from "@/libs/getAllDentist";
import { setAllDentist } from "@/redux/features/slice";

// Mock useAppSelector and useDispatch
jest.mock('../src/redux/store', () => ({
    useAppSelector: jest.fn(),
}));
jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));
jest.mock('../src/libs/getAllDentist');

// Mock the DentistCatalogItem component to simplify testing
jest.mock('../src/components/DentistCatalogItem', () => () => <div>Mocked DentistCatalogItem</div>);

describe('DentistCatalog Component', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        // Reset mocks before each test
        useDispatch.mockReturnValue(mockDispatch);
        useAppSelector.mockReturnValue([]);
        jest.clearAllMocks();
    });

    it('should render without crashing', () => {
        render(<DentistCatalog />);
        expect(screen.getByTestId('dentistcatalog')).toBeInTheDocument();
    });

    it('dispatches setAllDentist when data is fetched successfully', async () => {
        // Mock getAllDentist response
        const mockData = { success: true, data: [{ id: 1, name: 'Dr. Smith' }] };
        getAllDentist.mockResolvedValue(mockData);
        sessionStorage.setItem('setupDentist', '0');

        render(<DentistCatalog />);

        await waitFor(() => {
            expect(mockDispatch).toHaveBeenCalledWith(setAllDentist(mockData.data));
        }, { timeout: 1500 });  // Increase timeout if necessary
    });

    it('does not dispatch setAllDentist if setupDentist is set to 1 in sessionStorage', async () => {
        sessionStorage.setItem('setupDentist', '1');
        render(<DentistCatalog />);

        await waitFor(() => {
            expect(mockDispatch).not.toHaveBeenCalledWith(setAllDentist(expect.anything()));
        });
    });
});
