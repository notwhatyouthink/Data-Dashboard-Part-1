import './App.css';
import { useEffect, useState } from 'react';

const App = () => {

  const [breweries, setBreweries] = useState([]);
  const [filteredBreweries, setFilteredBreweries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  useEffect(() => {
    const fetchBreweries = async () => {
      const response = await fetch(
        'https://api.openbrewerydb.org/v1/breweries?per_page=100'
      );
      const json = await response.json();
      setBreweries(json);
      setFilteredBreweries(json);
    };

    fetchBreweries().catch(console.error);
  }, []);

  const handleSearch = (searchValue) => {
    setSearchInput(searchValue);
    filterBreweries(searchValue, typeFilter);
  };

  const handleTypeFilter = (type) => {
    setTypeFilter(type);
    filterBreweries(searchInput, type);
  };

  const filterBreweries = (searchTerm, type) => {
    let filtered = breweries;

    if (searchTerm !== "") {
      filtered = filtered.filter((brewery) =>
        brewery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brewery.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brewery.state.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (type !== "all") {
      filtered = filtered.filter((brewery) => brewery.brewery_type === type);
    }

    setFilteredBreweries(filtered);
  };

  // Calculate summary statistics
  const totalBreweries = filteredBreweries.length;
  const microBreweries = filteredBreweries.filter(b => b.brewery_type === 'micro').length;
  const uniqueStates = [...new Set(filteredBreweries.map(b => b.state))].length;
  const brewpubs = filteredBreweries.filter(b => b.brewery_type === 'brewpub').length;

  return (
    <div className="App">
      <div className="header">
        <h1>🍺 Brewery Dashboard</h1>
        <p>Discover breweries across the United States</p>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h3>{totalBreweries}</h3>
          <p>Total Breweries</p>
        </div>
        <div className="stat-card">
          <h3>{microBreweries}</h3>
          <p>Micro Breweries</p>
        </div>
        <div className="stat-card">
          <h3>{uniqueStates}</h3>
          <p>States Covered</p>
        </div>
        <div className="stat-card">
          <h3>{brewpubs}</h3>
          <p>Brewpubs</p>
        </div>
      </div>

      <div className="filters-container">
        <input
          type="text"
          placeholder="Search by name, city, or state..."
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-bar"
        />
        <select
          value={typeFilter}
          onChange={(e) => handleTypeFilter(e.target.value)}
          className="type-filter"
        >
          <option value="all">All Types</option>
          <option value="micro">Micro</option>
          <option value="brewpub">Brewpub</option>
          <option value="regional">Regional</option>
          <option value="large">Large</option>
          <option value="planning">Planning</option>
          <option value="contract">Contract</option>
          <option value="proprietor">Proprietor</option>
        </select>
      </div>

      <div className="brewery-list">
        <h2>Breweries ({filteredBreweries.length})</h2>
        {filteredBreweries.length === 0 ? (
          <p>No breweries found matching your criteria.</p>
        ) : (
          <div className="brewery-grid">
            {filteredBreweries.map((brewery) => (
              <div key={brewery.id} className="brewery-card">
                <h3>{brewery.name}</h3>
                <p className="brewery-type">{brewery.brewery_type}</p>
                <p>📍 {brewery.city}, {brewery.state}</p>
                {brewery.street && <p>{brewery.street}</p>}
                {brewery.phone && <p>📞 {brewery.phone}</p>}
                {brewery.website_url && (
                  <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
                    Visit Website →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
