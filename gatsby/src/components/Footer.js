import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p className="center">
        &copy; Scrumpy's Cider Bar {new Date().getFullYear()}
      </p>
      <StaticImage
        className="lp"
        src="../assets/images/scrumpy-logo.jpeg"
        alt="Scrumpys Logo"
        width={200}
      />
    </footer>
  );
}
