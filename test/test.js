import Student from '../main/main'
// const Student = require('../main/main');

test('测试',()=>{
    const student=new Student('xiaoming',24)
    expect(student.getName()).toBe('xiaoming')

})

test('年龄获取函数测试',()=>{
    const student =new Student('卢超',24)
    expect(student.getAge()).toBe(24)
})