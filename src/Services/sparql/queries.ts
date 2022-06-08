export const itemsByNameQuery = (
    item: string,
    limit: number,
    offset: number
) => `
        SELECT ?instance (SAMPLE(?instanceLabel) as ?name) (SAMPLE(?imgsourceLabel) as ?image) WHERE {
            VALUES ?item_name {"${item}"@en}
            ?sitelink schema:about ?item;
            schema:isPartOf <https://en.wikipedia.org/>;
            schema:name ?item_name. 
        
            ?instance wdt:P31 ?item.
            ?instance p:P18 ?img.
            ?img ps:P18 ?imgsource.
        
            SERVICE wikibase:label {
                ?instance rdfs:label ?instanceLabel . 
                ?imgsource rdfs:label ?imgsourceLabel .
                bd:serviceParam wikibase:language "en, ru".
            }
        }
        GROUP BY ?instance
        ORDER BY ?instance
        limit ${limit} offset ${offset}`

export const articleByEntityQuery = (entity: string) => `
        SELECT ?article WHERE {
            VALUES ?entity {<${entity}>}
            ?article schema:about ?entity .
            ?article schema:inLanguage "en" .
            ?article schema:isPartOf <https://en.wikipedia.org/>.
        }`
