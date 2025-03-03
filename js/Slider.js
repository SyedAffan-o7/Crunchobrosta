document.addEventListener("DOMContentLoaded", () => {
  const sliderData = [
    { img: "assets/product/lif.jpg", title: "Burger", price: "151RS" },
    { img: "assets/product/legs_g.jpg", title: "Burger1", price: "151RS" },
    { img: "assets/product/wrap.jpg", title: "Burger2", price: "151RS" },
    { img: "assets/product/g1.jpg", title: "Burger3", price: "151RS" },
    { img: "assets/product/gg.jpg", title: "Burger4", price: "151RS" },
    { img: "assets/product/cruncho.jpg", title: "Burger", price: "151RS" },
    { img: "assets/product/lif.jpg", title: "Burger", price: "151RS" },
  ];

  const sliderContainer = document.querySelector(".slider-images");

  sliderContainer.innerHTML = sliderData
    .map(
      (item, index) => `
      <div class="slider-img ${index === 5 ? "active" : ""}">
        <img src="${item.img}" alt="${item.title}" />
        <h1>${item.title}</h1>
        <div class="details-slider">
          <h2>${item.title} <br /><p>${item.price}</p></h2>
        </div>
      </div>
    `
    )
    .join("");
});
