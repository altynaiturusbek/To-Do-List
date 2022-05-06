import reactDom from 'react-dom';
import  Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.css'


const Overlay = props=>{
    return <div className={styles.backdrop} onClick={props.onConfirm}/>;
    
}

const ModalOverlay =  (props)=>{
    return(
        <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
         </div>
         <footer className={styles.actions}>
             <Button onClick={props.onConfirm}>Okay</Button>
         </footer>

    </Card>
    );

}

const ErrorModal = props=>{
    return (
        <>
        {reactDom.createPortal( <Overlay onClick={props.onConfirm}/>, 
        document.getElementById('overlay'))};
        {reactDom.createPortal(<ModalOverlay title ={props.title}
         message={props.message} onConfirm={props.onConfirm}/>,
         document.getElementById('modal-overlay'))}
       
        
       
        </>
    )
        
    }
export default ErrorModal;