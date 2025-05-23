export function AnimalList () {
  
const animalInfos = [ {type: 'Malayan Tiger', count: 787}, 
                      {type: 'Mountain Gorilla', count: 212}, 
                      {type: 'Fin Whale', count: 28} ]



  return (
    <table className="animal-table">
      <thead>
        <tr>
          <th colSpan="3">Rare Animals</th>
        </tr>
      </thead>
      <tbody>
        {animalInfos.map((animal, idx) => (
          <tr key={idx}>
            <td>{animal.type}</td>
            <td>{animal.count}</td>
            <td>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(animal.type)}`}
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Search
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}





  
