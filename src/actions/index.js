export const addCard = (card) => {
  const { title, category, content, id } = card;
  return {
    type: 'ADD_FLASH_CARD',
    title: title,
    category: category,
    content: content,
    id: id
    
  }
}

export const deleteCard = id => ({
  type: 'DELETE_FLASH_CARD',
  id
});
export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});
