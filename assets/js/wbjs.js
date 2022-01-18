document.body.onload = addElement;

function addElement() {
  //Pick Root
  const root = document.getElementById("root");

  // main-page-wrapper Create
  let mainwrapper = document.createElement("div");
  mainwrapper.classList = "main-page-wrapper";
  root.appendChild(mainwrapper);

  // rn-header-image-area Create
  let rnHeader = document.createElement("div");
  rnHeader.classList = "rn-header-image-area";
  mainwrapper.appendChild(rnHeader);

  // bg_image--9 bg_image h-100 Create
  let bgImage9 = document.createElement("div");
  bgImage9.classList.add("bg_image--9", "bg_image", "h-100");
  rnHeader.appendChild(bgImage9);
}
