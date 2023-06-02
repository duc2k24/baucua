function getCubic() {
  const cubic_1 = document.querySelector(".cubic_1");
  const cubic_2 = document.querySelector(".cubic_2");
  const cubic_3 = document.querySelector(".cubic_3");

  const btnRandom = document.querySelector(".btn_random");

  const arrRandom = ["Bầu", "Cua", "Tôm", "Cá", "Gà", "Hươu"];

  const bau = document.querySelector(".bau");
  const cua = document.querySelector(".cua");
  const tom = document.querySelector(".tom");
  const ca = document.querySelector(".ca");
  const ga = document.querySelector(".ga");
  const huou = document.querySelector(".huou");

  const prev = [];
  btnRandom.onclick = function () {
    let intervalId;
    let i1;
    let i2;
    

    if (cubic_1) {
      intervalId = setInterval(function () {
        const getItem = Math.floor(Math.random() * arrRandom.length);
        cubic_1.innerHTML = arrRandom[getItem];

        switch ((cubic_1.innerHTML = arrRandom[getItem])) {
          case "Bầu":
            bau.style =
              "color:red; font-size:2rem; ";
            break;
          case "Cua":
            cua.style =
              "color:red; font-size:2rem; ";
            break;
          case "Tôm":
            tom.style =
              "color:red; font-size:2rem; ";
            break;
          case "Cá":
            ca.style =
              "color:red; font-size:2rem; ";
            break;
          case "Gà":
            ga.style =
              "color:red; font-size:2rem; ";
            break;
          case "Hươu":
            huou.style =
              "color:red; font-size:2rem; ";
            break;
          default:
            break;
        }
      }, 200);

      setTimeout(function () {
        clearInterval(intervalId);
      }, 3000);
    }

    if (cubic_2) {
       i1 = setInterval(function () {
        const getItem = Math.floor(Math.random() * arrRandom.length);
        cubic_2.innerHTML = arrRandom[getItem];
        switch ((cubic_2.innerHTML = arrRandom[getItem])) {
          case "Bầu":
            bau.style =
              "color:red; font-size:2rem; ";
            break;
          case "Cua":
            cua.style =
              "color:red; font-size:2rem; ";
            break;
          case "Tôm":
            tom.style =
              "color:red; font-size:2rem; ";
            break;
          case "Cá":
            ca.style =
              "color:red; font-size:2rem; ";
            break;
          case "Gà":
            ga.style =
              "color:red; font-size:2rem; ";
            break;
          case "Hươu":
            huou.style =
              "color:red; font-size:2rem; ";
            break;
          default:
            break;
        }
      }, 200);

      setTimeout(function () {
        clearInterval(i1);
      }, 3000);
    }
    if (cubic_3) {
       i2 = setInterval(function () {
        const getItem = Math.floor(Math.random() * arrRandom.length);
        cubic_3.innerHTML = arrRandom[getItem];
        switch ((cubic_3.innerHTML = arrRandom[getItem])) {
          case "Bầu":
            bau.style =
              "color:red; font-size:2rem; ";
            break;
          case "Cua":
            cua.style =
              "color:red; font-size:2rem; ";
            break;
          case "Tôm":
            tom.style =
              "color:red; font-size:2rem; ";
            break;
          case "Cá":
            ca.style =
              "color:red; font-size:2rem; ";
            break;
          case "Gà":
            ga.style =
              "color:red; font-size:2rem; ";
            break;
          case "Hươu":
            huou.style =
              "color:red; font-size:2rem; ";
            break;
          default:
            break;
        }
      }, 100);

      setTimeout(function () {
        clearInterval(i2);
      }, 3000);
    }

    cubic_1.innerHTML = "";
    cubic_2.innerHTML = "";
    cubic_3.innerHTML = "";

    bau.style = "color:black; animation:none;";
    cua.style = "color:black; animation:none;";
    tom.style = "color:black; animation:none;";
    ca.style = "color:black; animation:none;";
    ga.style = "color:black; animation:none;";
    huou.style = "color:black; animation:none;";
  };
}

getCubic();
