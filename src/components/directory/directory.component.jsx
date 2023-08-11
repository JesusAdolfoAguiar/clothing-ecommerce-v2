import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: require('../../assets/hats.webp'),
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: require('../../assets/jackets.webp'),
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: require('../../assets/sneakers.webp'),
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: require('../../assets/womens.webp'),
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: require('../../assets/mens.webp'),
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
