const API_URL = "https://10.69.0.140:3000/";

const btnNewInvoice = document.querySelector("#new-invoice");
const btnCancel = document.querySelector("#cancel-invoice");
const btnSaveSend = document.querySelector("save-send");
const dialog = document.querySelector("#invoice-modal");
const form = document.querySelector("invoice-form");
const main = document.querySelector("main");

function createNewCard() {
	const card = document.createElement("div");
	const cardTag = document.createElement("div");
	const sharpTag = document.createElement("span");
	const numberTag = document.createElement("h5");
	const date = document.createElement("span");
	const name = document.createElement("sapn");
	const cardPrice = document.createElement("h5");
	const monoyLogo = document.createElement("span");
	const moneyPrice = document.createElement("span");
	const cardStatus = document.createElement("div");
	const cardStatusCircle = document.createElement("div");
	const cardStatusString = document.createElement("h5");

	main.appendChild(card);
	card.appendChild(cardTag);
	card.appendChild(date);
	card.appendChild(name);
	card.appendChild(cardPrice);
	card.appendChild(cardStatus);
    cardTag.appendChild(sharpTag);
    cardtag.appendChild(numberTag);
    cardPrice.appendChild(monoyLogo);
    cardPrice.appendChild(moneyPrice);
    cardStatus.appendChild(cardStatusCircle);
    cardStatus.appendChild(cardStatusString);

    // card.setAttribute("class", "card");
    card.className.add("card");
}

btnNewInvoice.addEventListener("click", () => {
	dialog.show();
});

btnCancel.addEventListener("click", () => {
	dialog.close();
});

btnSaveSend.addEventListener("click", () => {
	e.preventDefault();
});
