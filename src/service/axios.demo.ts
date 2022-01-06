import axios from 'axios'

// axios的实例对象
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

// 模拟axios的get请求
axios
  .get('http://httpbin.org/get', {
    params: {
      id: 1,
      name: '张三'
    }
  })
  .then((res) => {
    console.log(res.data)
  })

// 模拟axios的post请求
axios
  .post('http://httpbin.org/post', {
    data: {
      id: 1,
      name: '张三'
    }
  })
  .then((res) => {
    console.log(res.data)
  })
