import React, { useState, useCallback } from 'react';
import './Search.css';

interface SearchProps {
  onSearch: (value: string) => void;
  onFilterPrice: (value: string) => void;
  onFilterCategory: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch, onFilterPrice, onFilterCategory }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [category, setCategory] = useState<string>('all');

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  }, [onSearch]);

  const handlePriceFilter = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setPriceRange(value);
    onFilterPrice(value);
  }, [onFilterPrice]);

  const handleCategoryFilter = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
    onFilterCategory(value);
  }, [onFilterCategory]);

  return (
    <div className="search-container">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      <div className="filters">
        <select value={priceRange} onChange={handlePriceFilter}>
          <option value="all">All Prices</option>
          <option value="0-500">$0 - $500</option>
          <option value="501-1000">$501 - $1000</option>
          <option value="1001+">$1001 and above</option>
        </select>

        <select value={category} onChange={handleCategoryFilter}>
          <option value="all">All Categories</option>
          <option value="phones">Phones</option>
          <option value="laptops">Laptops</option>
          <option value="gaming">Gaming</option>
          <option value="accessories">Accessories</option>
          <option value="cameras">Cameras</option>
          <option value="tvs">TVs</option>
          <option value="wearables">Wearables</option>
        </select>
      </div>
    </div>
  );
}; 