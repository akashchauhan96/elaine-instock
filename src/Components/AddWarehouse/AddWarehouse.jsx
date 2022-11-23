import { Link, useNavigate } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow-back-24px.svg";
import { useState } from "react";
import "./AddWarehouse.scss";

export default function AddWarehouse() {
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleOnSubmit = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <Link to="#">
        <img
          className="add-warehouse__back-button"
          src={arrowBack}
          alt="Arrow to direct user to main warehouse page"
        />
      </Link>
      <h1 className="add-warehouse__title">Add Warehouse</h1>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form__sections">
          <div className="warehouse-section">
            <h2 className="warehouse-section__title">Warehouse Details</h2>
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
            <label className="warehouse-section__country-label">Country</label>
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
          </div>
          <div className="contact-section">
            <h2 className="contact-section__title">Warehouse Details</h2>
            <label className="contact-section__name-label">
              Warehouse Name
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
            <label className="contact-section__position-label">
              Street Address
            </label>
            <input
              type="text"
              className="warehouse-section__position-input"
              name="position"
              value={position}
              placeholder="Position"
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            />
            <label className="contact-section__phone-label">City</label>
            <input
              type="text"
              className="warehouse-section__phone-input"
              name="phone-number"
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <label className="contact-section__email-label">Country</label>
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
