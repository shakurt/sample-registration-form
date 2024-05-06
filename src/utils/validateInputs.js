export const isInputEmpty = (value) => !value

export const isInputLessThan = (value, numberOfCharacters) => value.length <= numberOfCharacters

export const isInputMoreThan = (value, numberOfCharacters) => value.length >= numberOfCharacters

export const isInputUseInvalidChars = (value) => !/^[a-z](?:[a-z]+\d*|\d{2,})$/i.exec(value)

