function Navbar() {
  const menuItems = [
    "Inicio",
    "Sobre nosotros",
    "Servicios",
    "Ahorro e inversión",
    "Contactanos",
  ];

  return (
    <div>
      <nav>
        <ul>
          {menuItems.map((item,idx) => (
            <li key={idx}>
              <a href="hola">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
