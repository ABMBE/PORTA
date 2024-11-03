import styles from "@/styles/card.module.scss";
const Card = ({ name, description, photo}: any) => {
    return (
        <div className={styles.profileCard}>
        <div className={styles.header}>{name}</div>
        <div className={styles.description}>{description}</div>
        <img src={photo} alt={`${name}'s photo`} className={styles.photo} />
        </div>
    );
};

export default Card;