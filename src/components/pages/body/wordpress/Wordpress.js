import React from "react";
import WordpressList from "./WordpressList";

function Wordpress(wpdata) {
  // console.log(wpdata);

  return (
    <div className="wordpress">
      {/* <!-- Project Tittle Start --> */}
      <div className="row">
        <div className="col-md-8">
          <div className="catt-title">
            <h3>
              Some <span className="txt-success">Projects</span> I've Build By
            </h3>
            <div className="text-right">
              <a
                className="rn-btn btn-brd mr--30"
                href="more//portfolio/wordpress.html"
              >
                <span>Wordpress</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Project Tiitle End --> */}

      <WordpressList wpdata={wpdata} />
    </div>
  );
}
export default Wordpress;
