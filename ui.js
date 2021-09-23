class UI {
    constructor() {
        this.cards = document.querySelector(".section-center");
        this.btnCnt = document.querySelector(".btn-pages");
    }

    displayUsers(records) {
        this.cards.innerHTML = "";
        records.forEach((el) => {
            this.cards.append(this.generateCards(el));
        });
    }

    displayButtons(btnArr) {
        btnArr.forEach((btnId) => {
            this.btnCnt.append(this.generateButtons(btnId));
        });
    }

    generateCards(obj) {
        const card = document.createElement("article");
        card.classList.add("card");
        card.innerHTML = `<div class="id">${obj.id}</div>
                        <p class="name"> ${obj.name}</p>
                        <p class="email"> ${obj.email}</p>`;
        return card;
    }

    generateButtons(index) {
        var button = document.createElement("button");
        button.type = "button";
        button.innerHTML = index;
        button.className = "page-btns btn";
        button.dataset.index = index;
        return button;
    }
}