import React, { Fragment } from "react";
import { FaRegStar, FaEye, FaExternalLinkAlt } from "react-icons/fa";
import { VscRepoForked } from "react-icons/vsc";
import dateFormat from "dateformat";

const FollowersList = (props) => {
  // console.log(props.followers);
  return (
    <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
      {props.followers.map((follower) => {
        // const pages = repo.homepage;

        return (
          <div
            key={follower.id}
            data-aos="flip-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="600"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="rn-portfolio w-100">
              <div className="inner">
                <div className="owners d-block align-items-center text-center">
                  <img
                    src={follower.avatar_url}
                    className="img-fluid w-25 rounded-circle "
                    alt="Profile"
                  />
                  <h6 className="bg-dark px-3 bg-opacity-50 rounded">
                    {follower.login}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersList;
