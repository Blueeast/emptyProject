import request from '@/utils/request'
import Url from './requestUrl'

export function loginRequest() {
  return request({
    url: Url.login,
  });
}

