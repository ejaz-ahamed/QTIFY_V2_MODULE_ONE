import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ data, type }) {
  const isAlbum = type === "album";
  const { image, title } = data;
  const count = isAlbum ? `${data.follows} Follows` : `${data.likes} Likes`;

  const card = (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={image} alt={title} loading="lazy" />
        <div className={styles.banner}>
          <Chip label={count} size="small" className={styles.chip} />
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <p>{title}</p>
      </div>
    </div>
  );

  if (isAlbum) {
    return (
      <Tooltip title={`${data.songs ? data.songs.length : 0} songs`} placement="top" arrow>
        {card}
      </Tooltip>
    );
  }

  return card;
}

export default Card;
