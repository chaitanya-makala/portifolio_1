document
  .querySelector(".hamburguer")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );

// document.querySelector("#qtde").addEventListener("change", atualizarPreco);
// document.querySelector("#js").addEventListener("change", atualizarPreco);
// document
//   .querySelector("#layout-sim")
//   .addEventListener("change", atualizarPreco);
// document
//   .querySelector("#layout-nao")
//   .addEventListener("change", atualizarPreco);
// document.querySelector("#prazo").addEventListener("change", function () {
//   const prazo = document.querySelector("#prazo").value;
//   document.querySelector(
//     "label[for=prazo]"
//   ).innerHTML = `Prazo: ${prazo} semanas`;
//   atualizarPreco();
// });

function atualizarPreco() {
  const qtde = document.querySelector("#qtde").value;
  const temJS = document.querySelector("#js").checked;
  const incluiLayout = document.querySelector("#layout-sim").checked;
  const prazo = document.querySelector("#prazo").value;

  let preco = qtde * 100;
  if (temJS) preco *= 1.1;
  if (incluiLayout) preco += 500;
  let taxaUrgencia = 1 - prazo * 0.1;
  preco *= 1 + taxaUrgencia;

  document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;
}

document.getElementById("learn_more").addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/1JM56aTY9RdVOM8vldZk_Z74_I0FcqhZb/view?usp=sharing",
    "_blank"
  );
});

document.getElementById("meesho").addEventListener("click", () => {
  window.open("https://meesho-clone-umber.vercel.app/", "_blank");
});

document.getElementById("tata").addEventListener("click", () => {
  window.open("https://tata-1mg-clone.vercel.app/", "_blank");
});

document.getElementById("tata1").addEventListener("click", () => {
  window.open("https://tata-1mg-clone.vercel.app/", "_blank");
});

document.getElementById("tata1_code").addEventListener("click", () => {
  window.open(
    "https://github.com/chaitanya-makala/Masai-Projects/tree/main/Tata_1mg-Clone",
    "_blank"
  );
});
document.getElementById("tata_code").addEventListener("click", () => {
  window.open(
    "https://github.com/chaitanya-makala/Masai-Projects/tree/main/Tata_1mg-Clone",
    "_blank"
  );
});
document.getElementById("meesho_code").addEventListener("click", () => {
  window.open(
    "https://github.com/chaitanya-makala/Masai-Projects/tree/main/Meesho-Clone",
    "_blank"
  );
});
