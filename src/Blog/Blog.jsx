import React from "react";
import swimmer from "../../public/Image/swimmer.jpg";
import crossfit from "../../public/Image/crossfit.jpg";
import femaleTeam from "../../public/Image/female-soccer-team.jpg";
import football from "../../public/Image/female-football-players.jpg";

const Blog = () => {
  return (
    <>
      <h1 className="font-bold text-center text-2xl mt-10">Latest Blog</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:ml-24 lg:mx-0 mx-16 mt-10">
        <div className="card card-compact w-[250px] my-5 lg:my-0  bg-base-100 shadow-xl">
          <figure>
            <img src={swimmer} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Academy Announces 2022 Inaugural Women In Sports Committee
              Scholarship Class
            </h2>
            <p className="pb-5 px-5">
              Coaching is a form of development in which an experienced person,
              called a coach, supports a learner
            </p>
          </div>
        </div>
        <div className="card card-compact w-[250px] my-5 lg:my-0  bg-base-100 shadow-xl">
          <figure>
            <img src={crossfit} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title px-5">
              Shippo Discusses Athlete Wellness with Muscle & Fitness
            </h2>
            <p className="pb-5 px-5">
              Mental health is a state of mental well-being that enables people
              to cope with the stresses of life, realize their abilities
            </p>
          </div>
        </div>
        <div className="card card-compact w-[250px] my-5 lg:my-0  bg-base-100 shadow-xl">
          <figure>
            <img src={femaleTeam} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Helping Student Athletes Reach Their Full Potential
            </h2>
            <p className="pb-5 px-5">
              normal state of health, mind, or strength; recovery as the action
              or process of regaining possession of control
            </p>
          </div>
        </div>
        <div className="card card-compact w-[250px] my-5 lg:my-0  bg-base-100 shadow-xl">
          <figure>
            <img src={football} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title px-5">
              Shippo Academy Hosts On Campus 2023 Academic College Fair
            </h2>
            <p className="pb-5 px-5">
              Activities which embody or convey cultural expressions,
              irrespective of the commercial value they may have.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
