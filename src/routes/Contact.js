import { Form } from "react-router-dom";
import React, { useState } from 'react';

export default function Contact() {
  const contact = {
    first: "Satya Sai ",
    last: "Thota",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "chinss07",
    notes: "A newBie in React!",
    favorite: true,
  };

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = (event) => {
    event.preventDefault();
    // Logic to handle delete action
    if (showConfirmation) {
      console.log("Deleting...");
      // Close the confirmation dialog
      setShowConfirmation(false);
    }
  };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
          alt="img"
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={handleDelete}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>

        {/* Confirmation dialog */}
        {showConfirmation && (
          <div className="confirmation-dialog">
            <p>Are you sure you want to delete?</p>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={() => setShowConfirmation(false)}>No</button>
          </div>
        )}
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
