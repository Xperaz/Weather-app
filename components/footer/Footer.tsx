import React from "react";
import { StyledFooter } from "./styled";
import Link from "next/link";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        © 2024 Weather App, Made with ❤️ by{" "}
        <Link
          href="https://www.azedineouhadou.tech/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Azedine Ouhadou
        </Link>
      </p>
    </StyledFooter>
  );
};

export default Footer;
