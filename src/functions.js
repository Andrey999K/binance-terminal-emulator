// ОКРУГЛЕНИЕ ЧИСЛА ДО ОПРЕДЕЛЁННОГО ЗНАКА В МЕНЬШУЮ СТОРОНУ
export const roundNumber = (value, count) => {
    return Math.floor(value * Math.pow(10, count)) / Math.pow(10, count);
}

// ГЕНЕРАЦИЯ РАНДОМНОГО ЧИСЛА В ДИАПОЗОНЕ
export const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

// ПРИВЕДЕНИЕ ЧИСЛА ДАТЫ ИЛИ ВРЕМЕНИ К ФОРМАТУ С НУЛЁМ
export const dateTimeWithNull = (value) => {
    return value < 10 ? '0' + value : value
}

// ПОЛУЧЕНИЕ ТЕКУЩЕГО ВРЕМЕНИ
export const getTime = () => {
    return dateTimeWithNull((new Date()).getHours()) + ':'
        + dateTimeWithNull((new Date()).getMinutes()) + ':'
        + dateTimeWithNull((new Date()).getSeconds())
}