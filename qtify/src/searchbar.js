// SearchBar.jsx
import React from 'react';
// import SearchIcon from './assets/search-icon.svg'; // Import your search icon
import styles from './styles.css'; // Import CSS module for SearchBar styling

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search a song of your choice" className={styles.input} />
      {/* <button className={styles.button}><img src={SearchIcon} alt="Search Icon" className={styles.icon} /></button> */}
    </div>
  );
};

export default SearchBar;
