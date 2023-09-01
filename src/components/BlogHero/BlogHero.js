import React from "react";
import { format } from "date-fns";
import clsx from "clsx";

import styles from "./BlogHero.module.css";

function BlogHero({ title, publishedOn, headings, className, ...delegated }) {
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");
  const showTOC = headings?.length > 0;

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <div
        className={styles.content}
        style={{ paddingBottom: showTOC ? "48px" : "64px" }}
      >
        <h1>{title}</h1>
        <p>
          Published on <time dateTime={publishedOn}>{humanizedDate}</time>
        </p>
      </div>
    </header>
  );
}

export default BlogHero;
