import { createContext, useReducer } from 'react'

export const ArticlesContext = createContext()

export const articlesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return {
        articles: action.payload
      }
    case 'CREATE_ARTICLES':
      return {
        articles: [action.payload, ...state.articles]
      }
    case 'DELETE_ARTICLE':
      return {
        articles: state.articles.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const ArticlesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(articlesReducer, {
    items: null
  })

  return (
    <ArticlesContext.Provider value={{...state, dispatch}}>
      { children }
    </ArticlesContext.Provider>
  )
}
