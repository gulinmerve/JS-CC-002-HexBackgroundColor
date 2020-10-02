// Algoritma:
//1. Random gelen Colorlar için bir liste oluşturulacak.
//2.SetColorButton, RandomColorButton ve colorInput tanımlanacak.
//3. 2 adet fonksiyon tanımlanacak.(setColor/ChangeColor)
const colors = [{
  name: "Maroon",
  motto: "Happiness",
},
{
  name: "Yellow",
  motto: "Sun",
},
{
  name: "Olive",
  motto: "GreenMode",
},
{
  name: "Lime",
  motto: "Vitality",
},
{
  name: "Black",
  motto: "Power",
},
];
const setColorButton = document.querySelector("#setColorButton");
const randomColorButton = document.querySelector("#randomColorButton");
const colorInput = document.querySelector(".colorInput");
const colorName = document.querySelector("#colorName");
const colorDesc = document.querySelector("#colorDesc");
const hexInput = document.querySelector(".hexInput");
randomColorButton.addEventListener("click", changeColor);
setColorButton.addEventListener("click", setColor);


function isColor(strColor) {
var s = new Option().style;
s.color = strColor;
return s.color != strColor;
}

function checkHex(hex) {
return /^#[0-9A-F]{6}$/i.test(hex)
}

function changeColor() {
const colorIndex = Math.floor(Math.random() * colors.length); //3-2-0
document.body.style.backgroundColor = colors[colorIndex].name;
colorName.innerText = colors[colorIndex].name;
colorDesc.innerText = colors[colorIndex].motto;
}

function setColor() {

if (colorInput.value === "" && hexInput.value === "") {
  alert("Please enter a color");
} else {
  let newColor = {
    name: colorInput.value.split(":")[0],
    motto: colorInput.value.split(":")[1],
  };

  let hexColor = {
    name: hexInput.value.split(":")[0],
    motto: hexInput.value.split(":")[1],
  };

  if (!checkHex(hexColor.name) && colorInput.value === "") {
    alert("Please enter a valid hex color")
  } else if (isColor(newColor.name) && hexInput.value === "") {
    alert("Please enter a valid color")
  } else {
    if (newColor.motto == undefined && hexColor.motto == undefined) {
      alert("Please enter a correct format (name:motto)");
    } else if (hexColor.motto == undefined && newColor.motto != undefined) {
      if (colors.some((color) => color.name === newColor.name) === false) {
        // (colors.findIndex((color) => color.name === newColor.name) === -1)
        colors.push(newColor);
        console.log(colors);
        document.body.style.backgroundColor = newColor.name;
        colorName.innerText = newColor.name;
        colorDesc.innerText = newColor.motto;
        colorInput.focus();
        colorInput.value = "";
      } else {
        alert("This color exists in your list");
      }
    } else if (hexColor.motto != undefined && newColor.motto == undefined) {
      if (colors.some((color) => color.name === hexColor.name) === false) {
        // (colors.findIndex((color) => color.name === newColor.name) === -1)
        colors.push(hexColor);
        console.log(colors);
        document.body.style.backgroundColor = hexColor.name;
        colorName.innerText = hexColor.name;
        colorDesc.innerText = hexColor.motto;
        hexInput.focus();
        hexInput.value= "";
      } else {
        alert("This color exists in your list");
      }
    }
  }
}
}