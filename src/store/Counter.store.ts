// ts-nocheck
import {
  action,
  observable,
  makeAutoObservable,
  makeObservable,
  computed,
  autorun,
  reaction,
  configure,
  runInAction,
} from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import localForage from 'localforage'

configure({
  enforceActions: 'never', // 默认改状态需要在action中改 如果处理异步 不能在action 配置这个可以压制控制台报错
})

class Counter {
  count = 0

  num = 10

  constructor() {
    // @ts-ignore
    // makeObservable(this, {
    //   count: observable,
    //   add: action.bound, // bound绑定this到Counter实例对象
    //   minus: action.bound,
    //   reset: action.bound,
    //   double: computed,
    // })

    /**
     * 第一个参数： 绑定要绑定的对象
     * 第二个参数： 默认给所有方法和属性 增加 observable， 第二个参数 可以设置为false 做排除 {add: true}
     * 第三个参数： 做this的绑定 绑定到当前对象
     */
    makeAutoObservable(this, { add: true }, { autoBind: true })
    makePersistable(
      this,
      {
        name: 'vuex',
        properties: ['count'],
        storage: localForage,
        expireIn: 86400000, // One day in millsesconds
        removeOnExpiration: true,
        stringify: false,
        debugMode: true,
      },
      { delay: 200, fireImmediately: false }
    ).then((res) => console.log(res))
    makePersistable(
      this,
      {
        name: 'vuex2',
        properties: ['num'],
        storage: window.sessionStorage,
      },
      { delay: 200, fireImmediately: false }
    ).then((res) => {
      console.log(res)
    })
  }

  // 处理异步方案01
  // add() {
  //   setTimeout(() => {
  //     // eslint-disable-next-line no-plusplus
  //     this.count++ // configure({enforceActions: 'never'})
  //   }, 1000)
  // }

  // 处理异步方案02 开始行
  add(val) {
    this.count += val // configure({enforceActions: 'never'})
  }

  addAsync() {
    setTimeout(this.add, 1000)
  }

  // 处理异步方案02 结束行

  // 处理异步方案03 开始行
  addAsync2() {
    setTimeout(() => {
      runInAction(() => {
        // eslint-disable-next-line no-plusplus
        this.count++
      })
    }, 1000)
  }

  // 处理异步方案03 结束行

  minus() {
    // eslint-disable-next-line no-plusplus
    this.count--
  }

  reset() {
    this.count = 0
  }

  // 计算属性
  get double() {
    console.log('double')
    return this.count * 2
  }
}

const counterStore = new Counter()

// 监听属性 counterStore.count 变化autorun就会自动执行 如果依赖了多个每个发生变化都会执行
autorun(() => {
  console.log('counterStore.count', counterStore.count)
})

reaction(
  () => counterStore.count,
  (value, oldValue) => {
    console.log(value, oldValue, 'n-o')
    console.log('count发生了变化')
  }
)

export default counterStore
