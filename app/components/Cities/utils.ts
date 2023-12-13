export const getStorageData = (keyName: string): string[] | null => {
    const savedItem = localStorage.getItem(keyName);

    if (savedItem) { 
        const parsedItem = JSON.parse(savedItem) 
        return parsedItem;
    } else {
        return null;
    }
}