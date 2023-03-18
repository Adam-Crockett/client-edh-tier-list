import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import MultiselectSets from './MultiselectSets';
import { MultiselectSetsProps } from '../interfaces';

const optionsSingle = [
  {
    id: '04bef644-343f-4230-95ee-255f29aa67a2',
    src: 'https://svgs.scryfall.io/sets/one.svg?1678680000',
    name: 'Phyrexia: All Will Be One',
    code: 'one'
  }
];

const optionsMulti = [
  {
    id: '04bef644-343f-4230-95ee-255f29aa67a2',
    src: 'https://svgs.scryfall.io/sets/one.svg?1678680000',
    name: 'Phyrexia: All Will Be One',
    code: 'one'
  },
  {
    id: 'f35f5dd8-5b95-4f52-bbe7-1c62909a8d08',
    src: 'https://svgs.scryfall.io/sets/40k.svg?1678680000',
    name: 'Warhammer 40,000 Commander',
    code: '40k'
  },
  {
    id: 'db1b46f9-893c-4623-9465-985ff6e4472c',
    src: 'https://svgs.scryfall.io/sets/afc.svg?1678680000',
    name: 'Forgotten Realms Commander',
    code: 'afc'
  }
];

test('Successful render', () => {
  const props: MultiselectSetsProps = {
    options: optionsSingle,
    selectedCodes: [],
    onChange: () => {}
  };

  render(<MultiselectSets {...props} />);
  const component = screen.getByRole('img');
  expect(component).toBeInTheDocument();
});

test('render correct number of images', () => {
  const props: MultiselectSetsProps = {
    options: optionsMulti,
    selectedCodes: [],
    onChange: () => {}
  };
  const { container } = render(<MultiselectSets {...props} />);
  const imageElements = container.querySelectorAll('img');
  expect(imageElements.length).toBe(optionsMulti.length);

  optionsMulti.forEach((option, index) => {
    const imageElement: HTMLImageElement = imageElements[index];
    expect(imageElement).toHaveAttribute('src', option.src);
    expect(imageElement).toHaveAttribute('alt', option.name);
    expect(imageElement).toHaveAttribute('title', option.name);
    expect(imageElement).toHaveStyle(`width: 50px;`);
    expect(imageElement).toHaveStyle(`height: 50px;`);
    expect(imageElement).toHaveStyle(
      `opacity: ${props.selectedCodes.includes(option.code) ? '0.5' : '1'};`
    );
  });
});
