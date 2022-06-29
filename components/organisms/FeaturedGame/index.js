import { useState, useEffect, useCallback } from "react";
import { getAPIFeaturedGame } from "../../../services/playerService";
import GameItem from "../../molecules/GameItem";

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  const getFeaturedGame = useCallback(async () => {
    const result = await getAPIFeaturedGame();
    const { data } = result;
    setGameList(data);
  }, [getAPIFeaturedGame]);

  useEffect(() => {
    getFeaturedGame();
  }, []);

  const IMAGE_API = process.env.NEXT_PUBLIC_IMAGE;

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item) => (
            <GameItem
              id={item._id}
              key={item._id}
              thumbnail={`${IMAGE_API}/${item.thumbnail}`}
              title={item.name}
              category={item.category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
