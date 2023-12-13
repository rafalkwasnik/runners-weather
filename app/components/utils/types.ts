export type handleStorageCityProps = {
    userCity: string
    handleAddedCities: (val: string[]) => void
    handleSetErrors: (val: string) => void
    handleClearInput: () => void
}