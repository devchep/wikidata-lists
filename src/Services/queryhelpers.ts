import { SparqlEndpointFetcher } from 'fetch-sparql-endpoint'
import queries from './sparql/queries'

const fetcher = new SparqlEndpointFetcher()

const executeItemsByNameQuery = (
    itemName: string,
    limit: number,
    offset: number
): Promise<NodeJS.ReadableStream> => {
    const item = normalizeItemName(itemName)
    return fetcher.fetchBindings(
        'https://query.wikidata.org/sparql',
        queries.itemsByNameQuery(item, limit, offset)
    )
}

const normalizeItemName = (name: string) => capitalizeFirstLetter(name)

const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1)

export default executeItemsByNameQuery
