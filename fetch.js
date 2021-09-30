class FetchUsers {
    constructor() {
        this.pages = {};
    }

    fetchApi(url) {
        return fetch(url);
    }
    async fetchUsers(url) {
        try {
            const data = await this.fetchApi(url);
            if (!data.ok) {
                throw new Error("Something went wrong!");
            }
            const users = await data.json();
            this.pagination(users);
            return this.pages;
        } catch (error) {
            console.log(`error`, error);
        }
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