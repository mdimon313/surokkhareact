import { processInfo } from "./infor.js";

window.addEventListener("load", () => {
  const getInfoBox = document.querySelector(".process_box");
  processInfo.map((process) => {
    const { title, img, desc } = process;
    const card = `<div class="col-12 col-sm-4 pt-4 text-center">
                  <div class="process_img">
                    <img
                      src="${img}"
                      alt=${title}
                      class="img-fluid mb-3"
                    />
                  </div>
                  <div class="process_disc">
                    <h4>${title}</h4>
                    <p>
                      ${desc}
                    </p>
                  </div>
                </div>`;
    getInfoBox.innerHTML += card;
  });
});
