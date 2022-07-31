import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import { FaYelp } from '@react-icons/all-files/fa/FaYelp';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr 25rem;
  gap: 2rem;
  ul {
    padding-left: 0;
  }
  li {
    list-style-type: none;
    line-height: 1.5;
  }
`;
const HoursWrapper = styled.div`
  span {
    border-bottom: 1px solid red;
    font-weight: 400;
  }
`;
const SocialWrapper = styled.ul`
  display: flex;
  text-decoration: none;
  li {
    color: red;
    width: 50px;
    list-style-type: none;
  }
`;
export default function Footer() {
  return (
    <footer>
      <p className="center">
        Scrumpy's Cider Bar &copy; {new Date().getFullYear()}
      </p>
      <FooterWrapper>
        <StaticImage
          className="lp"
          src="../assets/images/scrumpy-logo.jpeg"
          alt="Scrumpys Logo"
          width={200}
        />
        <HoursWrapper>
          <h2 className="mark">Hours</h2>
          <p>
            Monday &amp; Tuesday <span className="tilt">Closed</span>
          </p>
          <p>
            Wednesday - Saturday <span className="tilt">12pm - 10pm</span>
          </p>
          <p>
            Sunday <span className="tilt">12pm - 7pm</span>
          </p>

          <SocialWrapper>
            <li>
              <a
                href="https://www.yelp.com/biz/scrumpys-fort-collins-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYelp color="#bf0515" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/scrumpyshardciderbar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram color="#bf0515" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ScrumpysHardCiderBar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF color="#bf0515" />
              </a>
            </li>
          </SocialWrapper>
        </HoursWrapper>
        <div>
          <p>215 N College Ave </p>
          <p>Fort Collins, CO 80524</p>
          <p>(970)682-1944</p>
          <ul>
            <li>
              <a
                href="https://app.upserve.com/s/scrumpys-fort-collins?preview_token=b5Bf0JQ-flHzoAj9rrq89A"
                target="_blank"
                rel="noopener noreferrer"
              >
                Online Menu
              </a>
            </li>
            <li>
              <a
                href="https://www.noshdelivery.co/?utm_campaign=Brand&utm_source=google&utm_medium=ppc&utm_term=%2Bnoco%20%2Bnosh&utm_content=2985075xCj0KCQiAjKqABhDLARIsABbJrGncPYdJJhsUZzczBY8Se08VOP53KBbxUxdB6nxRjk64d11siEdTzg0aAlfZEALw_wcB"
                target="_blank"
                rel="noopener noreferrer"
              >
                NoCoNosh
              </a>
            </li>
            <li>
              <a
                href="https://www.doordash.com/en-CA/store/scrumpy's-fort-collins-1052012/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DoorDash
              </a>
            </li>
            <li>
              <a
                href="https://drizly.com/cider/summit-blueberry-lavender-cider/p95272?variant=208827"
                target="_blank"
                rel="noopener noreferrer"
              >
                Drizly
              </a>
            </li>
          </ul>
        </div>
      </FooterWrapper>
    </footer>
  );
}
