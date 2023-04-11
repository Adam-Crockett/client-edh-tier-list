import { render, fireEvent } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar component', () => {
  const mockOnClickSetEdit = jest.fn();
  const mockSetResetState = jest.fn();
  const mockHandleAddTierLevel = jest.fn();
  const mockOnClickExport = jest.fn();

  const props = {
    handleOnClickSetEdit: mockOnClickSetEdit,
    setResetState: mockSetResetState,
    resetState: false,
    handleAddTierLevel: mockHandleAddTierLevel,
    handleOnClickExport: mockOnClickExport,
    selectedCodes: []
  };

  it('should render correctly', () => {
    const { getByText, getByTitle } = render(<Navbar {...props} />);

    expect(getByText('POWER LEVEL')).toBeInTheDocument();
    expect(getByText('An EDH Tier Tool')).toBeInTheDocument();
    expect(getByTitle('Select Sets')).toBeInTheDocument();
    expect(getByTitle('Add Tier')).toBeInTheDocument();
    expect(getByTitle('Reset All Data')).toBeInTheDocument();
    expect(getByTitle('Download')).toBeInTheDocument();
  });

  it('should call handleOnClickSetEdit when Select Sets button is clicked', () => {
    const { getByTitle } = render(<Navbar {...props} />);
    const selectSetsButton = getByTitle('Select Sets');

    fireEvent.click(selectSetsButton);

    expect(mockOnClickSetEdit).toHaveBeenCalled();
  });

  it('should call handleAddTierLevel when Add Tier button is clicked', () => {
    const { getByTitle } = render(<Navbar {...props} />);
    const addTierButton = getByTitle('Add Tier');

    fireEvent.click(addTierButton);

    expect(mockHandleAddTierLevel).toHaveBeenCalled();
  });

  it('should call handleOnClickReset when Reset All Data button is clicked', () => {
    const { getByTitle } = render(<Navbar {...props} />);
    const resetButton = getByTitle('Reset All Data');

    fireEvent.click(resetButton);

    expect(mockSetResetState).toHaveBeenCalledWith(true);
  });

  it('should call handleOnClickExport when Download button is clicked', () => {
    const { getByTitle } = render(<Navbar {...props} />);
    const downloadButton = getByTitle('Download');

    fireEvent.click(downloadButton);

    expect(mockOnClickExport).toHaveBeenCalled();
  });
});
