import styles from "./Section.module.css"

export default function Section({titulo, card, imagem, subTitulo, peso}){
    return(
        <div>
            <h1 className={styles.titulo}>{titulo}</h1>
            <div className={styles.card}>{card}</div>
            <div className={styles.divisona}>
                <div className={styles.subDiv}>
                    <img src="praticaDad/pratica/src/assets/meat-its-raw-state-isolated-transparent-background_191095-20207-removebg-preview.png" alt="" />
                </div>
                <div className={styles.subDiv}>
                    <img src="praticaDad/pratica/src/assets/meat-its-raw-state-isolated-transparent-background_191095-20207-removebg-preview.png" alt="" />
                </div>
                <div className={styles.subDiv}>
                    <img src="praticaDad/pratica/src/assets/meat-its-raw-state-isolated-transparent-background_191095-20207-removebg-preview.png" alt="" />
                </div>
            </div>
            
        </div>
    )
}