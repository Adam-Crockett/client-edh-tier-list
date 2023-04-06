import { CardDetailsProps } from '../../interfaces';
import styles from './CardDetails.module.css';
export const CardDetails = ({ hoveredCard }: CardDetailsProps) => {
  if (hoveredCard[0] === undefined) {
    return <div></div>;
  } else {
    const data = hoveredCard[0];
    let cardImage = '';
    if (data?.image_uris) {
      cardImage = data.image_uris.border_crop;
    } else if (data?.card_faces) {
      const cardFace =
        !hoveredCard[1] && hoveredCard[1] === -1 ? 0 : hoveredCard[1];
      cardImage = data.card_faces[cardFace]?.image_uris.border_crop;
    }

    return (
      <div className={styles.container}>
        <img className={styles.detailsImage} src={cardImage} />
      </div>
    );
  }
};
