import React from "react";
import styles from "./Hero.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--6", styles.heroFirst)}>
            <div className="main-text">
              <h1>
                Welcome to Monopole Docs <br />
              </h1>
              <span className="highlight">
                The first global solution matching investors and projects for
                Impact Leveraging Blockchain technology with full transparency
                and decentralization
              </span>
            </div>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStartedButton
              )}
              to="/docs/introduction"
            >
              Get Started
            </Link>
            <Link
              className={clsx(
                "button button--secondary button--lg",
                styles.getGithubButton
              )}
              to="https://github.com/Monopole-Network/"
            >
              <img
                className={styles.githubIcon}
                src={useBaseUrl("/img/github.svg")}
                alt="GitHub Logo"
              />{" "}
              <span className={styles.githubButtonText}>GitHub</span>
            </Link>
          </div>
          <div className="col col--6">
            <iframe
              src="https://my.spline.design/untitled-baae28ed7095dbb0e52d59d1a234678d/"
              frameborder="0"
              width="100%"
              height="500px"
            ></iframe>
          </div>
        </div>
      </div>
    </header>
  );
}
