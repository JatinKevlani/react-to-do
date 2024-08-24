import Brand from "./Brand";

function Navbar() {
  return (
    <>
      <Brand></Brand>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#" target="_blank">About</a></li>
        <li><a href="#" target="_blank">Contact</a></li>
      </ul>
    </>
  );
}

export default Navbar;