import './SearchBar.css'

function SearchBar({ search, setsearch}) {
    return(
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for flowers..."
                value={search}
                onChange={(e) => setsearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar