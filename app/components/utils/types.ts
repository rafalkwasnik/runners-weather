export type handleStorageCityProps = {
    userCity: string
    handleAddCities: (val: string[]) => void
    handleSetErrors: (val: string) => void
    handleClearInput: () => void
}