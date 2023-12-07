const axios = require('axios');
const cheerio = require('cheerio');
const ItemParserService = require("./service/ItemParserService");


// Пример использования
async function exampleUsage() {
    const url = 'https://steamcommunity.com/market/search?q=&category_730_ItemSet%5B%5D=any&category_730_ProPlayer%5B%5D=any&category_730_StickerCapsule%5B%5D=any&category_730_TournamentTeam%5B%5D=any&category_730_Weapon%5B%5D=any&category_730_Quality%5B%5D=tag_tournament&appid=730'
    try {
        const response = await axios.get(url);
        const html = response.data;
        const itemParserService = new ItemParserService();
        const parsedItems = itemParserService.parseItems(html);
        console.log(parsedItems);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

exampleUsage();
