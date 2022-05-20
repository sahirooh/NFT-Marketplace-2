import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'hmg5knlu',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skO1Zl9hGKiIhfK0zXiNfqLLKHwkKFkfLap7j1CaWU7rsCJIj0oo7WlTTab8MfdRouwhrwHfaSrAG6JmqgUcPdjeF2v9YHjQg5RPVlvOVA2CPfXOt0dsQOWFvdvj4WI3OG8QryLkP8QYWHs4aiSXEVyeVmoXpshN2eOcrFuVZBkJCEwklVm8',
  useCdn: false,
})
