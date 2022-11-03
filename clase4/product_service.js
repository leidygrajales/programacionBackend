const fs = require('fs').promises

class Container {

    constructor(path) {
        this.path = path
    }

    async save(obj) {
        try {
            const reader = await fs.readFile(this.path, "utf-8");
            const data = JSON.parse(reader)
            let id;
            data.length === 0
                ? (id = 1)
                : (id = data[data.length - 1].id + 1);
            const newProduct = { id, ...obj };
            data.push(newProduct);
            await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8")
            return newProduct.id;
        }
        catch (e) {
            console.log(e)
        }
    }

    async getById(id) {
        try {
            const reader = await fs.readFile(this.path, "utf-8");
            const data = JSON.parse(reader)
            const obj = data.find(obj => obj.id === id)
            if (!obj) {
                return null
            }
            return obj
        }
        catch (e) {
            console.log(e)
        }
    }

    async getAll() {
        const reader = await fs.readFile(this.path, "utf-8");
        return JSON.parse(reader)
    }

    async deleteById(id) {
        try {
            const reader = await fs.readFile(this.path, "utf-8");
            const data = JSON.parse(reader)
            const filteredData = data.filter(obj => obj.id !== id)

            await fs.writeFile(this.path, JSON.stringify(filteredData, null, 2), "utf-8")
        } catch (e) {
            console.log(e)

        }
    }

    async deleteAll() {
        try {
            await fs.writeFile(this.path, JSON.stringify([], null, 2), "utf-8")
        }
        catch (e) {
            console.log(e)
        }
    }
}

module.exports = Container