import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import classNames from "classnames";

const Modal = ({isOpen, children}) => {
    const className = classNames("modal", {
        fade: isOpen,
        show: isOpen,
        "d-block": isOpen,
        "d-none": !isOpen,
    })
    return <div className={className} role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                {children}
            </div>
        </div>
    </div>;
};
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
export default Modal;