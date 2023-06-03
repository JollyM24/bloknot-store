function Sort() {
  return (
    <div className="sort">
      <div className="sort__label">
        <b>Sort by:</b>
        <span>Popularity</span>
      </div>
      <div className="sort__popup">
        <ul>
          <li className="active">Popularity</li>
          <li>Price</li>
          <li>Alphabet</li>
        </ul>
      </div>
    </div>
  );
}

export default Sort;
