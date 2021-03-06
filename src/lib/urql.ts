import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from "urql";

const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: 'https://api-sa-east-1.graphcms.com/v2/cl02ery0xaye001xnd281dqst/master',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };