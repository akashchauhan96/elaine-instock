import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import error from "../../assets/icons/error-24px.svg";
import axios from "axios";
import { URL } from "../../utils/util";
import "./EditInventoryForm.scss";

export default function EditInventoryForm() {

  const { id } = useParams();

  // inventory name
  const [itemName, setItemName] = useState("");

  // inventory description
  const [description, setDescription] = useState("");

  // inventory category
  const [selectedCategory, setSelectedCategory] = useState("");

  // inventory quantity
  const [quantity, setQuantity] = useState(0);

  //
  const [selectedInventory, setSelectedInventory] = useState("");

  // 
  const [isValid, setIsValid] = useState(true);

  //
  const [inventoryData, setInventoryData] = useState(null);

  // in stock or out of stock
  const [checked, setChecked] = useState("Out of Stock");

  // 
  const [missingId, setMissingId] = useState(false);

  let inventoryList = [];

  // GET request to get existing inventory item information
  useEffect(() => {
    axios
      .get(`${URL}/inventory/${id}`)
      .then((resp) => {
        setInventoryData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const navigate = useNavigate();

  // PUT request to send edited inventory item information to backend
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const editInventory = {};
    if (
      !itemName ||
      !description ||
      (!isChecked("Out of Stock") && !quantity) ||
      (isChecked("In Stock") && isNaN(quantity)) ||
      !selectedInventory ||
      !selectedCategory
    ) {
      setIsValid(false);
      return;
    } else {
      if (e.target.status.value === "Out of Stock") {
        editInventory.quantity = 0;
      } else {
        editInventory.quantity = e.target.quantity.value;
      }
      editInventory.item_name = e.target.itemName.value;
      editInventory.description = e.target.description.value;
      editInventory.category = e.target.category.value;
      editInventory.status = e.target.status.value;

      editInventory.warehouse_id = e.target.warehouseId.value;
      setIsValid(true);

      axios
        .put(`${URL}/inventory`, editInventory)
        .then(() => {
          navigate(`/inventory`);
        })
        .catch((err) => {
          console.log(err.response.data);
          if (
            err.response.data ===
            "Warehouse_id value does not exist in the warehouses table"
          ) {
            setMissingId(true);
          }
        });
    }
  };

  const isChecked = (option) => {
    return checked === option;
  };

  const isSelected = (event) => {
    setChecked(event.target.value);
  };

  // if (inventoryData) {
  //   inventoryData.forEach((warehouse) => {
  //     inventoryList.push({
  //       id: warehouse.id,
  //       label: warehouse.warehouse_name,
  //       value: warehouse.id,
  //     });
  //   });

    return (
        <>
        <form className="form" onSubmit={handleOnSubmit}>
          <div className="form__sections">
            <div className="item-details">
              <h2 className="item-details__title">Item Details</h2>
              <div className="item-details__wrapper">
                <label className="item-details__label">Item Name</label>
                <input
                  type="text"
                  className={`item-details__input ${
                    !isValid && itemName === ""
                      ? "item-details__input--error"
                      : ""
                  }`}
                  name="itemName"
                  value={itemName}
                  placeholder="Item Name"
                  onChange={(e) => {
                    setItemName(e.target.value);
                  }}
                />
                {!isValid && itemName === "" ? (
                  <div className="item-details__error-state">
                    <img
                      src={error}
                      alt="Exclamation point icon to indicate when text field is empty"
                      className="item-details__error-icon"
                    />
                    <span className="item-details__error-command">
                      This field is required
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="item-details__wrapper">
                <label className="item-details__label">Description</label>
                <textarea
                  className={`item-details__text ${
                    !isValid && description === ""
                      ? "item-details__text--error"
                      : ""
                  }`}
                  name="description"
                  value={description}
                  placeholder="Please enter a brief item description..."
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                {!isValid && description === "" ? (
                  <div className="item-details__error-state">
                    <img
                      src={error}
                      alt="Exclamation point icon to indicate when text field is empty"
                      className="item-details__error-icon"
                    />
                    <span className="item-details__error-command">
                      This field is required
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="item-details__wrapper">
                <label className="item-details__label">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`item-details__dropdown-menu ${
                    !isValid && selectedCategory === ""
                      ? "item-details__dropdown-menu--error"
                      : ""
                  }`}
                  name="category"
                >
                  <option
                    hidden
                    className="item-details__dropdown-item"
                    label="Please Select"
                    value="none"
                  ></option>
                  <option
                    className="item-details__dropdown-item"
                    label="Accessories"
                    value="accessories"
                  ></option>
                  <option
                    className="item-details__dropdown-item"
                    label="Electronics"
                    value="electronics"
                  ></option>
                  <option
                    className="item-details__dropdown-item"
                    label="Gear"
                    value="gear"
                  ></option>
                  <option
                    className="item-details__dropdown-item"
                    label="Health"
                    value="health"
                  ></option>
                  <option
                    className="item-details__dropdown-item"
                    label="Apparel"
                    value="apparel"
                  ></option>
                </select>
                {!isValid && selectedCategory === "" ? (
                  <div className="item-details__error-state">
                    <img
                      src={error}
                      alt="Exclamation point icon to indicate when text field is empty"
                      className="item-details__error-icon"
                    />
                    <span className="item-details__error-command">
                      This field is required
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="item-availability">
              <h2 className="item-availability__title">Item Availability</h2>
              <div className="item-availability__wrapper">
                <label className="item-availability__label">Status</label>
                <div className="item-availability__status-options">
                  <div className="item-availability__stock-wrapper">
                    <label className="item-availability__radio-label">
                      <input
                        className="item-availability__radio-button"
                        type="radio"
                        name="status"
                        value="In Stock"
                        checked={isChecked("In Stock")}
                        onChange={isSelected}
                      />
                      In stock
                    </label>
                  </div>
                  <div className="item-availability__stock-wrapper item-availability__stock-wrapper--flex-size">
                    <label className="item-availability__radio-label">
                      <input
                        className="item-availability__radio-button"
                        type="radio"
                        name="status"
                        value="Out of Stock"
                        checked={isChecked("Out of Stock")}
                        onChange={isSelected}
                      />
                      Out of stock
                    </label>
                  </div>
                </div>
              </div>
              {isChecked("In Stock") ? (
                <div className="item-availability__wrapper">
                  <label className="item-availability__label">Quantity</label>
                  <input
                    type="text"
                    className={`item-availability__input ${
                      !isValid && !quantity
                        ? "item-availability__input--error"
                        : ""
                    }`}
                    name="quantity"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />
                  {(!isValid && isNaN(quantity)) ||
                  (!isValid && !quantity) ||
                  (!isValid && quantity.charAt(0) === "0") ? (
                    <div className="item-availability__error-state">
                      <img
                        src={error}
                        alt="Exclamation point icon to indicate when text field is empty"
                        className="item-availability__error-icon"
                      />
                      <span className="item-availability__error-command">
                        This field is required
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
              <div className="item-availability__wrapper">
                <label className="item-availability__label">Warehouse</label>
                <select
                  value={selectedInventory}
                  className={`item-availability__dropdown-menu ${
                    !isValid && selectedInventory === ""
                      ? "item-availability__dropdown-menu--error"
                      : ""
                  }`}
                  onChange={(e) => setSelectedInventory(e.target.value)}
                  name="warehouseId"
                >
                  <option
                    hidden
                    className="item-details__dropdown-item"
                    label="Please Select"
                    value="none"
                  ></option>
                  {inventoryList.map((warehouse) => (
                    <option
                      className="item-availability__dropdown-item"
                      value={warehouse.value.toLowerCase()}
                      key={warehouse.id}
                      id={warehouse.id}
                    >
                      {warehouse.label}
                    </option>
                  ))}
                </select>
                {!isValid && selectedInventory === "" ? (
                  <div className="item-availability__error-state">
                    <img
                      src={error}
                      alt="Exclamation point icon to indicate when text field is empty"
                      className="item-availability__error-icon"
                    />
                    <span className="item-availability__error-command">
                      This field is required
                    </span>
                  </div>
                ) : (
                  ""
                )}
                {missingId && (
                  <div className="item-availability__error-state">
                    <img
                      src={error}
                      alt="Exclamation point icon to indicate when text field is empty"
                      className="item-availability__error-icon"
                    />
                    <span className="item-availability__error-command">
                      Warehouse does not exist in the database. Please choose a
                      different warehouse
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="buttons">
            <button
              className="buttons__cancel"
              onClick={() => navigate("/inventory")}
            >
              Cancel
            </button>
            <button className="buttons__add-item" type="submit">
              + Add Item
            </button>
          </div>
        </form>
      </>
    );
//   } else {
//     return null;
//   }
}
