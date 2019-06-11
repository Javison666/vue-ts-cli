import $fn from '@/utils/fn'
import httpApi from '@/apis/httpApi'

export const auth = (json = {
    username,
    pwd
}) => $fn.httpPost({
    url: httpApi.crc.login,
    json
})
export const getUser = (json = {
    token,
    patId
}) => $fn.httpPost({
    url: httpApi.crc.getUser,
    json
})
export const getCheck = (json = {
    token,
    patName,
    patCard,
    compatId,
    startDate,
    endDate
}) => $fn.httpPost({
    url: httpApi.crc.getCheck,
    json
})
export const getTest = (json = {
    token,
    patName,
    patCard,
    compatId,
    startDate,
    endDate
}) => $fn.httpPost({
    url: httpApi.crc.getTest,
    json
})
export const getTestList = (json = {
    token,
    recordId
}) => $fn.httpPost({
    url: httpApi.crc.getTestList,
    json
})