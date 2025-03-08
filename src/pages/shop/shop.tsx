import React, { useState, useMemo } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { Search } from "../../components/Search";
import "./shop.css";

export const Shop: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [category, setCategory] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.productName.toLowerCase()
        .includes(searchTerm.toLowerCase());

      let matchesPrice = true;
      if (priceRange !== "all") {
        if (priceRange === "1001+") {
          matchesPrice = product.price >= 1001;
        } else {
          const [min, max] = priceRange.split("-").map(Number);
          matchesPrice = product.price >= min && product.price <= max;
        }
      }

      let matchesCategory = true;
      if (category !== "all") {
        const categoryMapping: Record<string, string> = {
          'phones': 'phone',
          'laptops': 'laptop',
          'gaming': 'gaming',
          'accessories': 'accessories',
          'cameras': 'camera',
          'tvs': 'tv',
          'wearables': 'wearable'
        };
        matchesCategory = product.category === categoryMapping[category];
      }

      return matchesSearch && matchesPrice && matchesCategory;
    });
  }, [searchTerm, priceRange, category]);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Tech Shop</h1>
      </div>

      <Search
        onSearch={setSearchTerm}
        onFilterPrice={setPriceRange}
        onFilterCategory={setCategory}
      />

      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-results">
          No products found matching your criteria
        </div>
      )}
    </div>
  );
}; 