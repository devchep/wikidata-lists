import { SparqlEndpointFetcher } from 'fetch-sparql-endpoint'
import { IBindings } from 'sparqljson-parse'
import { Card } from './services'
import * as queries from './sparql/queries'

const fetcher = new SparqlEndpointFetcher()

const executeQuery = async (item: string): Promise<Card[]> => {
    const cards: Card[] = []

    const bindingsStream = await fetcher.fetchBindings(
        'https://query.wikidata.org/sparql',
        queries.itemsByNameQuery(item, 10, 0)
    )

    bindingsStream.on('data', (data: IBindings) => {
        const card: Card = {
            name: data.instanceLabel.value,
            imageurl: data.imgsourceLabel.value,
            instance: data.instance.value,
        }
        cards.push(card)
    })

    return cards
}

export default executeQuery
