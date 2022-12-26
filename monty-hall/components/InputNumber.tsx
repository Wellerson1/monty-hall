import styles from '../styles/InputNumber.module.css'


interface InputNumberProps {
    value: number,
    text: string,
    onChange: (n: number) => void
}

export default function InputNumber(props: InputNumberProps) {

    const decrementar = () => props.onChange(props.value - 1)
    const incrementar = () => props.onChange(props.value + 1)

    return(
        <div className={styles.inputNumber}>
            <div className={styles.text}>{props.text}</div>
            <div className={styles.number}>{props.value}</div>
        <div className={styles.botoes}>
            <button className={styles.btn} onClick={decrementar}>-</button>
            <button className={styles.btn} onClick={incrementar}>+</button>
        </div>
        </div>
    )
}