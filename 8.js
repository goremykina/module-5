const myMap = new Map();
myMap.set('key', 'value');
myMap.set(777, 'number');
myMap.set(false, 123);
myMap.set(true, ' ');
myMap.set('hello', 0101);

for (let key of myMap.keys()) {
	console.log(`Ключ - ${key}, Значение - ${myMap.get(key)}`)
}
