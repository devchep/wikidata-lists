const queries = {
    itemsByNameQuery: (item: string, limit: number, offset: number) => `
        SELECT ?article (SAMPLE(?instanceLabel) as ?name) (SAMPLE(?imgsourceLabel) as ?image) WHERE {
            VALUES ?item_name {"${item}"@en}
            ?sitelink schema:about ?item;
                schema:isPartOf <https://en.wikipedia.org/>;
                schema:name ?item_name. 
        
            ?instance wdt:P31 ?item;
                p:P18 ?img.

            VALUES ?language { "en" }
            VALUES ?wiki {<https://en.wikipedia.org/>}
            ?article schema:about ?instance;
                schema:inLanguage ?language;
                schema:isPartOf ?wiki.
        
            ?img ps:P18 ?imgsource.

            SERVICE wikibase:label {
                ?instance rdfs:label ?instanceLabel . 
                ?imgsource rdfs:label ?imgsourceLabel .
                bd:serviceParam wikibase:language "en".
            }
        }
        GROUP BY ?article
        ORDER BY ?article
        limit ${limit} offset ${offset}`,
}

export default queries
