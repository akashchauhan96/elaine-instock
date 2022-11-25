import { Link, useNavigate } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import "./NewWarehouse.scss";
import error from "../../assets/icons/error-24px.svg";
import validator from "validator";
import axios from "axios";

export default function NewWarehouse() {
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (
      !warehouseName ||
      !streetAddress ||
      !city ||
      !country ||
      !contactName ||
      !position ||
      !phoneNumber ||
      !email
    ) {
      setIsValid(false);
      return;
    } else {
      const newWarehouse = {};
      newWarehouse.warehouseName = e.target.warehouseName.value;
      newWarehouse.address = e.target.streetAddress.value;
      newWarehouse.city = e.target.city.value;
      newWarehouse.country = e.target.country.value;
      newWarehouse.contactName = e.target.contactName.value;
      newWarehouse.position = e.target.position.value;
      newWarehouse.phoneNumber = e.target.phoneNumber.value;
      newWarehouse.email = e.target.email.value;
      setIsValid(true);

      axios
        .post(`/`, newWarehouse)
        .then(() => {
          navigate(`/`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="new-warehouse__title-wrapper">
        <Link to="#" className="new-warehouse__back-link">
          <img
            className="new-warehouse__back-button"
            src={arrowBack}
            alt="Arrow to direct user to main warehouse page"
          />
        </Link>
        <h1 className="new-warehouse__title">Add New Warehouse</h1>
      </div>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form__sections">
          <div className="warehouse-section">
            <h2 className="warehouse-section__title">Warehouse Details</h2>
            <div className="warehouse-section__wrapper">
              <label className="warehouse-section__label">Warehouse Name</label>
              <input
                type="text"
                className={`warehouse-section__input ${
                  !isValid && warehouseName === ""
                    ? "warehouse-section__input--error"
                    : ""
                }`}
                name="warehouseName"
                value={warehouseName}
                placeholder="Warehouse Name"
                onChange={(e) => {
                  setWarehouseName(e.target.value);
                }}
              />
              {!isValid && warehouseName === "" ? (
                <div className="warehouse-section__error-state">
                  <img
                    src={error}
                    alt="Exclamation point icon to indicate when text field is empty"
                    className="warehouse-section__error-icon"
                  />
                  <span className="warehouse-section__error-command">
                    This field is required
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="warehouse-section__wrapper">
              <label className="warehouse-section__label">Street Address</label>
              <input
                type="text"
                className={`warehouse-section__input ${
                  !isValid && streetAddress === ""
                    ? "warehouse-section__input--error"
                    : ""
                }`}
                name="streetAddress"
                value={streetAddress}
                placeholder="Street Address"
                onChange={(e) => {
                  setStreetAddress(e.target.value);
                }}
              />
              {!isValid && streetAddress === "" ? (
                <div className="warehouse-section__error-state">
                  <img
                    src={error}
                    alt="Exclamation point icon to indicate when text field is empty"
                    className="warehouse-section__error-icon"
                  />
                  <span className="warehouse-section__error-command">
                    This field is required
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="warehouse-section__wrapper">
              <label className="warehouse-section__label">City</label>
              <input
                type="text"
                className={`warehouse-section__input ${
                  !isValid && city === ""
                    ? "warehouse-section__input--error"
                    : ""
                }`}
                name="city"
                value={city}
                placeholder="City"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              {!isValid && city === "" ? (
                <div className="warehouse-section__error-state">
                  <img
                    src={error}
                    alt="Exclamation point icon to indicate when text field is empty"
                    className="warehouse-section__error-icon"
                  />
                  <span className="warehouse-section__error-command">
                    This field is required
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="warehouse-section__wrapper">
              <label className="warehouse-section__label">Country</label>
              <input
                type="text"
                className={`warehouse-section__input ${
                  !isValid && country === ""
                    ? "warehouse-section__input--error"
                    : ""
                }`}
                name="country"
                value={country}
                placeholder="Country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
              {!isValid && country === "" ? (
                <div className="warehouse-section__error-state">
                  <img
                    src={error}
                    alt="Exclamation point icon to indicate when text field is empty"
                    className="warehouse-section__error-icon"
                  />
                  <span className="warehouse-section__error-command">
                    This field is required
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="contact-section">
            <h2 className="contact-section__title">Contact Details</h2>
            <div className="contact-section__wrapper">
              <label className="contact-section__label">Contact Name</label>
              <input
                type="text"
                className={`contact-section__input ${
                  !isValid && contactName === ""
                    ? "contact-section__input--error"
                    : ""
                }`}
                name="contactName"
                value={contactName}
                placeholder="Contact Name"
                onChange={(e) => {
                  setContactName(e.target.value);
                }}
              />
              {!isValid && contactName === "" ? (
                <div className="contact-section__error-state">
                  <img
                    src={error}
                    alt="Exclamation point icon to indicate when text field is empty"
                    className="contact-section__error-icon"
                  />
                  <span className="contact-section__error-command">
                    This field is required
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="contact-section__wrapper">
              <label className="contact-section__label">Position</label>
              <input
                type="text"
                className={`contact-section__input ${
                  !isValid && position === ""
                    ? "contact-section__input--error"
                    : ""
                }`}
                name="position"
                value={position}
                placeholder="Position"
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
              {!isValid && position === "" ? (
                <div className="contact-section__error-state">
                  <img
                    src={error}
                    alt="Exclamation point icon to indicate when text field is empty"
                    className="contact-section__error-icon"
                  />
                  <span className="contact-section__error-command">
                    This field is required
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="contact-section__wrapper">
              <label className="contact-section__label">Phone Number</label>
              <input
                type="text"
                className={`contact-section__input ${
                  !isValid && phoneNumber === ""
                    ? "contact-section__input--error"
                    : ""
                }`}
                name="phoneNumber"
                value={phoneNumber}
                placeholder="Phone Number"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
              {!isValid && phoneNumber === "" ? (
                <div className="contact-section__error-state">
                  <img
                    src={error}
                    alt="Exclamation point icon to indicate when text field is empty"
                    className="contact-section__error-icon"
                  />
                  <span className="contact-section__error-command">
                    This field is required
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="contact-section__wrapper">
              <label className="contact-section__label">Email</label>
              <input
                type="text"
                className={`contact-section__input ${
                  !isValid && email === ""
                    ? "contact-section__input--error"
                    : ""
                }`}
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {!isValid && email === "" ? (
                <div className="contact-section__error-state">
                  <img
                    src={error}
                    alt="Exclamation point icon to indicate when text field is empty"
                    className="contact-section__error-icon"
                  />
                  <span className="contact-section__error-command">
                    This field is required
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="buttons__cancel">Cancel</button>
          <button className="buttons__add-warehouse" type="submit">
            + Add Warehouse
          </button>
        </div>
      </form>
    </>
  );
}
