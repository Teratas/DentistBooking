import { render, screen } from "@testing-library/react";
import DentistCatalog from "@/components/DentistCatalog";
import { useAppSelector } from "@/redux/store";
import '@testing-library/jest-dom';

// Mock the Redux selector
jest.mock("../src/redux/store", () => ({
    useAppSelector: jest.fn(),
}));

describe('DentistCatalog Component', () => {
    it('should render a list of DentistCatalogItem components based on the Redux state', () => {
        // Define mock data for the test
        const mockData = [
            {
                address: 'forest',
                expertist: "spirit master",
                hospital: "daf",
                id: "1",
                name: "gotien",
                picture: "jsafjlf",
                tel: "121414",
                __v: 0,
                _id: "fjwsjelfj"
            },
            {
                address: 'city',
                expertist: "mind healer",
                hospital: "gaf",
                id: "2",
                name: "doe",
                picture: "image_link",
                tel: "987654321",
                __v: 1,
                _id: "abcdefg"
            }
        ];

        // Mock the return value of useAppSelector to simulate the Redux state
        useAppSelector.mockReturnValue(mockData);

        render(<DentistCatalog />);

        // Assert that the items in mockData are rendered
        mockData.forEach(dentist => {
            expect(screen.getByText(dentist.name)).toBeInTheDocument();
        });

        // Optionally, verify that the correct number of items are rendered
        const catalogItems = screen.getAllByText(/spirit master|mind healer/);
        expect(catalogItems.length).toBe(mockData.length);
    });
});
