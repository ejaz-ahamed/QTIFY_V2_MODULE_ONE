import React, { useMemo, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

const tabSx = {
  color: "var(--color-white)",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  textTransform: "none",
  minWidth: 0,
  "&.Mui-selected": { color: "var(--color-white)" },
};

function Section({ title, data, type, filters }) {
  const [showAll, setShowAll] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const isSongs = type === "song";

  const items = useMemo(
    () =>
      isSongs && selectedFilter !== "all"
        ? data.filter((song) => song.genre && song.genre.key === selectedFilter)
        : data,
    [data, isSongs, selectedFilter]
  );

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {!isSongs && (
          <button
            type="button"
            className={styles.toggleText}
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {isSongs && filters && filters.length > 0 && (
        <Tabs
          value={selectedFilter}
          onChange={(e, value) => setSelectedFilter(value)}
          className={styles.tabs}
          TabIndicatorProps={{ style: { backgroundColor: "var(--color-primary)" } }}
        >
          <Tab value="all" label="All" sx={tabSx} />
          {filters.map((filter) => (
            <Tab key={filter.key} value={filter.key} label={filter.label} sx={tabSx} />
          ))}
        </Tabs>
      )}

      {data.length === 0 ? (
        <p className={styles.loading}>Loading...</p>
      ) : showAll ? (
        <div className={styles.grid}>
          {items.map((item) => (
            <Card key={item.id} data={item} type={type} />
          ))}
        </div>
      ) : (
        <Carousel
          data={items}
          renderComponent={(item) => <Card data={item} type={type} />}
        />
      )}
    </section>
  );
}

export default Section;
