import React from "react";
import { FaRegStar, FaEye } from "react-icons/fa";
import { VscRepoForked } from "react-icons/vsc";
import { StarredItem } from "../../types";

interface StarredListProps {
  starred: StarredItem[];
}

export default function StarredList({ starred }: StarredListProps) {
  return (
    <div className="row row--25 mt--10 mt_md--10 mt_sm--10 flex flex-wrap">
      {starred.map((item) => {
        return (
          <div
            key={item.id}
            data-aos="flip-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="600"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 w-full md:w-1/2 xl:w-1/3 mt--60 mt_md--40 mt_sm--60"
          >
            <div className="rn-portfolio w-full">
              <div className="inner">
                <div className="thumbnail">
                  <div className="owner flex items-end">
                    {item.owner?.avatar_url && (
                      <img
                        src={item.owner.avatar_url}
                        className="img-fluid w-1/4 rounded-full max-w-full"
                        alt={item.owner.login || "Profile"}
                      />
                    )}
                  </div>
                </div>

                <div className="content">
                  <div className="head flex justify-between">
                    <h4 className="title uppercase mb-3">
                      <a href={item.html_url} target="_blank" rel="noreferrer">
                        {item.name}
                        <i></i>
                      </a>
                    </h4>
                  </div>
                  <div className="category-info">
                    <div className="category-list">
                      {item.language ? (
                        <div
                          className={
                            "btn p-3 text-light font-bold uppercase " +
                            item.language.toLowerCase() +
                            " btns"
                          }
                        >
                          {item.language}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="meta">
                      <div className="card-btn-container flex">
                        <div>
                          <span className="btn card-btn" title="Star">
                            <FaRegStar className="inline-block" /> <br />
                            {item.stargazers_count}
                          </span>
                        </div>
                        <div>
                          <span className="btn card-btn" title="Watch">
                            <FaEye className="inline-block" /> <br />
                            {item.watchers_count}
                          </span>
                        </div>
                        <div>
                          <span className="btn card-btn" title="Fork">
                            <VscRepoForked className="inline-block" />
                            <br /> {item.forks_count}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
