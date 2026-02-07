import '../styles/weatherApp.css';

export  function CityInput({city, onCityChange, onSearch}){
    return(
        <div className='input'>
            <input type="text" placeholder="Search" value={city} onChange={onCityChange}/>
            <button onClick={onSearch}>🔍︎</button>
        </div>
    )
}