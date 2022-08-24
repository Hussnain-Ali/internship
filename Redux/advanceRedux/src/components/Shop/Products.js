import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever Wrote'
  }, {
    id: 'p2',
    price: 4,
    title: 'My First Day in college',
    description: 'The first book I ever Wrote'
  }, {
    id: 'p3',
    price: 5,
    title: 'Islamic Books',
    description: 'The first book I ever Wrote'
  }, {
    id: 'p4',
    price: 7,
    title: 'My First Historical book',
    description: 'The first book I ever Wrote'
  }, {
    id: 'p5',
    price: 8,
    title: 'My First Post Letter',
    description: 'The first book I ever Wrote'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product =>
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}

            description={product.description}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;
