import React from "react";

function Footer({ loggedIn }) {
  return (
    <footer className={loggedIn ? "footer" : "footer_invisible"}>
      <p className="footer__copyright">
        &#169; {new Date().getFullYear()} Mesto Russia
      </p>
    </footer>
  );
}

export default Footer;
