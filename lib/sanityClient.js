import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'ublzw1o4',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skHQN0NjWZ1AdRNyEjDY5NpcsaBaiN01Om6m92w3rU1zIcLjVJIgvz2eWf7jxn85M2hMX2JSkMhOUD1EVYqsSNcp9oxyKyvV5gYt8miwhLv92IGRXkDKhxk5TxL7Wq7vMBc9BCxtTsU1P23trXhkRDCS5g6sNLlOIrwtXKdivughD9dtSxJZ',
  useCdn: false,
})