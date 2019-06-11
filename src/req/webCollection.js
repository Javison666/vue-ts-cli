import $fn from '@/utils/fn'
import httpApi from '@/apis/httpApi'
export const getData = () => {
    return $fn.httpPost({
        url: httpApi.webCollection.getData,
    })
}
export const addClass = ({
    className,
    classId
}) => {
    return $fn.httpPost({
        url: httpApi.webCollection.addClass,
        json: {
            className,
            classId
        }
    })
}
export const delClass = ({
    id
}) => {
    return $fn.httpPost({
        url: httpApi.webCollection.delClass,
        json: {
            id
        }
    })
}
export const addItem = ({
    id,
    classId,
    name,
    url
}) => {
    return $fn.httpPost({
        url: httpApi.webCollection.addItem,
        json: {
            id,
            classId,
            name,
            url
        }
    })
}
export const delItem = ({
    id
}) => {
    return $fn.httpPost({
        url: httpApi.webCollection.delItem,
        json: {
            id
        }
    })
}