import "./DeleteWH.scss";
import CloseIcon from "../../assets/icons/close-24px.svg";
import { useNavigate } from "react-router-dom";

function DeleteWH() {
  const navigate = useNavigate();
  return (
    <div className="delete">
      <div className="delete__container">
        <div className="delete__icon-wrapper">
          <img
            src={CloseIcon}
            alt="close icon"
            className="delete__icon"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="delete__text-wrapper">
          <h1 className="delete__title">Delete Washington warehouse?</h1>
          <p classname="delete__body">
            Please confirm that you'd like to delete the Washington from the
            list of warehouses. You won't be able to undo this action.
          </p>
        </div>
        <div className="delete__button-wrapper">
          <button
            className="delete__button delete__button-cancel"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button className="delete__button delete__button-delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteWH;
