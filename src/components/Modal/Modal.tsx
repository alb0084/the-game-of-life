import ReactDom from "react-dom";
import React, { useEffect, useState } from "react";
import Button from "../ButtonAction/ButtonAction";
import { useContext } from "react";
import ResultsContext from "../../store/Result-context";
import Card from "../Card/Card";
import { modal } from "../../models/Modal";
import { NAME_CLICK, TYPE_BUTTON, TITLE_MODAL_BUTTON, H2_TITLE, MESSAGE_OVERLAY, SUGGESTION} from "../../helpers/Costants";
import styles2 from "../ButtonAction/ButtonAction.module.css";
import styles from "./Modal.module.css";
import { Transition } from "react-transition-group";

const Backdrop:React.FC<modal> = (props: any): JSX.Element => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay:React.FC<modal> = (props: any): JSX.Element => {
  const ctx: any = useContext(ResultsContext);
  const maxRound = ctx.round;
  const refreshPage = (): void => window.location.reload();
  const [modal,setModal] = useState(false);
  useEffect(()=>{
    ctx.gameOver && setModal(ctx.gameOver);
  },[ctx.gameOver])
  return (
    <>
      <Transition in={modal} timeout={200}>
        {state=>(
        <div style={{ opacity: state==='entered'? 1: 0, transition:'opacity 200ms linear' }}>
          <Card className={styles.modal}>
            <header className={styles.header}>
              <h2>{H2_TITLE}</h2>
            </header>
            <div className={styles.content}>
              <p>{MESSAGE_OVERLAY + ` ${maxRound}, ` + SUGGESTION}</p>
            </div>
            <footer className={styles.actions}>
              <Button
                type={TYPE_BUTTON}
                name={NAME_CLICK}
                value={TITLE_MODAL_BUTTON}
                styles={styles2["pure-material-button-contained"]}
                setValAction={refreshPage}
              ></Button>
            </footer>
          </Card>
        </div>
        )}
      </Transition>
    </>
  );
};

const Modal:React.FC<modal> = (props): JSX.Element => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onClose}
          nMaxIter={props.nMaxIter}
        />,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default React.memo(Modal);
