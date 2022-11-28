import { Link, useNavigate } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import "./NewInventory.scss";
import error from "../../assets/icons/error-24px.svg";
import axios from "axios";
import { URL } from "../../utils/util";

export default function NewWarehouse() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [warehouseData, setWarehouseData] = useState(null);
  const [checked, setChecked] = useState("Out of Stock");
  const [missingId, setMissingId] = useState(false);

  let warehouseList = [];

  useEffect(() => {
    axios
      .get(`${URL}/warehouse`)
      .then((resp) => {
        setWarehouseData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newInventory = {};
    if (
      !itemName ||
      !description ||
      (!isChecked("Out of Stock") && !quantity) ||
      (isChecked("In Stock") && isNaN(quantity)) ||
      !selectedWarehouse ||
      !selectedCategory
    ) {
      setIsValid(false);
      return;
    } else {
      if (e.target.status.value === "Out of Stock") {
        newInventory.quantity = 0;
      } else {
        newInventory.quantity = e.target.quantity.value;
      }
      newInventory.item_name = e.target.itemName.value;
      newInventory.description = e.target.description.value;
      newInventory.category = e.target.category.value;
      newInventory.status = e.target.status.value;

      newInventory.warehouse_id = e.target.warehouseId.value;
      setIsValid(true);

      axios
        .post(`${URL}/inventory`, newInventory)
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

  if (warehouseData) {
    warehouseData.forEach((warehouse) => {
      warehouseList.push({
        id: warehouse.id,
        label: warehouse.warehouse_name,
        value: warehouse.id,
      });
    });

    return (
      <>
        <div className="new-inventory__title-wrapper">
          <Link to="/" className="new-inventory__back-link">
            <img
              className="new-inventory__back-button"
              src={arrowBack}
              alt="Arrow to direct user to main warehouse page"
            />
          </Link>
          <h1 className="new-inventory__title">Add New Inventory Item</h1>
        </div>
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
                    value="Accessories"
                  ></option>
                  <option
                    className="item-details__dropdown-item"
                    label="Electronics"
                    value="Electronics"
                  ></option>
                  <option
                    className="item-details__dropdown-item"
                    label="Gear"
                    value="Gear"
                  ></option>
                  <option
                    className="item-details__dropdown-item"
                    label="Health"
                    value="Health"
                  ></option>
                  <option
                    className="item-details__dropdown-item"
                    label="Apparel"
                    value="Apparel"
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
                  value={selectedWarehouse}
                  className={`item-availability__dropdown-menu ${
                    !isValid && selectedWarehouse === ""
                      ? "item-availability__dropdown-menu--error"
                      : ""
                  }`}
                  onChange={(e) => setSelectedWarehouse(e.target.value)}
                  name="warehouseId"
                >
                  <option
                    hidden
                    className="item-details__dropdown-item"
                    label="Please Select"
                    value="none"
                  ></option>
                  {warehouseList.map((warehouse) => (
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
                {!isValid && selectedWarehouse === "" ? (
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
  } else {
    return null;
  }
}
