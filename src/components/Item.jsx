import PropTypes from "prop-types";

const Item = ({task, onRemove}) => {
    return <div>
        <div className="row">
            <div className="col-auto">
                <button onClick={() => onRemove(task)} type="button" className="btn btn-primary btn-sm">-</button>
            </div>
            <div className="col">{task.description}</div>
        </div>
        <hr></hr>
    </div>;
};

Item.propTypes = {
    task: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default Item;