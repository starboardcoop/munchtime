import { writable } from "svelte/store";

class ItemStore {
    items = writable([]);

    addItem(item) {
        console.log(`Adding ${item} to bag...`);
        this.items.update(existing => existing + item);
    }
}

export default new ItemStore();