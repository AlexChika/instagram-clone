const SearchResults = ({ show }) => {
  return (
    <div
      className={`absolute top-[120%] left-[0] bg-white text-black w-[20rem] h-96 p-1 z-[1] shadow rounded-md ${
        show ? "block" : "hidden"
      }`}
    >
      <ul>
        <li className="mb-3">hello</li>
        <li className="mb-3">hello</li>
        <li className="mb-3">hello</li>
        <li className="mb-3">hello</li>
      </ul>
    </div>
  );
};

export default SearchResults;

// const
