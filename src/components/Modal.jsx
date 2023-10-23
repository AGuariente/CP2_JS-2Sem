
import styles from "./Modal.module.css";

export default function Modal(props) {
  if (props.open) {
    return( 
    <div className={styles.container}>
        <h1>Modal</h1>
        <button onClick={()=> props.setOpen(false)}>CLOSE-MODAL</button>
    </div>
    )
  }
}
