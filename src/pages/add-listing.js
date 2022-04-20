import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Section, Add, Form } from "../components";
import axios from "axios";
import validator from "validator";
import { useParams, Link, Redirect, useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import UserHeaderContainer from "../containers/UserHeaderContainer";
import {
  HeaderContainer,
  DashboardContainer,
  FooterContainer,
} from "../containers";

const AddLisiting = () => {
  const { register, handleSubmit } = useForm();
  const onSubmitFun = (data) => {
    console.log(data);
  };
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [price, setPrice] = useState("");
  const [priceError, setPriceError] = useState("");
  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCategoryError, setSubCategoryError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const [longitude, setLongitude] = useState("");
  const [longitudeError, setLongitudeError] = useState("");
  const [latitude, setLatitude] = useState("");
  const [latitudeError, setLatitudeError] = useState("");
  const [landArea, setLandArea] = useState("");
  const [landAreaError, setLandAreaError] = useState("");
  const [unit, setUnit] = useState("");
  const [unitError, setUnitError] = useState("");
  const [rooms, setRooms] = useState("");
  const [roomsError, setRoomsError] = useState("");
  const [Bathrooms, setBathrooms] = useState("");
  const [BathroomsError, setBathroomsError] = useState("");
  const [structureType, setStructureType] = useState("");
  const [structureTypeError, setStructureTypeError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const hiddenFileInput = useRef(null);
  const [picture1, setPicture1] = useState();
  const [picture2, setPicture2] = useState();
  const [pictureError1, setPictureError1] = useState("");
  const [pictureError2, setPictureError2] = useState("");
  const [picture3, setPicture3] = useState();

  const FormHandler = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(title) ||
      validator.isEmpty(price) ||
      validator.isEmpty(category) ||
      validator.isEmpty(subCategory) ||
      validator.isEmpty(zipCode) ||
      validator.isEmpty(city) ||
      validator.isEmpty(description) ||
      validator.isEmpty(latitude) ||
      validator.isEmpty(longitude) ||
      validator.isEmpty(rooms) ||
      validator.isEmpty(structureType) ||
      validator.isEmpty(address) ||
      validator.isEmpty(landArea) ||
      validator.isEmpty(unit)
    ) {
      validator.isEmpty(title)
        ? setTitleError("*Title   must be required.")
        : setTitleError("");
      validator.isEmpty(price)
        ? setPriceError("*Price   must be required.")
        : setPriceError("");
      validator.isEmpty(category)
        ? setCategoryError("*Category   must be required.")
        : setCategoryError("");
      validator.isEmpty(subCategory)
        ? setSubCategoryError("*Sub-Category   must be required.")
        : setSubCategoryError("");
      validator.isEmpty(description)
        ? setDescriptionError("*Description   must be required.")
        : setDescriptionError("");
      validator.isEmpty(latitude)
        ? setLatitudeError("*Latitude   must be required.")
        : setLatitudeError("");
      validator.isEmpty(longitude)
        ? setLongitudeError("*Longitude    must be required.")
        : setLongitudeError("");
      validator.isEmpty(landArea)
        ? setLandAreaError("*LandArea field   must be required.")
        : setLandAreaError("");
      validator.isEmpty(unit)
        ? setUnitError("*Area Unit    must be required.")
        : setUnitError("");
      validator.isEmpty(rooms)
        ? setRoomsError("*Rooms field   must be required.")
        : setRoomsError("");
      validator.isEmpty(structureType)
        ? setStructureTypeError("*Structure type field  must be required.")
        : setStructureTypeError("");
      validator.isEmpty(address)
        ? setAddressError("*Address field   must be required.")
        : setAddressError("");
      validator.isEmpty(zipCode)
        ? setZipCodeError("*Zip Code   must be required.")
        : setZipCodeError("");
      validator.isEmpty(city)
        ? setCityError("*City field   must be required.")
        : setCityError("");
    } else {
      setTitleError("");
      setPriceError("");
      setCategoryError("");
      setSubCategoryError("");
      setDescriptionError("");
      setLatitudeError("");
      setLongitudeError("");
      setLandAreaError("");
      setUnitError("");
      setRoomsError("");
      setStructureTypeError("");
      setAddressError("");
      setZipCodeError("");
      setCityError("");
      setPictureError1("");
      setPictureError2("");
      const formData = new FormData();
      formData.append("image1", picture1, picture1.name);
      formData.append("image2", picture2, picture2.name);
      formData.append("image3", picture3, picture3.name);
      formData.append("PropertyTitle", title);
      formData.append("Purpose", subCategory);
      formData.append("Price", price);
      formData.append("Category", category);
      formData.append("SubCategory", subCategory);
      formData.append("Description", description);
      formData.append("Longitude", longitude);
      formData.append("Latitude", latitude);
      formData.append("LandArea", landArea);
      formData.append("Unit", unit);
      formData.append("BedRooms", Number(rooms));
      formData.append("BathRooms", Number(Bathrooms));
      formData.append("Structureype", structureType);
      formData.append("Address", address);
      formData.append("ZipCode", zipCode);
      formData.append("City", city);
      formData.append("UserId", 1);

      axios
        .post("http://127.0.0.1:8000/api/property/", formData)
        .then((res) => {
          handleShow()
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    e.preventDefault();
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <UserHeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title={id ? "Edit Property" : "Add Property"}>
            <Add>
              <Form onSubmit={FormHandler}>
                <Add.DescriptionHeader>
                  <Add.Title>
                    {" "}
                    <h6>
                      <b>Description</b>{" "}
                    </h6>{" "}
                  </Add.Title>
                </Add.DescriptionHeader>
                <Add.DescriptionContent>
                  <Add.DescriptionContentTop>
                    <Form.FormGroup>
                      <Form.Label>
                        Property Title <span>(required)</span>
                      </Form.Label>
                     
                      <Form.Input
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                          console.log(title);
                        }}
                      />

                      <h6 style={{ color: "red" }}>{titleError}</h6>
                    </Form.FormGroup>
                    <Form.FormGroup>
                      <Form.Label>
                        Property Price <span>(required)</span>
                      </Form.Label>
                      <Form.InputNumber
                        name="price"
                        ref={register}
                        onChange={(e) => {
                          setPrice(e.target.value);
                          console.log(category);
                        }}
                      />
                      <h6 style={{ color: "red" }}>{priceError}</h6>
                    </Form.FormGroup>
                    <Form.FormGroup>
                      <Form.Label>
                        Category <span>(required)</span>
                      </Form.Label>
                      <Form.Select
                        name="category"
                        value={category}
                        onChange={(e) => {
                          setCategory(e.target.value);
                          console.log(category);
                        }}
                      >
                        <Form.Option disabled defaultValue>
                          None
                        </Form.Option>
                        <Form.Option>Apartment</Form.Option>
                        <Form.Option>House</Form.Option>
                        <Form.Option>Land</Form.Option>
                      </Form.Select>
                      <h6 style={{ color: "red" }}>{categoryError}</h6>
                    </Form.FormGroup>
                    <Form.FormGroup>
                      <Form.Label>
                        Listed In <span>(required)</span>
                      </Form.Label>
                      <Form.Select
                        name="none"
                        id=""
                        value={subCategory}
                        onChange={(e) => {
                          setSubCategory(e.target.value);
                          console.log(subCategory);
                        }}
                      >
                        <Form.Option disabled defaultValue>
                          None
                        </Form.Option>
                        <Form.Option>Rental</Form.Option>
                        <Form.Option>Sales</Form.Option>
                      </Form.Select>
                      <h6 style={{ color: "red" }}>{subCategoryError}</h6>
                    </Form.FormGroup>
                  </Add.DescriptionContentTop>
                  <Add.DescriptionContentBottom>
                    <Form.FormGroup>
                      <Form.Label>
                        Description <span>(required)</span>
                      </Form.Label>
                      <Form.TextArea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                          console.log(description);
                        }}
                      ></Form.TextArea>
                      <h6 style={{ color: "red" }}>{descriptionError}</h6>
                    </Form.FormGroup>

                    <Add.DescriptionHeader>
                      <Add.Title>
                        {" "}
                        <h6>
                          <b>Property Location</b>{" "}
                        </h6>
                      </Add.Title>
                    </Add.DescriptionHeader>

                    <Form.FormGroup>
                      <Form.Label>
                        Address <span>(required)</span>
                      </Form.Label>
                      <Form.Input
                        type="text"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                          console.log(address);
                        }}
                      />
                      <h6 style={{ color: "red" }}>{addressError}</h6>
                    </Form.FormGroup>
                    <Add.LocationContent>
                      <Add.LocationContentTop></Add.LocationContentTop>
                      <Add.LocationContentBottom>
                        <Form.FormGroup>
                          <Form.Label>
                            City<span>(required)</span>
                          </Form.Label>
                          <Form.Input
                            type="text"
                            value={city}
                            onChange={(e) => {
                              setCity(e.target.value);
                              console.log(city);
                            }}
                          />
                          <h6 style={{ color: "red" }}>{cityError}</h6>
                        </Form.FormGroup>
                        <Form.FormGroup>
                          <Form.Label>
                            ZipCode<span>(required)</span>
                          </Form.Label>
                          <Form.InputNumber
                            type="text"
                            value={zipCode}
                            onChange={(e) => {
                              setZipCode(e.target.value);
                              console.log(zipCode);
                            }}
                          />
                          <h6 style={{ color: "red" }}>{zipCodeError}</h6>
                        </Form.FormGroup>
                        <Form.FormGroup>
                          <Form.Label>
                            Latitude<span>(for google maps)</span>
                          </Form.Label>
                          <Form.InputNumber
                            value={latitude}
                            onChange={(e) => {
                              setLatitude(e.target.value);
                              console.log(latitude);
                            }}
                          />
                          <h6 style={{ color: "red" }}>{latitudeError}</h6>
                        </Form.FormGroup>
                        <Form.FormGroup>
                          <Form.Label>
                            Longitude<span>(for google maps)</span>
                          </Form.Label>
                          <Form.InputNumber
                            type="text"
                            value={longitude}
                            onChange={(e) => {
                              setLongitude(e.target.value);
                              console.log(longitude);
                            }}
                          />
                          <h6 style={{ color: "red" }}>{longitudeError}</h6>
                        </Form.FormGroup>
                      </Add.LocationContentBottom>
                    </Add.LocationContent>

                    <Add.MediaHeader>
                      <Add.Title>
                        {" "}
                        <h6>
                          <b>Property Images</b>{" "}
                        </h6>
                      </Add.Title>
                    </Add.MediaHeader>
                    <Add.MediaContent>
                      <Form.FormGroup>
                        <Form.Label>Images-1</Form.Label>
                        <section>
                          <input
                            className="form-control p-3"
                            type="file"
                            onChange={(e) => {
                              setPicture1(e.target.files[0]);
                              console.log(e.target.files[0]);
                            }}
                            required
                          />
                        </section>
                        <h6 style={{ color: "red" }}>{pictureError1}</h6>
                      </Form.FormGroup>
                      <Form.FormGroup>
                        <Form.Label>Images-2</Form.Label>
                        <section>
                          <input
                            className="form-control p-3"
                            type="file"
                            onChange={(e) => {
                              setPicture2(e.target.files[0]);
                              console.log(e.target.files[0]);
                            }}
                            required
                          />
                        </section>
                        <h6 style={{ color: "red" }}>{pictureError2}</h6>
                      </Form.FormGroup>
                      <Form.FormGroup>
                        <Form.Label>Images-3</Form.Label>
                        {/* Special input file case */}
                        <section>
                          <input
                            className="form-control p-3"
                            type="file"
                            onChange={(e) => {
                              setPicture3(e.target.files[0]);
                              console.log(e.target.files[0]);
                            }}
                            required
                          />
                        </section>
                      </Form.FormGroup>
                    </Add.MediaContent>

                    <Add.DetailsHeader>
                      <Add.Title>
                        {" "}
                        <h6>
                          <b>Property Details</b>{" "}
                        </h6>
                      </Add.Title>
                    </Add.DetailsHeader>
                    <Add.DetailsContent>
                      <Form.FormGroup>
                        <Form.Label>Rooms</Form.Label>
                        <Form.InputNumber
                          type="text"
                          value={rooms}
                          onChange={(e) => {
                            setRooms(e.target.value);
                            console.log(rooms);
                          }}
                        />
                        <h6 style={{ color: "red" }}>{roomsError}</h6>
                      </Form.FormGroup>
                      <Form.FormGroup>
                        <Form.Label>Bedrooms</Form.Label>
                        <Form.InputNumber
                          type="text"
                          value={rooms}
                          onChange={(e) => {
                            setRooms(e.target.value);
                            console.log(rooms);
                          }}
                        />
                      </Form.FormGroup>
                      <Form.FormGroup>
                        <Form.Label>Bathrooms</Form.Label>
                        <Form.InputNumber
                          type="text"
                          value={Bathrooms}
                          onChange={(e) => {
                            setBathrooms(e.target.value);
                            console.log(Bathrooms);
                          }}
                        />
                        <h6 style={{ color: "red" }}>{BathroomsError}</h6>
                      </Form.FormGroup>
                      <Form.FormGroup>
                        <Form.Label>Structure Type</Form.Label>
                        <Form.Select
                          name="none"
                          id=""
                          class="form-select"
                          value={structureType}
                          onChange={(e) => {
                            setStructureType(e.target.value);
                            console.log(structureType);
                          }}
                        >
                          <Form.Option disabled defaultValue>
                            Not Available
                          </Form.Option>
                          <Form.Option>Brick</Form.Option>
                          <Form.Option>Wood</Form.Option>
                          <Form.Option>Cement</Form.Option>
                        </Form.Select>
                        <h6 style={{ color: "red" }}>{structureTypeError}</h6>
                      </Form.FormGroup>

                      <Form.FormGroup>
                        <Form.Label>LandArea</Form.Label>
                        <Form.InputNumber
                          type="text"
                          value={landArea}
                          onChange={(e) => {
                            setLandArea(e.target.value);
                            console.log(landArea);
                          }}
                        />
                        <h6 style={{ color: "red" }}>{landAreaError}</h6>
                      </Form.FormGroup>
                      <Form.FormGroup>
                        <Form.Label>LandArea(Unit)</Form.Label>
                        <Form.Select
                          type="text"
                          value={unit}
                          onChange={(e) => {
                            setUnit(e.target.value);
                            console.log(unit);
                          }}
                        >
                          <Form.Option disabled defaultValue>
                            Not Available
                          </Form.Option>
                          <Form.Option>Square feet</Form.Option>
                          <Form.Option>Square yard</Form.Option>
                          <Form.Option>Square meter</Form.Option>
                          <Form.Option>Acre</Form.Option>
                        </Form.Select>
                        <h6 style={{ color: "red" }}>{unitError}</h6>
                      </Form.FormGroup>
                    </Add.DetailsContent>
                  </Add.DescriptionContentBottom>
                </Add.DescriptionContent>
                <Add.Footer>
                  <Form.FormGroup class="form-group">
                    <Form.SubmitInput
                      type="submit"
                      value={id ? "Update Property" : "Submit Property"}
                    />
                  </Form.FormGroup>
                  {id && (
                    <Form.FormGroup class="form-group">
                      <Form.SubmitInput type="submit" value="Cancel Update" />
                    </Form.FormGroup>
                  )}
                </Add.Footer>
              </Form>
            </Add>
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
  
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="text-center">
          <Modal.Title >Add Property Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your property form is successfuly  submitted.</Modal.Body>
      </Modal>
    </>
  );
};

export default AddLisiting;
