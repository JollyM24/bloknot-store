function NoteBlock() {
  return (
    <div className="note-block">
      <p>image</p>

      <h4 className="note-block__title">Note #1</h4>

      <div className="note-block__selector">
        <ul>
          <li className="active">Thin pages</li>
          <li>dense pages</li>
        </ul>
        <ul>
          <li className="active">S</li>
          <li>M</li>
          <li>L</li>
        </ul>
      </div>

      <div className="note-block__bottom">
        <div className="note-block__price">300 rub.</div>
        <div className="button button--outline button--add">
          <span>+ Add</span>
          <i>n</i>
        </div>
      </div>
    </div>
  );
}

export default NoteBlock;
