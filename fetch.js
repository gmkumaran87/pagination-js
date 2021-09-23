class FetchUsers {
    constructor() {
        this.pages = {};
    }

    fetchApi(url) {
        return fetch(url);
    }
    async fetchUsers(url) {
        const data = await this.fetchApi(url);
        const users = await data.json();

        this.pagination(users);

        return this.pages;
    }

    // Paginate the fetched data into 10 records per page
    pagination(data) {
        let tempArr = [];

        for (let i = 0, count = 1; i < data.length; i++) {
            tempArr.push(data[i]);

            if (i % 10 === 9) {
                this.pages[count] = tempArr;
                count++;
                tempArr = [];
            }
        }
    }
}