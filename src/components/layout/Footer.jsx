import React from "react";
import { Link } from "react-router-dom";

import { SubscribeForm } from "../Main";
import { StarRating } from "../elements/ui";
import {
  LogoIcon,
  MobileIcon,
  MailIcon,
  LocationIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedInIcon,
  ArrowTopIcon,
} from "../elements/icons";

import { types } from "../../data/types";

import style from "../../styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        {/* Footer Top */}
        <div className={style.top}>
          <LogoIcon className={style.logo} />
          <p className={style.description}>
            <span className={style.best}>the best</span> real estate in Spain
          </p>
        </div>
        {/* Footer Middle */}
        <div className={style.middle}>
          <ul className={style.menu}>
            <li className={style.item}>
              <Link to="/" className={style.link}>
                All cities
              </Link>
            </li>
            <li className={style.item}>
              <Link to="/" className={style.link}>
                {" "}
                Blog
              </Link>
            </li>
            <li className={style.item}>
              <Link to="/" className={style.link}>
                Video
              </Link>
            </li>
            <li className={style.item}>
              <Link to="/" className={style.link}>
                {" "}
                Contacts
              </Link>
            </li>
          </ul>
          <div className={style.inner}>
            {/* Contacts */}
            <div className={(style.contacts, style.block)}>
              <h4 className={style.title}>Contacts:</h4>
              <div className={style.space}>
                <ul className={style.contactsList}>
                  <li className={style.contactsItem}>
                    <a className={style.contactsLink} href="tel:+34(965)020784">
                      <MobileIcon />
                      <span>+34 (965) 020 - 784</span>
                    </a>
                  </li>
                  <li className={style.contactsItem}>
                    <a
                      className={style.contactsLink}
                      href="mailto:sales@wtgspain.com"
                    >
                      <MailIcon className={style.mail} />
                      <span>sales@wtgspain.com</span>
                    </a>
                  </li>

                  <li className={style.contactsItem}>
                    <span className={style.contactsLink}>
                      <LocationIcon />
                      <p>
                        Centro Comercial «Playa Flamenca» <br /> C/ Niagara, 63
                        Local 60/PB, first floor, 03189 - Orihuela Costa
                        (Alicante), Spain
                      </p>
                    </span>
                  </li>
                </ul>
                {/* Rating */}
                <div className={style.stars}>
                  <span className>Reating 4.9/5:</span>
                  <span className={style.starsIcons}>
                    {" "}
                    <StarRating />
                  </span>
                  <span>820 votes</span>
                </div>
              </div>
            </div>
            {/* Type */}
            <div className={(style.types, style.block)}>
              <h4 className={style.title}>Type:</h4>
              <ul className={style.typesList}>
                {types.map((type) => (
                  <li className={style.typesItem} key={type.id}>
                    <Link className={style.typesLink} to={`/${type.name}`}>
                      {type.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Follow */}
            <div className={(style.follow, style.block)}>
              <h4 className={style.title}>Follow us:</h4>
              <div className={style.space}>
                <ul className={style.social}>
                  <li className={style.socialItem}>
                    <a className={style.socialLink} href="#">
                      <FacebookIcon />
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li className={style.socialItem}>
                    <a className={style.socialLink} href="#">
                      <YoutubeIcon />
                      <span>Youtube</span>
                    </a>
                  </li>
                  <li className={style.socialItem}>
                    <a className={style.socialLink} href="#">
                      <LinkedInIcon />
                      <span>Linkedin</span>
                    </a>
                  </li>
                  <li className={style.socialItem}>
                    <a className={style.socialLink} href="#">
                      <InstagramIcon />
                      <span>Instagram</span>
                    </a>
                  </li>
                </ul>
                {/* Form */}
                <div className={style.formTitle}>
                  <h5>Subscribe to new objects</h5>
                  <a href="#">?</a>
                </div>
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className={style.bottom}>
          <p>
            The company "WTG Spain" specializes in the investment and sale of
            real estate in Spain, and the provision of legal and consulting
            services. All rights reserved. "WTG Spain" - The Best Real Estate in
            Spain. © Copyright 2007 - 2020.
          </p>
        </div>
      </div>
      <div className={style.arrow}>
        <ArrowTopIcon />
      </div>
    </footer>
  );
};

export default Footer;
