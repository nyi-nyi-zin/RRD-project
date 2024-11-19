import React from "react";
import { Form, Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useActionData } from "react-router-dom";

const PostForm = ({ header, btnText, oldPostData }) => {
  const data = useActionData();

  let titleError;
  let imageError;
  let dateError;
  let descError;

  if (data && data.errors) {
    const { title, image, date, description } = data.errors;
    titleError = title;
    imageError = image;
    dateError = date;
    descError = description;
  }

  return (
    <section className="form-section">
      <div className="detail-header">
        <p>{header}</p>
        <Link to={"/"}>
          <ArrowLeftIcon className="arrowIcon" />
        </Link>
      </div>

      <Form method="post">
        <div className="form-input">
          <label htmlFor="form-title">Title</label>
          <input
            type="text"
            id="form-title"
            name="title"
            defaultValue={oldPostData ? oldPostData.title : ""}
          />

          {titleError && <span className="text-red-600">{titleError}</span>}
        </div>
        <div>
          <label htmlFor="form-image">Image Url</label>
          <input
            type="url"
            id="form-image"
            name="image"
            defaultValue={oldPostData ? oldPostData.image : ""}
          />
          {imageError && <span className="text-red-600">{imageError}</span>}
        </div>
        <div>
          <label htmlFor="form-date">Date</label>
          <input
            type="date"
            id="form-date"
            name="date"
            defaultValue={oldPostData ? oldPostData.date : ""}
          />
          {dateError && <span className="text-red-600">{dateError}</span>}
        </div>
        <div>
          <label htmlFor="form-description">Description</label>

          <textarea
            name="description"
            id="form-description"
            cols="30"
            rows="5"
            defaultValue={oldPostData ? oldPostData.description : ""}
          ></textarea>
          {descError && <span className="text-red-600">{descError}</span>}
        </div>
        <button className="btn">{btnText}</button>
      </Form>
    </section>
  );
};

export default PostForm;
