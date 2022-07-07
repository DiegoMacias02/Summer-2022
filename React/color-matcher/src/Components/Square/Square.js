function Square({ colorVal }) {
  return (
    <section className="square"
      style={{ backgroundColor: colorVal }}
    >
      <p>{colorVal ? colorVal : "Empty Value"}</p>
    </section>
  );
}
Square.defaultProps = {
  colorVal: "Empty Color Value",
};
export default Square;
