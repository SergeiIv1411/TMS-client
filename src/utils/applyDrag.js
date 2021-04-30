export const applyDrag = (arr, dragResult, id) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;
    const result = [...arr];
    let itemToAdd = payload;
  
    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex-1, 1)[0];
    }
  
    if (addedIndex !== null) {
      result.splice(addedIndex-1, 0, itemToAdd);
    }
  
    return result;
  };