import React from "react";

function Footer() {
  return (
    // так мне рекоммендовал сделать предыдущий ревьюер на 10пр
    // чтобы дата менялась
    <footer className="footer">
      <p className="footer__copyright">
        &#169; {new Date().getFullYear()} Mesto Russia
      </p>
    </footer>
  );
}

export default Footer;
