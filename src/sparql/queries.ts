export const itemListQuery = (item: string, limit: number, offset: number) => {
    return `
        SELECT ?instanceLabel ?imgsourceLabel WHERE {
            VALUES ?item_name {"${item}"@en}
            ?sitelink schema:about ?item;
            schema:isPartOf <https://en.wikipedia.org/>;
            schema:name ?item_name. 
        
            ?instance wdt:P31 ?item.
            ?instance p:P18 ?img.
            ?img ps:P18 ?imgsource.
        
            SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
        }
        limit ${limit} offset ${offset}`
}