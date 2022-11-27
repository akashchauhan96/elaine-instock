import "./DeleteInventory.scss";
import CloseIcon from "../../assets/icons/close-24px.svg";
import axios from "axios";
import { URL } from '../../utils/util';

function DeleteInventory({ setOpenModal, inventory, setIsDeleted, isDeleted }) {

  const handleDeleteWarehouse = (event) => {
    axios
      .delete(`${URL}/inventory/${inventory.id}`)
      .then(() => {
        setIsDeleted(!isDeleted);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="deleteInventory__darkBG deleteInventory__centered "
      onClick={() => setOpenModal(false)}
    >
      <div>
        <div className="deleteInventory">
          <div className="deleteInventory__container">
            <div className="deleteInventory__icon-wrapper">
              <img
                src={CloseIcon}
                alt="close icon"
                className="deleteInventory__icon"
                onClick={() => {
                  setOpenModal(false);
                }}
              />
            </div>
            <div className="deleteInventory__text-wrapper">
              <h1 className="deleteInventory__title">
                Delete {inventory.item_name} inventory item?
              </h1>
              <p className="deleteInventory__body">
                Please confirm that you'd like to delete the{" "}
                {inventory.item_name} from the inventory list. You
                won't be able to undo this action.
              </p>
            </div>
            <div className="deleteInventory__button-wrapper">
              <button
                className="deleteInventory__button deleteInventory__button-cancel"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
              <button
                className="deleteInventory__button deleteInventory__button-delete"
                onClick={handleDeleteWarehouse}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteInventory;