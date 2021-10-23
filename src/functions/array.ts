export function random(itens: any[]): any[] {
  return itens
    .map((item) => ({ item, random: Math.random() }))
    .sort((obj1, obj2) => obj1.random - obj2.random)
    .map((obj) => obj.item);
}
