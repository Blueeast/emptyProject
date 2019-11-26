/**
 * 在这里我们定义了全局的一些变量，来对项目进行管理
 */
/**
 * 线上环境
 */
export const ONLINEHOST: string = 'http://rap2api.taobao.org/app/mock/237852/api'

/**
 * 当前的host  ONLINEHOST | QAHOST | MOCKHOST
 */
export const MAINHOST: string = ONLINEHOST

/**
 * 请求的公共参数
 */
export const conmomPrams: any = {}

/**
 * @description token在Cookie中存储的天数，默认1天
 */
export const cookieExpires: number = 1
