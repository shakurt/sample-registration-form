export const isInputEmpty = (value) => !value.trim()
export const isUsernameValid = (value) => !/^\w{4,15}$/.exec(value)

export const isEmailValid = (email) => !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.exec(email)
