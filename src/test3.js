function extractRareProperty(itemString) {
    const rareValues = {
        "Souvenir": "Souvenir",
        "StatTrak™": "StatTrak™",
        "★": "★",
        "★ StatTrak™": "Special StatTrak™",
    };
    // Проверяем, содержит ли строка Special StatTrak™
    if (itemString.includes('★ StatTrak™')) {
        return { rare: rareValues["★ StatTrak™"] };
    }

    // Проверяем, содержит ли строка какие-либо из редких строк
    const rareStringFound = Object.keys(rareValues).find(rareString => itemString.includes(rareString));

    return rareStringFound ? rareValues[rareStringFound] : "Default"
}

// Пример использования
const itemString1 = 'StatTrak™ P250';
const itemDetails1 = extractRareProperty(itemString1);
console.log(itemDetails1);
