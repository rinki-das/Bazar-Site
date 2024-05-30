import React, { useState } from 'react';
import './search.css'; 
import 'font-awesome/css/font-awesome.min.css'; 

const subcategories = {
  vegetables: [
    'Dark green vegetables',
    'Red and Orange vegetables',
    'Beans & Peas',
    'Starchy Vegetables',
    'Daily Vegetables'
  ],
  fruits: [
    'Pomes',
    'Drupes',
    'Melons',
    'Citrus',
    'Tropical',
    'Seasonal',
    'Apples',
    'Fresh Arrivals',
    'Dry Fruits'
  ],
  dairy: [
    'Milk',
    'Dry Milk',
    'Sweets',
    'Others'
  ],
  organic: [
    'Organic Food'
  ],
  grocery: [
    'Grains & Breads',
    'Eggs',
    'Noodles',
    'Cold Drinks',
    'Tea & Coffee'
  ],
  meatAndSeafood: [
    'Chicken',
    'Mutton',
    'Fish & Seafood',
    'Frozen Meat'
  ]
};

const productData = [
  { name: 'Onion', price: 20, category: 'vegetables', subCategory: 'Daily Vegetables', image: 'search01.jpg' },
  { name: 'Pumpkin', price: 25, category: 'vegetables', subCategory: 'Red and Orange vegetables', image: 'search02.jpg' },
  { name: 'Orange', price: 40, category: 'fruits', subCategory: 'Citrus', image: 'search04.jpg' },
  { name: 'Salt', price: 20, category: 'grocery', subCategory: 'Others', image: 'Salt.jpg' },
  { name: 'Spinach', price: 20, category: 'vegetables', subCategory: 'Dark green vegetables', image: 'search06.jpg' },
  { name: 'Milk', price: 35, category: 'dairy', subCategory: 'Milk', image: 'Milk.jpeg' },
  { name: 'Potato', price: 20, category: 'vegetables', subCategory: 'Starchy Vegetables', image: 'search07.jpg' },
  { name: 'Pineapple', price: 20, category: 'fruits', subCategory: 'Tropical', image: 'search05.png' },
  { name: 'Oreo', price: 50, category: 'grocery', subCategory: 'Others', image: 'oreo.webp' },
  { name: 'Tomato Ketchup', price: 30, category: 'grocery', subCategory: 'Others', image: 'Ketchup.jpeg' },
  { name: 'Watermelon', price: 40, category: 'fruits', subCategory: 'Melons', image: 'water.jpg' },
  { name: 'Apple', price: 30, category: 'fruits', subCategory: 'Pomes', image: 'apple.jpg' },
  { name: 'Amul Cheese', price: 30, category: 'dairy', subCategory: 'Sweets', image: 'Amul Cheese.jpg' },
  { name: 'Amul Butter', price: 70, category: 'dairy', subCategory: 'Sweets', image: 'Amulbutter.webp' },
  { name: 'Tofu', price: 30, category: 'dairy', subCategory: 'Others', image: 'Tofu.jpeg' },
  { name: 'Raw Sugar', price: 30, category: 'organic', subCategory: 'Organic Food', image: 'sugar.webp' },
  { name: 'Chia', price: 30, category: 'organic', subCategory: 'Organic Food', image: 'chia.jpg' },
  { name: 'Organic Ajwain', price: 30, category: 'organic', subCategory: 'Organic Food', image: 'ajwain.jpg' },
  { name: 'Organic Chana', price: 30, category: 'organic', subCategory: 'Organic Food', image: 'chana.webp' },
  { name: 'Toor Dal', price: 30, category: 'grocery', subCategory: 'Others', image: 'Toor Dal.webp' },
  { name: 'Mutton', price: 300, category: 'meatAndSeafood', subCategory: 'Mutton', image: 'Mutton.jpg' },
  { name: 'Chicken Legs', price: 90, category: 'meatAndSeafood', subCategory: 'Chicken', image: 'ChickenLegs.avif' },
  { name: 'Chicken Boneless', price: 90, category: 'meatAndSeafood', subCategory: 'Chicken', image: 'chickenboneless.avif' },
  { name: 'Fish', price: 70, category: 'meatAndSeafood', subCategory: 'Fish & Seafood', image: 'Fish.avif' },
];

const SearchPage = () => {
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState('vegetables'); 
  const [sortOption, setSortOption] = useState('');

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value);
    setMaxPrice(newValue);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const getFilteredAndSortedProducts = () => {
    let filteredProducts = selectedCategory === 'All'
      ? productData
      : productData.filter(product => product.category === selectedCategory);

    filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);

    if (sortOption === 'low-to-high') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-to-low') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  };

  const filteredAndSortedProducts = getFilteredAndSortedProducts();

  return (
    <div className="search-page">
      <a href="/">Home</a> <span><i className="fa fa-angle-right" aria-hidden="true"></i></span> <a href={`/${selectedCategory}`}>{selectedCategory}</a>
      <hr className="divider" />
      <div className="horizontal-dividers"></div>
      <div className="showing-products">
        <h2 className="product-count">Showing 1-04 out of {filteredAndSortedProducts.length} products for {selectedCategory}</h2>
        <div className="sort-by">
          <label htmlFor="sort-dropdown">Sort by: </label>
          <select id="sort-dropdown" className="sort-dropdown" value={sortOption} onChange={handleSortChange}>
            <option value="">Select</option>
            <option value="low-to-high">Price: low to high</option>
            <option value="high-to-low">Price: high to low</option>
          </select>
        </div>
        <div className="horizontal-dividers"></div>

        {/* Render cards */}
        <div className="card-containers">
          {filteredAndSortedProducts.map((product, index) => (
            <div className="cards" key={index}>
              <div className="image-containers">
                <img src={`../images/${product.image}`} alt={`Product ${index + 1}`} className="product-imgs"/>
                <button className="enquiry-buttons">Call for Enquiry</button>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">Rs. {product.price}.00</p>
              </div>
            </div>
          ))}
        </div>

        <div className="filter-section">
          <h2 className="filter-header">Filter Options</h2>
          <div className="search-box-container">
            <input type="text" className="search-box" placeholder="Enter keywords..." />
            <div className="search-icon"></div>
          </div>
          <h2 className="category-header">Category</h2>
          <hr className="category-divider" />
          <select className="category-dropdown" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="All">All</option>
            <option value="vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="dairy">Dairy products</option>
            <option value="organic">Organic Products</option>
            <option value="grocery">Grocery Items</option>
            <option value="meatAndSeafood">Meat & Seafood</option>
          </select>
          <h2 className="subcategory-header">Sub Category</h2>
          <hr className="subcategory-divider" />
          {selectedCategory !== 'All' && subcategories[selectedCategory].map((subcat, index) => (
            <div className="subcategory-option" key={index}>
              <input type="checkbox" id={`subcat${index}`} className="subcategory-checkbox" />
              <label htmlFor={`subcat${index}`}>{subcat}</label>
            </div>
          ))}
          <h2 className="price-header">Price Range</h2>
          <hr className="price-divider" />
          <input 
            type="range" 
            min="10" 
            max="1000" 
            value={maxPrice} 
            onChange={handleSliderChange} 
            className="price-slider" 
          />
          <p className="price-description">Rs. 10 - Rs. {maxPrice}</p>
          <button className="filter-button">Filter</button>
        </div>
       
        <div className="vertical-divider"></div>
      </div>
    </div>
  );
};

export default SearchPage;
