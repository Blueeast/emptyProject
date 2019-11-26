/*
 * @Description: 公共函数
 * @Author: ink
 * @Date: 2019-11-26 12:19:30
 * @LastEditors: ink
 * @LastEditTime: 2019-11-26 12:20:00
 */
// tsingnore
import Cookies from 'js-cookie'
import { cookieExpires } from '@/config' // cookie保存的天数
import router from '@/router'
/**
 * @Author: ink
 * @msg: 存取token
 * @param {string} token
 */
export const TOKEN_KEY: string = 'token'
export const setToken = (token: string) => {
    Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
    router.replace({name: '/home'})
}
export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)
    if (token) {
        return token
    } else {
        return false
    }
}

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = (url: string) => {
    const keyValueArr = url.split('?')[1].split('&')
    const paramObj: any = {}
    keyValueArr.forEach(item => {
        const keyValue = item.split('=')
        paramObj[keyValue[0]] = keyValue[1]
    })
    return paramObj
}

/**
 * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
 * 如果没有传入key这个参数，则判断obj对象是否有键值对
 */
export const hasKey = (obj: any, key: string | number) => {
    if (key) {
        return key in obj
    } else {
        const keysArr = Object.keys(obj)
        return keysArr.length
    }
}

/**
 * @msg: 获取系统当前时间
 * @param {string} fmt 时间格式 具体看代码
 * @return: string
 */
export const getDate = (fmt: any) => {
    let time = ''
    const date = new Date()
    const o: any = {
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "H+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        "S": date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
        time = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    for (const k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            time = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ?
            (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
        }
    }
    return time
}

/**
 * @msg: 获取系统当前时间
 * @param {string} date 时间
 * @param {string} fmt 时间格式
 * @return: string
 */
export const formatDate = (date: any, fmt: string) => {
    let time = ''
    const o: any = {
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "H+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        "S": date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
        time = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    for (const k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            time = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ?
            (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
        }
    }
    return time
}

// copy in the 'fx-fuli' utils
/**
 * 校验手机号是否正确
 * @param phone 手机号
 */

export const verifyPhone = (phone: string | number) => {
    const reg = /^1[34578][0-9]{9}$/
    const Phone = phone.toString().trim()
    const toastStr = Phone === '' ? '手机号不能为空~' : !reg.test(Phone) && '请输入正确手机号~'
    return {
        errMsg: toastStr,
        done: !toastStr,
        value: Phone
    }
}

export const verifyStr = (str: string | number, text: string) => {
    const Str = str.toString().trim()
    const toastStr = Str.length ? false : `请填写${text}～`
    return {
        errMsg: toastStr,
        done: !toastStr,
        value: Str
    }
}

// 截取字符串
export const sliceStr = (str: any, sliceLen: number) => {
    if (!str) { return '' }
    let realLength = 0
    const len = str.length
    let charCode = -1
    for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i)
        if (charCode >= 0 && charCode <= 128) {
            realLength += 1
        } else {
            realLength += 2
        }
        if (realLength > sliceLen) {
            return `${str.slice(0, i)}...`
        }
    }

    return str
}


/**
 * JSON 克隆
 * @param {Object | Json} jsonObj json对象
 * @return {Object | Json} 新的json对象
 */
export function objClone(jsonObj: any) {
    let buf: any
    if (jsonObj instanceof Array) {
        buf = []
        let i = jsonObj.length
        while (i--) {
            buf[i] = objClone(jsonObj[i])
        }
        return buf
    } else if (jsonObj instanceof Object) {
        buf = {}
        for (const k in jsonObj) {
            buf[k] = objClone(jsonObj[k])
        }
        return buf
    } else {
        return jsonObj
    }
}
