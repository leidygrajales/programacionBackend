const fs = require('fs').promises

class Container {

    constructor(path) {
        this.path = path
    }

    async getAll() {
        const reader = await fs.readFile(this.path, "utf-8");
        return JSON.parse(reader)
    }

    async getRandom() {
        const reader = await fs.readFile(this.path, "utf-8");
        const products = JSON.parse(reader)

        const random = Math.floor(Math.random() * products.length);

        return products[random] || {}
    }
}

module.exports = Container