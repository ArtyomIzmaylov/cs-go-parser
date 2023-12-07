const axios = require('axios');
const cheerio = require('cheerio');

class SteamMarketParser {
    parseItems(html) {
        const $ = cheerio.load(html);
        const searchResults = $('#searchResultsRows');
        const items = [];
        searchResults.find('a.market_listing_row_link').each((index, element) => {
            const itemPrice = $(element).find('span.normal_price').text().trim();
            const itemNameEn = $(element).find('span.market_listing_item_name').text().trim();
            const itemNameRu = $(element).find('.market_listing_item_name').text().trim();
            const itemHref = $(element).attr('href');
            const itemImage = $(element).find('img.market_listing_item_img').attr('src');
            const itemInfo = {
                price: itemPrice,
                name_en: itemNameEn,
                name_ru: itemNameRu,
                href: itemHref,
                image: itemImage
            };

            items.push(itemInfo);
        });

        return items;
    }
}

// Пример использования
async function exampleUsage() {
    const url = 'https://steamcommunity.com/market/search?appid=730#p2_popular_desc';

    try {
        const response = await axios.get(url);
        const html = response.data;

        const steamMarketParser = new SteamMarketParser();
        const parsedItems = steamMarketParser.parseItems(html);

        console.log(parsedItems);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

exampleUsage();
