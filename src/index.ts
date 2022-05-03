import {SparqlEndpointFetcher} from "fetch-sparql-endpoint";
import { IBindings } from "sparqljson-parse";
import * as queries from "./sparql/queries"

const fetcher = new SparqlEndpointFetcher();

const executeQuery = async () => {
    
    const bindingsStream = await fetcher.fetchBindings(
    'https://query.wikidata.org/sparql',
    queries.itemListQuery("Dog", 10, 0)
    );

    bindingsStream.on('data', (data : IBindings) => {
      const image = data['imgsourceLabel']['value']
      const name = data['instanceLabel']['value']
      console.log(image, name)
    });
}

executeQuery()