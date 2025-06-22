/*codigo para el boton tipo hamburguesa en dispositivos moviles */

<nav>
  <input type="checkbox" id="toggle">
  <label for="toggle" class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </label>
  <ul class="menu">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Acerca de</a></li>
    <li><a href="#">Servicios</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>

.hamburger {
  display: block;
  position: relative;
  z-index: 1;
  user-select: none;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 10px;
}

.hamburger span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #000;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 0px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
              background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
              opacity 0.55s ease;
}

.hamburger:focus {
  outline: none;
}

#toggle {
  display: none;
}

#toggle:checked ~ .menu {
  display: block;
}

#toggle:checked ~ .hamburger span:nth-child(1) {
  transform: rotate(45deg) translate(0px, -1px);
}

#toggle:checked ~ .hamburger span:nth-child(2) {
  opacity: 0;
}

#toggle:checked ~ .hamburger span:nth-child(3) {
  transform: rotate(-45deg) translate(0px, 1px);
}

.menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #f9f9f9;
  padding: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.menu li {
  list-style: none;
  margin-bottom: 10px;
}

.menu a {
  display: block;
  padding: 10px;
  color: #000;
  text-decoration: none;
}

.menu a:hover {
  background-color: #ddd;
}