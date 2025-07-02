import React from "react";
import user from "../assets/person.jpg"

const Stats = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="stats shadow bg-orange-50 text-gray-800">
        
        <div className="stat">
          <div className="stat-figure text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div className="stat-title">Total Recipe Likes</div>
          <div className="stat-value text-red-500">18.2K</div>
          <div className="stat-desc">↑ 15% this week</div>
        </div>

       
        <div className="stat">
          <div className="stat-figure text-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3m0-6v6m6-3a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>
          <div className="stat-title">Recipes Shared</div>
          <div className="stat-value text-yellow-600">4,382</div>
          <div className="stat-desc">↑ 9% from last month</div>
        </div>

        
        <div className="stat">
          <div className="stat-figure text-green-600">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img
                  src={user}
                />
              </div>
            </div>
          </div>
          <div className="stat-title">Active Foodies</div>
          <div className="stat-value text-green-600">92%</div>
          <div className="stat-desc">✔️ Logged in this week</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
