const Header = ({toggle, children}) => {
    return <div className="modal-header">
        <div className="modal-title">{children}</div>
        <button onClick={toggle} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>
    </div>;
};

export default Header;