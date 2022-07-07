function Textbox({ colorVal, setColorVal }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add color Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add Color Name"
        required
        value={colorVal}
        onChange = {(e)=> setColorVal(e.target.value)}/>
    </form>
  );
}

export default Textbox;
