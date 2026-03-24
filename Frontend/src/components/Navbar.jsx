// import { useState } from "react";
// import MenuDrawer from "./MenuDrawer";
// import LoginModal from "../pages/LoginModal";
// import styles from "./Navbar.module.css";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
//       <nav className="my-navbar">
//         <h2 className="brand-logo">Wellbeing</h2>
//         <button className="menu-btn" onClick={() => setIsOpen(true)}>
//           ☰
//         </button>
//       </nav>

//       {/* Drawer - onLoginClick pass karo */}
//       <MenuDrawer
//         isOpen={isOpen}
//         setIsOpen={setIsOpen}
//         onLoginClick={() => setShowLogin(true)}
//       />

//       {/* Login Modal */}
//       {showLogin && (
//         <LoginModal
//           onClose={() => setShowLogin(false)}
//           onSuccess={() => setShowLogin(false)}
//         />
//       )}
//     </>
//   );
// }

// export default Navbar;

import { useState, useEffect } from "react";
import MenuDrawer from "./MenuDrawer";
import LoginModal from "../pages/LoginModal";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(`.${styles.navbar}`);
    const handleScroll = () => {
      nav.classList.toggle(styles.scrolled, window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <h2 className={styles.brandLogo}>Wellbeing</h2>
        <button className={styles.menuBtn} onClick={() => setIsOpen(true)}>
          ☰
        </button>
      </nav>

      <MenuDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onLoginClick={() => setShowLogin(true)}
      />

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSuccess={() => setShowLogin(false)}
        />
      )}
    </>
  );
}

export default Navbar;