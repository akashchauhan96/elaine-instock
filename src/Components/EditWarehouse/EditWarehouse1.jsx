import { Link, useNavigate } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../NewWarehouse/NewWarehouse.scss";
import error from "../../assets/icons/error-24px.svg";
import axios from "axios";

export default function EditWarehouse1() {
  const { id } = useParams();
  const [axiosCall, setAxiosCall] = useState(null);
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouse/${id}`)
      .then((response) => {
        setAxiosCall(response.data);
      })
      .catch((err) => {
        console.log(
          `An error occured while trying to access the warehouses: ${err}`
        );
      });
  }, [id]);

  console.log(axiosCall);
  if (axiosCall !== null) {
    console.log(axiosCall.warehouse_name);
  }

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/warehouse/${id}`).then(() => {});

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
    }
  };
  if (axiosCall) {
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
          <h1 className="new-warehouse__title">Edit Warehouse</h1>
        </div>
        <form className="form" onSubmit={handleOnSubmit}>
          <div className="form__sections">
            <div className="warehouse-section">
              <h2 className="warehouse-section__title">Warehouse Details</h2>
              <div className="warehouse-section__wrapper">
                <label className="warehouse-section__label">
                  Warehouse Name
                </label>
                <input
                  type="text"
                  className={`warehouse-section__input ${
                    !isValid && warehouseName === ""
                      ? "warehouse-section__input--error"
                      : ""
                  }`}
                  name="warehouseName"
                  value={axiosCall.warehouse_name}
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
                <label className="warehouse-section__label">
                  Street Address
                </label>
                <input
                  type="text"
                  className={`warehouse-section__input ${
                    !isValid && streetAddress === ""
                      ? "warehouse-section__input--error"
                      : ""
                  }`}
                  name="streetAddress"
                  value={axiosCall.address}
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
                  value={axiosCall.city}
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
                  value={axiosCall.country}
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
                  value={axiosCall.contact_name}
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
                  value={axiosCall.contact_position}
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
                  value={axiosCall.contact_phone}
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
                  value={axiosCall.contact_email}
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
            <button className="buttons__cancel" onClick={() => navigate("/")}>
              Cancel
            </button>
            <button className="buttons__add-warehouse" type="submit">
              Save
            </button>
          </div>
        </form>
      </>
    );
  }
}
