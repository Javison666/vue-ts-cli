import $fn from '@/utils/fn'
import httpApi from '@/apis/httpApi'

export const auth = (json = {
    userName,
    password,
    projectid,
    checkcode
}) => $fn.httpPost({
    url:httpApi.edc.auth,
    json
})