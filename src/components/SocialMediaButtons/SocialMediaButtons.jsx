import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import Styles from "./SocialMediaButtons.module.scss";

export const SocialMediaButtons = () => (
  <div className={Styles.container}>
    <div className={Styles.icons}>
      <a href="#">
        <div className={Styles.layer}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className={Styles.fab}>
            <FaFacebookF className={Styles.fa} />
          </span>
        </div>
        <span className={Styles.text}>Facebook</span>
      </a>
      <a href="#">
        <div className={Styles.layer}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className={Styles.fab}>
            <FaTwitter className={Styles.fa} />
          </span>
        </div>
        <span className={Styles.text}>Twitter</span>
      </a>
      <a href="#">
        <div className={Styles.layer}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className={Styles.fab}>
            <FaInstagram className={Styles.fa} />
          </span>
        </div>
        <span className={Styles.text}>Instagram</span>
      </a>
      <a href="#">
        <div className={Styles.layer}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className={Styles.fab}>
            <FaLinkedinIn className={Styles.fa} />
          </span>
        </div>
        <span className={Styles.text}>Linkedin</span>
      </a>
      <a href="#">
        <div className={Styles.layer}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className={Styles.fab}>
            <FaYoutube className={Styles.fa} />
          </span>
        </div>
        <span className={Styles.text}>YouTube</span>
      </a>
    </div>
  </div>
);
