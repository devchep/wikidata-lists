import { SparqlEndpointFetcher } from 'fetch-sparql-endpoint'
import * as queries from './sparql/queries'

const fetcher = new SparqlEndpointFetcher()

const executeItemsByNameQuery = (
    item: string,
    limit: number,
    offset: number
): Promise<NodeJS.ReadableStream> =>
    fetcher.fetchBindings(
        'https://query.wikidata.org/sparql',
        queries.itemsByNameQuery(item, limit, offset)
    )

export default executeItemsByNameQuery
