export const getStorageData = (keyName: string): string[] | null => {
    const savedItem = localStorage.getItem(keyName);

    if (savedItem) { 
        return JSON.parse(savedItem) 
    } else {
        return null;
    }
}