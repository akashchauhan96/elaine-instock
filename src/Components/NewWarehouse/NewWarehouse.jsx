import { Link, useNavigate } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import { useState } from "react";
import "./NewWarehouse.scss";
import { isEmail, isMobilePhone, isEmpty } from "validator";
import error from "../../assets/icons/error-24px.svg";
import axios from "axios";
import { URL } from "../../utils/util";

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
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [hasDash, setHasDash] = useState(false);

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    //Form validation upon submit
    if (
      isEmpty(warehouseName, { ignore_whitespace: true }) ||
      isEmpty(streetAddress, { ignore_whitespace: true }) ||
      isEmpty(city, { ignore_whitespace: true }) ||
      isEmpty(country, { ignore_whitespace: true }) ||
      isEmpty(contactName, { ignore_whitespace: true }) ||
      isEmpty(position, { ignore_whitespace: true }) ||
      isEmpty(phoneNumber, { ignore_whitespace: true }) ||
      !isMobilePhone(phoneNumber) ||
      !isEmail(email)
    ) {
      setIsValid(false);
      if (!isEmail(email)) {
        setIsValidEmail(false);
      } else {
        setIsValidEmail(true);
      }
      if (!isMobilePhone(phoneNumber)) {
        setIsValidPhone(false);
      } else {
        setIsValidPhone(true);
      }
      return;
    } else {
      const newWarehouse = {};
      newWarehouse.warehouse_name = e.target.warehouseName.value;
      newWarehouse.address = e.target.streetAddress.value;
      newWarehouse.city = e.target.city.value;
      newWarehouse.country = e.target.country.value;
      newWarehouse.contact_name = e.target.contactName.value;
      newWarehouse.contact_position = e.target.position.value;
      newWarehouse.contact_phone = e.target.phoneNumber.value;
      newWarehouse.contact_email = e.target.email.value;
      setIsValid(true);

      console.log(newWarehouse);

      axios
        .post(`${URL}/warehouse`, newWarehouse)
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
        <Link to="/" className="new-warehouse__back-link">
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
                  !isValid &&
                  isEmpty(warehouseName, { ignore_whitespace: true })
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
              {!isValid &&
              isEmpty(warehouseName, { ignore_whitespace: true }) ? (
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
                  !isValid &&
                  isEmpty(streetAddress, { ignore_whitespace: true })
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
              {!isValid &&
              isEmpty(streetAddress, { ignore_whitespace: true }) ? (
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
                  !isValid && isEmpty(city, { ignore_whitespace: true })
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
              {!isValid && isEmpty(city, { ignore_whitespace: true }) ? (
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
                  !isValid && isEmpty(country, { ignore_whitespace: true })
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
              {!isValid && isEmpty(country, { ignore_whitespace: true }) ? (
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
                  !isValid && isEmpty(contactName, { ignore_whitespace: true })
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
              {!isValid && isEmpty(contactName, { ignore_whitespace: true }) ? (
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
                  !isValid && isEmpty(position, { ignore_whitespace: true })
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
              {!isValid && isEmpty(position, { ignore_whitespace: true }) ? (
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
                  !isValid && isEmpty(phoneNumber, { ignore_whitespace: true })
                    ? "contact-section__input--error"
                    : ""
                }`}
                name="phoneNumber"
                value={phoneNumber}
                placeholder="Phone Number"
                onChange={(e) => {
                  if (
                    e.target.value.toString().length &&
                    !e.target.value.toString().startsWith("+")
                  ) {
                    setPhoneNumber("+1 " + e.target.value);
                    return;
                  } else if (
                    e.target.value.toString().length > 2 &&
                    !e.target.value.toString().startsWith("+1 ")
                  ) {
                    const phoneArray = e.target.value.split("");
                    phoneArray.splice(0, 1, "+1 ");
                    setPhoneNumber(phoneArray.join(""));
                    return;
                  }
                  if (
                    e.target.value.toString().length === 6 &&
                    !e.target.value.toString().includes("(")
                  ) {
                    const phoneArray = e.target.value.split("");
                    phoneArray.splice(3, 0, "(");
                    phoneArray.splice(7, 0, ") ");
                    setPhoneNumber(phoneArray.join(""));
                    return;
                  } else if (
                    e.target.value.toString().length >= 9 &&
                    !e.target.value.toString().includes(") ")
                  ) {
                    const phoneArray = e.target.value.split("");
                    phoneArray.splice(7, 1, ") ");
                    setPhoneNumber(phoneArray.join(""));
                    return;
                  }
                  if (e.target.value.toString().length >= 12 && !hasDash) {
                    const phoneArray = e.target.value.split("");
                    phoneArray.splice(12, 0, "-");
                    setPhoneNumber(phoneArray.join(""));
                    setHasDash(true);
                    return;
                  } else if (
                    e.target.value.toString().length <= 12 &&
                    !e.target.value.toString().includes("-")
                  ) {
                    setHasDash(false);
                  }
                  if (e.target.value.toString().length >= 18) {
                    return;
                  }
                  setIsValidPhone(isMobilePhone(e.target.value));
                  setPhoneNumber(e.target.value);
                }}
              />
              {!isValid && !isValidPhone ? (
                <div className="contact-section__error-state">
                  <img
                    src={error}
                    alt="Exclamation point icon to indicate when text field is empty"
                    className="contact-section__error-icon"
                  />
                  <span className="contact-section__error-command">
                    {isEmpty(phoneNumber, { ignore_whitespace: true })
                      ? "This field is required"
                      : "A valid phone number is required"}
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
                  !isValid && isEmpty(email, { ignore_whitespace: true })
                    ? "contact-section__input--error"
                    : ""
                }`}
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsValidEmail(isEmail(e.target.value));
                }}
              />
              {!isValid && !isValidEmail ? (
                <div className="contact-section__error-state">
                  <img
                    src={error}
                    alt="Exclamation point icon to indicate when text field is empty"
                    className="contact-section__error-icon"
                  />
                  <span className="contact-section__error-command">
                    {isEmpty(email, { ignore_whitespace: true })
                      ? "This field is required"
                      : "A valid email is required"}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="buttons__cancel" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button className="buttons__add-warehouse" type="submit">
            + Add Warehouse
          </button>
        </div>
      </form>
    </>
  );
}
