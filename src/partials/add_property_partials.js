import React, { useRef } from "react";
import { Add, Form } from "../components";
import { useState } from "react";

const AddPropertyForm = () => {

  const [title,setTitle]=useState('')
  const [price,setPrice]=useState('')
  const [category,setCategory]=useState('')
  const [subCategory,setSubCategory]=useState('')
  const [description,setDescription]=useState('')
 
  const [longitude,setLongitude]=useState('')
  const [latitude,setLatitude]=useState('')
  const [landArea,setLandArea]=useState('')
  const [unit,setUnit]=useState('')
  const [rooms,setRooms]=useState('')
  const [structureType,setStructureType]=useState('')

  const [address,setAddress]=useState('')
  const [zipCode,setZipCode]=useState('')
  const [city,setCity]=useState('')

  const hiddenFileInput = useRef(null);

  const handleFileButton = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  return (
    <Add.Description>
      <Add.DescriptionHeader>
        <Add.Title >Description</Add.Title>
      </Add.DescriptionHeader>
      <Add.DescriptionContent>
        <Add.DescriptionContentTop>
   
         
          <Form.FormGroup>
            <Form.Label>
              Property Title <span>(required)</span>
            </Form.Label>
            <Form.Input
             value={title} onChange={(e)=>{
              setTitle(e.target.value)
              console.log(title)
              }} />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Label>
              Property Price <span>(required)</span>
            </Form.Label>
            <Form.Input 
            value={price} onChange={(e)=>{
              setPrice(e.target.value)
              console.log(price)
              }} 
            />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Label>
              Category <span>(required)</span>
            </Form.Label>
            <Form.Select name="category" 
            value={category} 
              onChange={(e)=>{
              setCategory(e.target.value)
              console.log(category)
              }} 
              >
              <Form.Option disabled defaultValue>
                None
              </Form.Option>
              <Form.Option >Apartment</Form.Option>
              <Form.Option>House</Form.Option>
              <Form.Option>Land</Form.Option>
            </Form.Select>

          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Label>
              Listed In <span>(required)</span>
            </Form.Label>
            <Form.Select name="none" id="" 
             value={subCategory} 
             onChange={(e)=>{
             setSubCategory(e.target.value)
             console.log(subCategory)
             }} 
            >
              <Form.Option disabled defaultValue>
                None
              </Form.Option>
              <Form.Option>Rental</Form.Option>
              <Form.Option>Sales</Form.Option>
            </Form.Select>
          </Form.FormGroup>
        </Add.DescriptionContentTop>
        <Add.DescriptionContentBottom>
          <Form.FormGroup>
            <Form.Label>
              Description <span>(required)</span>
            </Form.Label>
            <Form.TextArea name="" id="" cols="30" rows="10"
             value={description} 
             onChange={(e)=>{
             setDescription(e.target.value)
             console.log(description)
             }} 
            ></Form.TextArea>
          </Form.FormGroup>

         

          <Add.DescriptionHeader>
        <Add.Title>Property Location</Add.Title>
      </Add.DescriptionHeader>


      <Form.FormGroup>
            <Form.Label>
              Address <span>(required)</span>
            </Form.Label>
            <Form.Input  
           type='text'
           value={address} 
           onChange={(e)=>{
           setAddress(e.target.value)
           console.log(address)
           }} 
            />
      </Form.FormGroup>
      <Add.LocationContent>
        <Add.LocationContentTop>
        </Add.LocationContentTop>
        <Add.LocationContentBottom>
          <Form.FormGroup>
            <Form.Label>
              City<span>(required)</span>
            </Form.Label>
            <Form.Input type="text" 
                  value={city} 
                  onChange={(e)=>{
                  setCity(e.target.value)
                  console.log(city)
                  }} 
            />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Label>
              ZipCode<span>(required)</span>
            </Form.Label>
            <Form.Input type="text" 
                  value={zipCode} 
                  onChange={(e)=>{
                  setZipCode(e.target.value)
                  console.log(zipCode)
                  }} 
            />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Label>
              Latitude<span>(for google maps)</span>
            </Form.Label>
            <Form.Input
                  value={latitude} 
                  onChange={(e)=>{
                  setLatitude(e.target.value)
                  console.log(latitude)
                  }} 
            />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Label>
              Longitude<span>(for google maps)</span>
            </Form.Label>
            <Form.Input type="text"
                  value={longitude} 
                  onChange={(e)=>{
                  setLongitude(e.target.value)
                  console.log(longitude)
                  }} 
            />
          </Form.FormGroup>
        </Add.LocationContentBottom>
      </Add.LocationContent>

      <Add.MediaHeader>
        <Add.Title>Property Images</Add.Title>
      </Add.MediaHeader>
      <Add.MediaContent>
        <Form.FormGroup>
          <Form.Label>Images-1</Form.Label>
          {/* Special input file case */}
          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
          <Add.Button onClick={handleFileButton}>Upload Files</Add.Button>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Images-2</Form.Label>
          {/* Special input file case */}
          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
          <Add.Button onClick={handleFileButton}>Upload Files</Add.Button>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Images-3</Form.Label>
          {/* Special input file case */}
          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
          <Add.Button onClick={handleFileButton}>Upload Files</Add.Button>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Images-4</Form.Label>
          {/* Special input file case */}
          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
          <Add.Button onClick={handleFileButton}>Upload Files</Add.Button>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Images-5</Form.Label>
          {/* Special input file case */}
          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
          <Add.Button onClick={handleFileButton}>Upload Files</Add.Button>
        </Form.FormGroup>
      </Add.MediaContent>


      <Add.DetailsHeader>
        <Add.Title>Property Details</Add.Title>
      </Add.DetailsHeader>
      <Add.DetailsContent>
        <Form.FormGroup>
          <Form.Label>Rooms</Form.Label>
          <Form.Input type="text"
           value={rooms} 
           onChange={(e)=>{
           setRooms(e.target.value)
           console.log(rooms)
           }} 
          />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Bedrooms</Form.Label>
          <Form.Input type="text" 
          />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Bathrooms</Form.Label>
          <Form.Input type="text" />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Structure Type</Form.Label>
          <Form.Select name="none" id="" class="form-select"
           value={structureType} 
           onChange={(e)=>{
           setStructureType(e.target.value)
           console.log(structureType)
           }} 
          >
            <Form.Option disabled defaultValue>
              Not Available
            </Form.Option>
            <Form.Option>Brick</Form.Option>
            <Form.Option>Wood</Form.Option>
            <Form.Option>Cement</Form.Option>
          </Form.Select>
        </Form.FormGroup>
      </Add.DetailsContent>

        </Add.DescriptionContentBottom>
      </Add.DescriptionContent>
    </Add.Description>

  );
};






export { AddPropertyForm };
