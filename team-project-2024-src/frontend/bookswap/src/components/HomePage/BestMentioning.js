import React from "react";
import { users } from "../../data/mockData";
import "../HomePage/BestMentioning.css";
const BestMentioning = () => {
  return (
    <section className="best-mentioning">
      <h2>Top Wymieniający Użytkownicy</h2>
      {users.map((user) => (
        <div key={user.id} className="user-profile">
          <img
            src={user.profilePic}
            alt={`Profil użytkownika ${user.username}`}
            className="profile-pic"
          />
          <div className="user-info">
            <h3>{user.username}</h3>
            <p>
              ⭐{user.starRating} ({user.reviewsCount} opinii)
            </p>
            <button>Zobacz profil</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BestMentioning;
