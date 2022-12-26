import styles from '../styles/Card.module.css'

interface CardProps {
    bgColor?: string,
    children?: any
}

export default function Card(props: CardProps) {

    console.log(props)
    return (
        <div 
        style={{backgroundColor: props.bgColor ?? "#fff" }}
        className={styles.card}>
            {props.children}
        </div>    
    )
}