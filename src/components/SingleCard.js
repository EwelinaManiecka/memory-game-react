import css from "./SingleCard.module.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={css.card}>
      <div className={flipped ? css.flipped : ""}>
        <img className={css.front} src={card.src} alt="card front" />
        <img
          className={css.back}
          src="./img/purple-wallpaper-7267076.jpg"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
