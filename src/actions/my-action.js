// Create Redux action types
export const SHUFFLE_CARDS = 'SHUFFLE_CARDS'
export const TAKE_CARD = 'TAKE_CARD'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

// Create Redux action creators that return an action
export const shuffleCards = (cards) => ({
  type: SHUFFLE_CARDS,
  data: cards
})

export const takeCard = (cardId) => ({
  type: TAKE_CARD,
  data: cardId
})

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
})