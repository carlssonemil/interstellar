const groupBy = (array, keyGetter) => {
  return array.reduce((map, item) => {
    const key = keyGetter(item)
    map[key] = map[key] || []
    map[key].push(item)
    return map
  }, {})
}

export { groupBy }
