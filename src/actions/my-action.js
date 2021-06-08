export const SHUFFLE_CARDS = 'SHUFFLE_CARDS'
export const TAKE_CARD = 'TAKE_CARD'
export const TAKE_RANDOM_CARDS = 'TAKE_RANDOM_CARDS'
export const CLAIM_ROUTE = 'CLAIM_ROUTE'
export const TAKE_TICKETS = 'TAKE_TICKETS';

export const claimRoute = (data) => ({
  type: CLAIM_ROUTE,
  data
})

export const shuffleCards = (cards) => ({
  type: SHUFFLE_CARDS,
  data: cards
})

export const takeCard = (cardId) => ({
  type: TAKE_CARD,
  data: cardId
})

export const takeRandomCards = () => ({
  type: TAKE_RANDOM_CARDS,
})

export const takeTickets = (data) => ({
  type: TAKE_TICKETS,
  data
})
