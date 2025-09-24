import "./Header.css";

export interface HeaderProps {
  logoSrc: string;
  menuItems: { label: string; href: string }[];
}

const Header = ({ logoSrc, menuItems }: HeaderProps) => {
  return (
    <header className="simple-ui-header">
      <div className="header-inner">
        <div className="header-logo">
          <img src={logoSrc} alt="logo" />
        </div>
        <nav className="header-nav">
          {menuItems.map((item, idx) => (
            <a key={idx} href={item.href} className="header-menu-item">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;