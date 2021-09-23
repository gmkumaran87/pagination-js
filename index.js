// JSON url for fetching data
const URL =
    "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";

// Setting the first index to display from pages obj.
let index = 1;

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const users = new FetchUsers();
const ui = new UI();

// Load the stateObj with JSON data
users.fetchUsers(URL);

const init = async() => {
    const pages = await users.fetchUsers(URL);
    console.log(pages);

    ui.displayUsers(pages[index]);

    //Displaying buttons
    ui.displayButtons(Object.keys(pages));

    const pageBtns = document.querySelectorAll(".page-btns");

    // Event Listeners for the Button clicks
    pageBtns.forEach((btn) => {
        btn.addEventListener("click", handleClick);
    });
};

const handleClick = (e) => {
    const btnValue = e.target.innerHTML;

    const totalLength = Object.keys(users.pages).length;

    if (btnValue === "Prev") {
        if (index === 1) {
            index = totalLength;
        } else {
            index--;
        }
    } else if (btnValue === "Next") {
        if (index === totalLength) {
            index = 1;
        } else {
            index++;
        }
    } else {
        index = +btnValue;
    }
    ui.displayUsers(users.pages[index]);
};

// Start the INIT Process of the Page;
init();

//Even listener for prev and next button
prevBtn.addEventListener("click", handleClick);
nextBtn.addEventListener("click", handleClick);