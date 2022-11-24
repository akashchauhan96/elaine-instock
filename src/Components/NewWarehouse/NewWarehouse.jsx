import { Link, useNavigate } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import "./NewWarehouse.scss";
import error from "../../assets/icons/error-24px.svg";
import validator from "validator";

export default function NewWarehouse() {
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const newWarehouseName = e.target[0].value;
    const newAddress = e.target[1].value;
    const newCity = e.target[2].value;
    const newCountry = e.target[3].value;
    const newContactName = e.target[4].value;
    const newPosition = e.target[5].value;
    const newPhoneNum = e.target[6].value;
    const newEmail = e.target[7].value;

    // if (!newWarehouseName) {

    // }
    //   !newAddress ||
    //   !newCity ||
    //   !newCountry ||
    //   !newContactName ||
    //   !newPosition ||
    //   !newPhoneNum ||
    //   !newEmail
    // )
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
            <div className="warehouse-section__name-wrapper">
              <label className="warehouse-section__name-label">
                Warehouse Name
              </label>
              <input
                type="text"
                className="warehouse-section__name-input"
                name="warehouse-name"
                value={warehouseName}
                placeholder="Warehouse Name"
                onChange={(e) => {
                  setWarehouseName(e.target.value);
                }}
              />
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
            </div>
            <div className="warehouse-section__address-wrapper">
              <label className="warehouse-section__address-label">
                Street Address
              </label>
              <input
                type="text"
                className="warehouse-section__address-input"
                name="street-address"
                value={streetAddress}
                placeholder="Street Address"
                onChange={(e) => {
                  setStreetAddress(e.target.value);
                }}
              />
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
            </div>
            <div className="warehouse-section__city-wrapper">
              <label className="warehouse-section__city-label">City</label>
              <input
                type="text"
                className="warehouse-section__city-input"
                name="city"
                value={city}
                placeholder="City"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              {validator.isEmpty(`${city}`) && (
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
              )}
            </div>
            <div className="warehouse-section__country-wrapper">
              <label className="warehouse-section__country-label">
                Country
              </label>
              <input
                type="text"
                className="warehouse-section__country-input"
                name="country"
                value={country}
                placeholder="Country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
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
            </div>
          </div>
          <div className="contact-section">
            <h2 className="contact-section__title">Contact Details</h2>
            <div className="contact-section__contact-wrapper">
              <label className="contact-section__name-label">
                Contact Name
              </label>
              <input
                type="text"
                className="contact-section__name-input"
                name="contact-name"
                value={contactName}
                placeholder="Contact Name"
                onChange={(e) => {
                  setContactName(e.target.value);
                }}
              />
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
            </div>
            <div className="contact-section__position-wrapper">
              <label className="contact-section__position-label">
                Position
              </label>
              <input
                type="text"
                className="contact-section__position-input"
                name="position"
                value={position}
                placeholder="Position"
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
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
            </div>
            <div className="contact-section__phone-wrapper">
              <label className="contact-section__phone-label">
                Phone Number
              </label>
              <input
                type="text"
                className="contact-section__phone-input"
                name="phone-number"
                value={phoneNumber}
                placeholder="Phone Number"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
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
            </div>
            <div className="contact-section__email-wrapper">
              <label className="contact-section__email-label">Email</label>
              <input
                type="text"
                className="contact-section__email-input"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
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
