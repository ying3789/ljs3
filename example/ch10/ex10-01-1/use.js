const u1 = { name: '和洋' };
const userRoles = new Map([
  [u1, '管理者']
]);

console.log(userRoles.get(u1)); // 管理者
console.log(userRoles.has(u1)); // true
console.log(userRoles.size); //1

for(let u of userRoles.keys())
  console.log(u); // { name: '和洋' }

for(let r of userRoles.values())
  console.log(r); // 管理者

for(let [u, r] of userRoles.entries()) /* entriesはMapのデフォルトイテレータなのでuserRolesとできる */
  console.log(`${u.name}: ${r}`); // 和洋: 管理者

console.log(userRoles.values()); // MapIterator { '管理者', 'ユーザー', '管理者' }
console.log([...userRoles.values()]); // [ '管理者', 'ユーザー', '管理者' ]
userRoles.delete(u1);
userRoles.clear();//すべて削除

/* mapはオブジェクトに対して値を対応付けられ、オブジェクトを汚さずに情報を記憶することができる */

