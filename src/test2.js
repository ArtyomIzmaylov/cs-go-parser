function extractItemDetails(itemString) {
    const defaultType = "Default Type"; // Значение по умолчанию для типа, если не найдено
    const defaultSkin = "Default Skin"; // Значение по умолчанию для скина, если не найдено

    // Регулярное выражение для извлечения данных из строки
    const match = itemString.match(/(?:([^|]+)\s*\|\s*)?(.*?)\s*\(([^)]+)\)/);

    // Извлекаем данные или используем значения по умолчанию
    const itemType = match && match[1] ? match[1].trim() : defaultType;
    const itemWeapon = match && match[2] ? match[2].trim() : defaultSkin;
    const itemCondition = match && match[3] ? match[3].trim() : "Unknown Condition";

    // Создаем объект с извлеченными данными
    const itemDetails = {
        type: itemType,
        weapon: itemWeapon,
        condition: itemCondition
    };

    return itemDetails;
}

// Пример использования
const itemString1 = 'Souvenir P250 | Boreal Forest (Field-Tested)';
const itemDetails1 = extractItemDetails(itemString1);
console.log(itemDetails1);

const itemString2 = 'P250 | Boreal Forest (Field-Tested)';
const itemDetails2 = extractItemDetails(itemString2);
console.log(itemDetails2);
