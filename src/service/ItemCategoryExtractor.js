const ItemCategoryRareExtractor = require('./ItemCategoryRareExtractor')

class ItemCategoryExtractor {
    constructor(itemCategoryRareExtractor) {
        this.itemCategoryRareExtractor = itemCategoryRareExtractor;
    }

    extract(itemString) {
        const defaultWeapon = "Default Weapon"; // Значение по умолчанию для оружия, если не найдено
        const defaultSkin = "Default Skin"; // Значение по умолчанию для скина, если не найдено

        // Регулярное выражение для извлечения данных из строки
        const match = itemString.match(/(?:([^|]+)\s*\|\s*)?(.*?)\s*\(([^)]+)\)/);

        // Извлекаем данные или используем значения по умолчанию
        let weapon = match && match[1] ? match[1].trim() : defaultWeapon;
        const skin = match && match[2] ? match[2].trim() : defaultSkin;
        const condition = match && match[3] ? match[3].trim() : "Unknown Condition";
        const rare = this.itemCategoryRareExtractor.extract(weapon)
        // Если есть пробелы в weapon, удаляем первое слово
        if (weapon.includes(' ')) {
            const firstSpaceIndex = weapon.indexOf(' ');
            weapon = weapon.slice(firstSpaceIndex + 1);
        }

        // Создаем объект с извлеченными данными
        const itemDetails = {
            weapon: weapon,
            skin: skin,
            condition: condition,
            rare : rare
        };

        return itemDetails;
    }
}

const itemCategoryExtractor = new ItemCategoryExtractor(new ItemCategoryRareExtractor());
console.log(itemCategoryExtractor.extract('P250 | Boreal Forest (Field-Tested)'));
