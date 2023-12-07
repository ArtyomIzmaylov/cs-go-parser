const cheerio = require("cheerio");

class ItemParserService {
    parseItems(html) {
        const $ = cheerio.load(html);
        const searchResults = $('#searchResultsRows');
        const items = [];

        searchResults.find('a.market_listing_row_link').each((index, element) => {
            const rawPriceString = $(element).find('span.normal_price').text().trim();
            const match = rawPriceString.match(/Starting at:\s*\$([\d.]+)/);
            const itemPrice = match ? parseFloat(match[1]) : null;

            const itemQuantity = parseInt($(element).find('span.market_listing_num_listings_qty').text().trim().replace(/,/g, ''), 10);
            const itemNameEn = $(element).find('span.market_listing_item_name').text().trim();
            const itemHref = $(element).attr('href');
            const itemImage = $(element).find('img.market_listing_item_img').attr('src');

            const itemInfo = {
                price: itemPrice,
                quantity: itemQuantity,
                name_en: itemNameEn,
                href: itemHref,
                image: itemImage
            };

            console.log(itemInfo.price);
            items.push(itemInfo);
        });

        return items;
    }
}

module.exports = ItemParserService;
