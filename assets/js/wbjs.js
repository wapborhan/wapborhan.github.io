document.body.onload = addElement;

function addElement() {
  //Pick Root
  const root = document.getElementById("root");

  // main-page-wrapper Create
  const mainwrapper = document.createElement("div");
  mainwrapper.classList = "main-page-wrapper";
  root.appendChild(mainwrapper);

  // rn-header-image-area Create
  const rnHeader = document.createElement("div");
  rnHeader.classList = "rn-header-image-area";
  mainwrapper.appendChild(rnHeader);

  // bg_image--9 bg_image h-100 Create
  const bgImage9 = document.createElement("div");
  bgImage9.classList.add("bg_image--9", "bg_image", "h-100");
  rnHeader.appendChild(bgImage9);

  // rn-content-wrapper create
  const rnContent = document.createElement("div");
  rnContent.classList.add("rn-content-wrapper");
  mainwrapper.appendChild(rnContent);

  // container
  const container = document.createElement("div");
  container.classList.add("container");
  rnContent.appendChild(container);

  //row
  const row = document.createElement("div");
  row.classList.add(
    "row",
    "padding-tb",
    "m_dec-top",
    "align-items-center",
    "d-flex"
  );
  container.appendChild(row);
  //col-lg-6
  const col6_1 = document.createElement("div");
  col6_1.classList.add("col-lg-6");
  row.appendChild(col6_1);

  const col6_2 = document.createElement("div");
  col6_2.classList.add("col-lg-6");
  row.appendChild(col6_2);

  //header-left create
  const headerl = document.createElement("div");
  headerl.classList.add("header-left");
  col6_1.appendChild(headerl);

  // header-thumbnail
  const headert = document.createElement("div");
  headert.classList.add("header-thumbnail");
  headerl.appendChild(headert);

  // personal image add
  const psimage = document.createElement("img");
  psimage.setAttribute("src", "assets/images/logo/banner-02.png");
  psimage.setAttribute("alt", "Borhan");
  headert.appendChild(psimage);
}
