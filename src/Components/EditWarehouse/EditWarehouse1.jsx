import { Link, useNavigate } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../NewWarehouse/NewWarehouse.scss";
import error from "../../assets/icons/error-24px.svg";
import axios from "axios";
import { isEmail, isEmpty } from "validator";

export default function EditWarehouse1() {
  const { id } = useParams();
  const [axiosCall, setAxiosCall] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  //const [isValidPhone, setIsValidPhone] = useState(true);
  const [hasDash, setHasDash] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouse/${id}`)
      .then((response) => {
        setAxiosCall(response.data);
        setPhoneNumber(response.data.contact_phone);
      })
      .catch((err) => {
        console.log(
          `An error occured while trying to access the warehouses: ${err}`
        );
      });
  }, [id]);
  if (!axiosCall) {
    return <p>loading</p>;
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Form validation upon submit
    if (
      isEmpty(axiosCall.warehouse_name, { ignore_whitespace: true }) ||
      isEmpty(axiosCall.address, { ignore_whitespace: true }) ||
      isEmpty(axiosCall.city, { ignore_whitespace: true }) ||
      isEmpty(axiosCall.country, { ignore_whitespace: true }) ||
      isEmpty(axiosCall.contact_name, { ignore_whitespace: true }) ||
      isEmpty(axiosCall.contact_position, { ignore_whitespace: true }) ||
      isEmpty(axiosCall.contact_phone, { ignore_whitespace: true }) ||
      !isEmail(axiosCall.contact_email)
    ) {
      setIsValid(false);
      if (!isEmail(axiosCall.contact_email)) {
        setIsValidEmail(false);
      } else {
        setIsValidEmail(true);
      }
      //Phone validation not working when number isn't user inputed
      // if (!isMobilePhone(phoneNumber)) {
      //   console.log("hello");
      //   setIsValidPhone(false);
      // } else {
      //   setIsValidPhone(true);s
      // }
      return;
    } else {
      const updatedWarehouse = {};
      updatedWarehouse.warehouse_name = e.target.warehouseName.value;
      updatedWarehouse.address = e.target.streetAddress.value;
      updatedWarehouse.city = e.target.city.value;
      updatedWarehouse.country = e.target.country.value;
      updatedWarehouse.contact_name = e.target.contactName.value;
      updatedWarehouse.contact_position = e.target.position.value;
      updatedWarehouse.contact_phone = e.target.phoneNumber.value;
      updatedWarehouse.contact_email = e.target.email.value;
      axios
        .put(`http://localhost:8080/warehouse/${id}/`, updatedWarehouse)
        .then(navigate("/warehouses"))

        .catch((err) => {
          console.log(
            `An error occured while trying to access the warehouses: ${err}`
          );
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
        <h1 className="new-warehouse__title">Edit Warehouse</h1>
      </div>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form__sections">
          <div className="warehouse-section">
            <h2 className="warehouse-section__title">Warehouse Details</h2>
            <div className="warehouse-section__wrapper">
              <label className="warehouse-section__label">Warehouse Name</label>
              <input
                type="text"
                className={`warehouse-section__input ${!isValid &&
                    isEmpty(axiosCall.warehouse_name, { ignore_whitespace: true })
                    ? "warehouse-section__input--error"
                    : ""
                  }`}
                name="warehouseName"
                value={axiosCall.warehouse_name}
                placeholder="Warehouse Name"
                onChange={(e) => {
                  setAxiosCall({
                    ...axiosCall,
                    warehouse_name: e.target.value,
                  });
                }}
              />

              {!isValid &&
                isEmpty(axiosCall.warehouse_name, { ignore_whitespace: true }) ? (
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
                className={`warehouse-section__input ${!isValid &&
                    isEmpty(axiosCall.address, { ignore_whitespace: true })
                    ? "warehouse-section__input--error"
                    : ""
                  }`}
                name="streetAddress"
                value={axiosCall.address}
                placeholder="Street Address"
                onChange={(e) => {
                  setAxiosCall({
                    ...axiosCall,
                    address: e.target.value,
                  });
                }}
              />
              {!isValid &&
                isEmpty(axiosCall.address, { ignore_whitespace: true }) ? (
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
                className={`warehouse-section__input ${!isValid &&
                    isEmpty(axiosCall.city, { ignore_whitespace: true })
                    ? "warehouse-section__input--error"
                    : ""
                  }`}
                name="city"
                value={axiosCall.city}
                placeholder="City"
                onChange={(e) => {
                  setAxiosCall({
                    ...axiosCall,
                    city: e.target.value,
                  });
                }}
              />
              {!isValid &&
                isEmpty(axiosCall.city, { ignore_whitespace: true }) ? (
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
                className={`warehouse-section__input ${!isValid &&
                    isEmpty(axiosCall.country, { ignore_whitespace: true })
                    ? "warehouse-section__input--error"
                    : ""
                  }`}
                name="country"
                value={axiosCall.country}
                placeholder="Country"
                onChange={(e) => {
                  setAxiosCall({
                    ...axiosCall,
                    country: e.target.value,
                  });
                }}
              />
              {!isValid &&
                isEmpty(axiosCall.country, { ignore_whitespace: true }) ? (
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
                className={`contact-section__input ${!isValid &&
                    isEmpty(axiosCall.contact_name, { ignore_whitespace: true })
                    ? "contact-section__input--error"
                    : ""
                  }`}
                name="contactName"
                value={axiosCall.contact_name}
                placeholder="Contact Name"
                onChange={(e) => {
                  setAxiosCall({
                    ...axiosCall,
                    contact_name: e.target.value,
                  });
                }}
              />
              {!isValid &&
                isEmpty(axiosCall.contact_name, { ignore_whitespace: true }) ? (
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
                className={`contact-section__input ${!isValid &&
                    isEmpty(axiosCall.contact_position, {
                      ignore_whitespace: true,
                    })
                    ? "contact-section__input--error"
                    : ""
                  }`}
                name="position"
                value={axiosCall.contact_position}
                placeholder="Position"
                onChange={(e) => {
                  setAxiosCall({
                    ...axiosCall,
                    contact_position: e.target.value,
                  });
                }}
              />
              {!isValid &&
                isEmpty(axiosCall.contact_position, {
                  ignore_whitespace: true,
                }) ? (
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
                className={`contact-section__input ${!isValid &&
                    isEmpty(axiosCall.contact_phone, { ignore_whitespace: true })
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
                  // setIsValidPhone(isMobilePhone(e.target.value));
                  setPhoneNumber(e.target.value);
                }}
              />
              {!isValid && isEmpty(phoneNumber, { ignore_whitespace: true }) ? (
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
                className={`contact-section__input ${!isValid &&
                    isEmpty(axiosCall.contact_email, { ignore_whitespace: true })
                    ? "contact-section__input--error"
                    : ""
                  }`}
                name="email"
                value={axiosCall.contact_email}
                placeholder="Email"
                onChange={(e) => {
                  setAxiosCall({
                    ...axiosCall,
                    contact_email: e.target.value,
                  });
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
                    {isEmpty(axiosCall.contact_email, {
                      ignore_whitespace: true,
                    })
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
            Save
          </button>
        </div>
      </form>
    </>
  );
}
