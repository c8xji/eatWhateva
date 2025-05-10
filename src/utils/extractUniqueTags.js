export const extractUniqueTags = (list = []) => {
  const styleSet = new Set()
  const typeSet = new Set()
  const priceSet = new Set()
  const flavorSet = new Set()
  const preferenceSet = new Set()

  list.forEach((item) => {
    styleSet.add(item.style)
    priceSet.add(item.price)
    flavorSet.add(item.flavor)
    item.type.forEach((t) => typeSet.add(t))
    item.preference.forEach((p) => preferenceSet.add(p))
  })

  return {
    style: [...styleSet],
    type: [...typeSet],
    price: [...priceSet],
    flavor: [...flavorSet],
    preference: [...preferenceSet],
  }
}
